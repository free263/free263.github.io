"use strict";
// Tidier code with webpack and better Typescript in Github
// https://github.com/ste-vg/plant-drawer
console.clear();
var BranchState;
(function (BranchState) {
    BranchState[BranchState["ready"] = 0] = "ready";
    BranchState[BranchState["animating"] = 1] = "animating";
    BranchState[BranchState["ended"] = 2] = "ended";
})(BranchState || (BranchState = {}));
class Branch {
    constructor(stage, settings, grid, placeBehind = null, setPath = null) {
        this.branches = [];
        this.state = BranchState.ready;
        this.branchOut = new Rx.Subject();
        this.thornOut = new Rx.Subject();
        this.flowerOut = new Rx.Subject();
        this.leafOut = new Rx.Subject();
        this.grid = 50; //grid;
        this.stage = stage;
        this.placeBehind = placeBehind;
        settings.width = 2;
        settings.opacity = 1;
        this.state = BranchState.animating;
        let path = setPath ? setPath : this.createLine(settings);
        let branchCount = 2;
        for (let i = 0; i < branchCount; i++) {
            this.createSqwig(i, branchCount, path, JSON.parse(JSON.stringify(settings)));
        }
    }
    createSqwig(index, total, path, settings) {
        let branch = document.createElementNS("http://www.w3.org/2000/svg", 'path');
        branch.setAttribute('d', path);
        branch.style.fill = 'none';
        branch.style.stroke = this.getColor(index);
        branch.style.strokeLinecap = "round";
        settings.length = branch.getTotalLength();
        settings.progress = settings.length;
        branch.style.strokeDasharray = `${settings.length}, ${settings.length}`;
        branch.style.strokeDashoffset = `${settings.length}`;
        this.branches.push({ path: branch, settings: settings });
        if (!this.placeBehind)
            this.stage.appendChild(branch);
        else
            this.stage.insertBefore(branch, this.placeBehind.branches[0].path);
        let widthTarget = settings.sections * 0.8;
        TweenMax.set(branch, { x: -index * 3, y: -index * 3 });
        TweenMax.to(settings, settings.sections * 0.2, {
            progress: 0,
            width: widthTarget,
            ease: Power1.easeOut,
            delay: index * (settings.sections * 0.001),
            onUpdate: () => {
                if (index == 0 && settings.sections > 4) {
                    let choice = Math.random();
                    let length = settings.length - settings.progress;
                    let pos = branch.getPointAtLength(length);
                    let sec = Math.ceil((settings.progress / settings.length) * settings.sections) - 2;
                    if (sec < 4)
                        sec = 4;
                    let out = {
                        position: { x: pos.x, y: pos.y },
                        width: widthTarget,
                        sections: sec
                    };
                    if (choice < 0.02)
                        this.branchOut.next(out);
                    else if (choice < 0.1)
                        this.thornOut.next(out);
                    else if (choice < 0.2)
                        this.flowerOut.next(out);
                    else if (choice < 0.4)
                        this.leafOut.next(out);
                }
            },
            onComplete: () => {
                if (index = total - 1)
                    this.state = BranchState.ended;
                //branch.remove();
            }
        });
    }
    update() {
        this.branches.map((set) => {
            set.path.style.strokeDashoffset = `${set.settings.progress}`;
            set.path.style.strokeWidth = `${set.settings.width}px`;
            //set.path.style.opacity = `${set.settings.opacity}`;
        });
    }
    createLine(settings) {
        let x = settings.x;
        let y = settings.y;
        let dx = settings.directionX;
        let dy = settings.directionY;
        let path = [
            'M',
            '' + x,
            '' + y
        ];
        let steps = settings.sections;
        let step = 0;
        let getNewDirection = (direction, goAnywhere) => {
            if (!goAnywhere && settings['direction' + direction.toUpperCase()] != 0)
                return settings['direction' + direction.toUpperCase()];
            return Math.random() < 0.5 ? -1 : 1;
        };
        if (steps * 2 > step)
            path.push("Q");
        while (step < steps * 2) {
            step++;
            let stepUp = this.stepUp(step);
            x += (dx * stepUp) * this.grid;
            y += (dy * stepUp) * this.grid;
            if (step != 1)
                path.push(',');
            path.push('' + x);
            path.push('' + y);
            if (step % 2 != 0) {
                dx = dx == 0 ? getNewDirection('x', step > 8) : 0;
                dy = dy == 0 ? getNewDirection('y', step > 8) : 0;
            }
        }
        return path.join(' ');
    }
    stepUp(step) {
        let r = Math.random() * 10;
        return step / (10 + r);
    }
    clear() {
        this.branchOut.complete();
        this.thornOut.complete();
        this.leafOut.complete();
        this.flowerOut.complete();
        this.branches.map((set) => set.path.remove());
    }
    getColor(index) {
        let base = ['#0C3404'];
        let greens = ['#257502']; //, '#5DC4A8', '#4BBD9E', '#3AB795', '#A7CCBA', '#91C0A9', '#86BAA1']
        let chooseFrom = index == 0 ? base : greens;
        return chooseFrom[Math.floor(Math.random() * chooseFrom.length)];
    }
}
class Flower {
    constructor(stage, position, size, colors) {
        //outer petals
        this.petals = [];
        let petalCount = 8;
        let p = petalCount;
        let rotateAmount = 360 / petalCount;
        let growRotation = (Math.random() * 80) - 40;
        while (p > 0) {
            --p;
            let petal = document.createElementNS("http://www.w3.org/2000/svg", 'path');
            petal.setAttribute('d', this.createPetalPath({ x: 0, y: 0 }, size));
            petal.setAttribute('class', 'petal');
            petal.style.fill = colors.outer;
            petal.style.stroke = 'none';
            this.petals.push(petal);
            let rotate = (rotateAmount * p) + Math.random() * 10;
            TweenMax.set(petal, { scale: 0, x: position.x, y: position.y, rotation: rotate });
            let delay = Math.random() / 2;
            TweenMax.to(petal, 1.5, { scale: 1, delay: delay });
            TweenMax.to(petal, 3, { rotation: '+=' + growRotation, delay: delay, ease: Elastic.easeOut });
            stage.appendChild(petal);
        }
        // inner petals
        petalCount = 6;
        p = petalCount;
        rotateAmount = 360 / petalCount;
        while (p > 0) {
            --p;
            let petal = document.createElementNS("http://www.w3.org/2000/svg", 'path');
            petal.setAttribute('d', this.createPetalPath({ x: 0, y: 0 }, size / 2));
            petal.setAttribute('class', 'petal');
            petal.style.fill = colors.inner;
            petal.style.stroke = 'none';
            this.petals.push(petal);
            let rotate = (rotateAmount * p) + Math.random() * 15;
            let growRotation = (Math.random() * 80) - 40;
            TweenMax.set(petal, { scale: 0, x: position.x, y: position.y, rotation: rotate });
            TweenMax.to(petal, 6, { scale: 1, rotation: '+=' + growRotation, delay: 0.5 + Math.random(), ease: Elastic.easeOut });
            stage.appendChild(petal);
        }
    }
    createPetalPath(p, size) {
        let top = size * 4;
        let middle = size * 1.8;
        let width = size;
        let path = `M ${p.x} ${p.y} Q ${p.x - width} ${p.y + middle}  ${p.x} ${p.y + top} Q ${p.x + width} ${p.y + middle} ${p.x} ${p.y} Z`;
        return path;
    }
    clear() {
        this.petals.map((petal) => petal.remove());
    }
}
class Leaf {
    constructor(stage, position, size) {
        this.leaf = document.createElementNS("http://www.w3.org/2000/svg", 'path');
        this.leaf.setAttribute('d', this.createLeafPath({ x: 0, y: 0 }, size));
        this.leaf.setAttribute('class', 'leaf');
        this.leaf.style.fill = this.getColor();
        this.leaf.style.stroke = 'none';
        let rotate = Math.random() * 360;
        let rotateGrow = (Math.random() * 360) - 180;
        TweenMax.set(this.leaf, { scale: 0, x: position.x, y: position.y, rotation: rotate });
        TweenMax.to(this.leaf, 2, { scale: 1 });
        TweenMax.to(this.leaf, 3, { rotation: rotate + rotateGrow, ease: Elastic.easeOut });
        stage.appendChild(this.leaf);
    }
    createLeafPath(p, size) {
        let top = size * (3 + Math.random() * 2);
        let middle = size * (1 + Math.random());
        let width = size * (1.5 + Math.random() * 0.5);
        let path = `M ${p.x} ${p.y} Q ${p.x - width} ${p.y + middle}  ${p.x} ${p.y + top} Q ${p.x + width} ${p.y + middle} ${p.x} ${p.y} Z`;
        return path;
    }
    getColor() {
        let greens = ['#3CA501', '#3CA501', '#3B8D01', '#54A802'];
        return greens[Math.floor(Math.random() * greens.length)];
    }
    clear() {
        this.leaf.remove();
    }
}
class Thorn {
    constructor(stage, position, size) {
        this.thorn = document.createElementNS("http://www.w3.org/2000/svg", 'path');
        this.thorn.setAttribute('d', this.createThornPath({ x: 0, y: 0 }, size));
        this.thorn.setAttribute('class', 'thorn');
        this.thorn.style.fill = '#105302';
        this.thorn.style.stroke = 'none';
        TweenMax.set(this.thorn, { scale: 0, x: position.x, y: position.y, rotation: Math.random() * 360 });
        TweenMax.to(this.thorn, 1.5, { scale: 1 });
        stage.appendChild(this.thorn);
    }
    createThornPath(p, w) {
        let path = `M ${p.x} ${p.y} Q ${p.x - w / 2} ${p.y}  ${p.x - w / 2} ${p.y + w / 4} L ${p.x} ${p.y + w * 2} L ${p.x + w / 2} ${p.y + w / 4} Q ${p.x + w / 2} ${p.y} ${p.x} ${p.y} Z`;
        return path;
    }
    clear() {
        this.thorn.remove();
    }
}
class App {
    constructor(container) {
        this.branches = [];
        this.thorns = [];
        this.flowers = [];
        this.leaves = [];
        this.width = 600;
        this.height = 600;
        this.grid = 40;
        this.codepenPath = `M-252.5-67.7c29.2-19.2,54.5-44.4,73.9-73.5c12.4-18.6,22.6-41.7,15.1-62.8c-52,31-99.6,72.2-128.4,125.5
	s-36.6,120-11,174.9c3.8,8.1,8.9,16.4,17.3,19.2c7.8,2.6,16.3-0.3,23.9-3.7c84.6-37,141-130.1,134.8-222.2
	c-38.3,69.3-71.6,141.4-99.6,215.6c17.3-35,44.1-65.1,76.8-86.4c13.4,27.4,19.3,58.4,16.9,88.8c14.7-27.9,21.8-59.8,20.3-91.3
	C-90.8,11.8-69,7.2-47.3,2.6c-1.3,34.7-31.5,62.6-35.2,97.2C-37,82.1,1.1,46.2,21.4,1.8c-15,22.3-27.1,46.6-35.8,72
	c-0.9,2.5-1.7,5.3-0.7,7.7c2,4.9,9.1,4.5,14.2,2.9c45.7-14.2,83.7-51,99.5-96.1c-8.9,42.9-30.2,83.1-60.7,114.5
	c-5,5.2-10.7,10.3-17.8,11.5c-7.1,1.2-15.6-3.6-15.6-10.8c36.9,8.1,77.8-6,101.9-35s30.5-71.8,15.8-106.6
	c-5.9,49.5-6.5,99.7-1.9,149.4c-10.7-25.2-23.5-49.6-38.1-72.7C145.8,57.9,221,26.4,251.8-32.6c-23.9,77.5-59.5,151.3-105.3,218.2
	c-4.6,6.8-9.8,13.8-17.3,16.9c-14.2,5.9-31.3-5.9-34.5-20.9s4.5-30.6,15.8-41s25.7-16.5,39.8-22.6C209,92.6,267.1,64.5,318.5,26.2
	C271.5,1,218.2-10.1,165.4-17.3c-71-9.6-142.7-12.5-214.3-15.4`;
        this.container = container;
        this.svg = document.getElementById('stage');
        this.branchGroup = document.getElementById('branchGroup');
        this.thornGroup = document.getElementById('thornGroup');
        this.leafGroup = document.getElementById('leafGroup');
        this.flowerGroup = document.getElementById('flowerGroup');
        this.onResize();
        this.tick();
        Rx.Observable.fromEvent(this.container, 'click')
            .map((mouseEvent) => {
            mouseEvent.preventDefault();
            return {
                x: mouseEvent.clientX,
                y: mouseEvent.clientY
            };
        })
            .subscribe((position) => {
            this.clearOld();
            this.startBranch(16, position, true, this.codepenPath);
        });
        this.startBranch(16, { x: this.width / 2, y: this.height / 2 }, true, this.codepenPath);
        Rx.Observable.fromEvent(window, "resize").subscribe(() => this.onResize());
    }
    clearOld() {
        this.branches.map((branch) => {
            branch.clear();
        });
        this.thorns.map((thorn) => thorn.clear());
        this.flowers.map((flower) => flower.clear());
        this.leaves.map((leaf) => leaf.clear());
        TweenMax.killAll();
        this.branches = [];
        this.thorns = [];
        this.flowers = [];
        this.leaves = [];
    }
    startBranch(sections, position, setColors = false, setPath = null) {
        if (setColors) {
            this.flowerColors = {
                outer: this.getColor(),
                inner: this.getColor()
            };
        }
        let dx = Math.random();
        if (dx > 0.5)
            dx = dx > 0.75 ? 1 : -1;
        else
            dx = 0;
        let dy = 0;
        if (dx == 0)
            dx = Math.random() > 0.5 ? 1 : -1;
        let settings = {
            x: position.x,
            y: position.y,
            directionX: dx,
            directionY: dy,
            sections: sections
        };
        let newBranch = new Branch(this.branchGroup, settings, this.grid / 2 + Math.random() * this.grid / 2, this.branches.length > 1 ? this.branches[this.branches.length - 2] : null, setPath);
        newBranch.branchOut.debounceTime(200).subscribe((out) => this.startBranch(out.sections, out.position));
        newBranch.thornOut.debounceTime(100).subscribe((out) => this.thorns.push(new Thorn(this.thornGroup, out.position, out.width)));
        newBranch.flowerOut.debounceTime(300).subscribe((out) => this.flowers.push(new Flower(this.flowerGroup, out.position, out.width, this.flowerColors)));
        newBranch.leafOut.debounceTime(50).subscribe((out) => this.leaves.push(new Leaf(this.leafGroup, out.position, out.width)));
        this.branches.push(newBranch);
    }
    onResize() {
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.svg.setAttribute('width', String(this.width));
        this.svg.setAttribute('height', String(this.height));
        TweenMax.set(this.branchGroup, { x: this.width / 2, y: this.height / 2 });
        TweenMax.set(this.thornGroup, { x: this.width / 2, y: this.height / 2 });
        TweenMax.set(this.leafGroup, { x: this.width / 2, y: this.height / 2 });
        TweenMax.set(this.flowerGroup, { x: this.width / 2, y: this.height / 2 });
    }
    tick() {
        let step = this.branches.length - 1;
        while (step >= 0) {
            if (this.branches[step].state != BranchState.ended) {
                this.branches[step].update();
            }
            --step;
        }
        requestAnimationFrame(() => this.tick());
    }
    getColor() {
        let offset = Math.round(Math.random() * 100);
        var r = Math.sin(0.3 * offset) * 100 + 155;
        var g = Math.sin(0.3 * offset + 2) * 100 + 155;
        var b = Math.sin(0.3 * offset + 4) * 100 + 155;
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }
    componentToHex(c) {
        var hex = Math.round(c).toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
}
let container = document.getElementById('app');
let app = new App(container);
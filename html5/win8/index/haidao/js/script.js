"use strict";
/**
 * This would have been much simpler in AE, but I wanted to mix it up and see what animating paths was like
 */
var ballName = "ball";
var cloudNames = [
    "cloud0",
    "cloud1",
    "cloud2",
    "cloud3",
    "cloud4",
    "cloud5",
    "cloud6",
    "cloud7"
];
var smokeNames = ["smoke0", "smoke1", "smoke2"];
var cannonNames = ["cannon0", "cannon1", "cannon2", "cannon3", "cannon4"];
var createBallTarget = function (cannonIndex) {
    return "[data-name=\"" + cannonNames[cannonIndex] + ballName + "\"]";
};
var createSmokeTarget = function (cannonIndex, smokeIndex) {
    return "[data-name=\"" + cannonNames[cannonIndex] + smokeNames[smokeIndex] + "\"]";
};
var createCloudTarget = function (cloudIndex) {
    return "[data-name=\"" + cloudNames[cloudIndex] + "\"]";
};
var randomIntFromInterval = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
var randomDoubleFromInterval = function (min, max) {
    return (Math.random() * (max - min + 1) + min).toFixed(2);
};
// used to make transformOrigin be center in reference to the path rather than the entire SVG
var setTransformOrigin = function (target) {
    var path = document.querySelectorAll(target)[0];
    var _a = path.getBBox(), x = _a.x, y = _a.y, height = _a.height, width = _a.width;
    path.style.transformOrigin = x + width / 2 + "px " + (y + height / 2) + "px";
};
var resetCannon = function (cannonIndex) {
    anime.set(createBallTarget(cannonIndex), {
        opacity: 0,
        translateX: 0,
        translateY: 0
    });
    setTransformOrigin(createCloudTarget(2));
    smokeNames.forEach(function (st, i) {
        setTransformOrigin(createSmokeTarget(cannonIndex, i));
        anime.set(createSmokeTarget(cannonIndex, i), {
            opacity: 0,
            translateX: 0,
            translateY: 0
        });
    });
};
var fireCannon = function (cannonIndex) {
    var smokeIndex = randomIntFromInterval(0, 2);
    var smokeTarget = createSmokeTarget(cannonIndex, smokeIndex);
    var ballTarget = createBallTarget(cannonIndex);
    var _a = document
        .querySelectorAll(smokeTarget)[0]
        .getBBox(), height = _a.height, width = _a.width, x = _a.x, y = _a.y;
    var smokeTimeLine = anime.timeline({
        easing: "easeOutElastic(1, .8)"
    });
    smokeTimeLine.set({
        targets: smokeTarget,
        rotate: randomIntFromInterval(0, 180) + "deg",
        transformOrigin: x + "px " + y + "px 0"
    });
    smokeTimeLine
        .add({
        targets: smokeTarget,
        opacity: [0.0, 1],
        scale: [1, randomDoubleFromInterval(2.5, 4)],
        duration: 1000
    })
        .add({
        targets: smokeTarget,
        opacity: [1, 0],
        duration: 2000
    }, "-=700");
    var cannonBallTimeLine = anime.timeline({ easing: "linear" });
    cannonBallTimeLine
        .add({
        targets: ballTarget,
        opacity: [0.0, 1],
        duration: 20
    })
        .add({
        targets: ballTarget,
        translateX: "-" + randomIntFromInterval(31, 33) + "%",
        translateY: [
            {
                value: -1 * randomIntFromInterval(20, 30),
                easing: "easeOutCubic"
            },
            {
                value: randomIntFromInterval(62, 64),
                easing: "easeInCirc"
            }
        ],
        complete: function () {
            return anime({
                targets: createCloudTarget(2),
                scale: [1, 1.05, 1],
                duration: 250,
                easing: "spring(1, 80, 10, 20)"
            });
        }
    })
        .add({
        targets: ballTarget,
        opacity: [1, 0.0],
        duration: 20
    });
};
var resetCannons = function () {
    resetCannon(0);
    resetCannon(1);
    resetCannon(2);
    resetCannon(3);
    resetCannon(4);
};
resetCannons();
var cloudAnimation = function (i, maxDelta) {
    anime({
        targets: createCloudTarget(i),
        translateX: function () { return anime.random(-1 * maxDelta, maxDelta); },
        translateY: function () { return anime.random(-1 * maxDelta, maxDelta); },
        duration: randomIntFromInterval(3000, 5000),
        easing: "easeInOutSine",
        complete: function () { return cloudAnimation(i, maxDelta); }
    });
};
var animateSurroundingClouds = function () {
    cloudAnimation(0, 8);
    cloudAnimation(1, 8);
    cloudAnimation(2, 8);
    cloudAnimation(3, 8);
};
var animateShipClouds = function () {
    cloudAnimation(4, 8);
    cloudAnimation(5, 8);
    cloudAnimation(6, 8);
    cloudAnimation(7, 8);
};
animateSurroundingClouds();
animateShipClouds();
var staggerFire = function (i) {
    setTimeout(function () { return fireCannon(i); }, i * 200);
};
var setupReoccuringFire = function (i) {
    setTimeout(function () {
        resetCannon(i);
        fireCannon(i);
        setupReoccuringFire(i);
    }, randomIntFromInterval(3000, 5000));
};
setTimeout(function () {
    resetCannons();
    staggerFire(0);
    staggerFire(1);
    staggerFire(2);
    staggerFire(3);
    staggerFire(4);
    setupReoccuringFire(0);
    setupReoccuringFire(1);
    setupReoccuringFire(2);
    setupReoccuringFire(3);
    setupReoccuringFire(4);
}, 3000);
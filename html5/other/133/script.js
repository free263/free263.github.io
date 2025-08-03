const body = document.querySelector("body");
const tree = document.querySelector("svg");
const blower = document.querySelector(".blower");
const wind = document.querySelector(".wind-container");

const tree1 = document.querySelector("#Pant1");
const tree2 = document.querySelector("#Plant2");
const tree3 = document.querySelector("#Plant3");
const tree4 = document.querySelector("#Plant4");
const tree5 = document.querySelector("#Plant5");
const tree6 = document.querySelector("#Plant6");
const tree7 = document.querySelector("#Plant7");
const tree8 = document.querySelector("#Plant8");
const tree9 = document.querySelector("#Plant9");
const tree10 = document.querySelector("#Plant10");

body.addEventListener("mousemove", (e) => {
  blower.style.left = `${e.pageX}px`;
  blower.style.top = `${e.pageY}px`;

  let x = tree.getBoundingClientRect().left + tree.clientWidth / 2;
  let y = tree.getBoundingClientRect().top + tree.clientHeight / 2;

  let radian = Math.atan2(e.pageX - x, e.pageY - y);

  let rot = radian * (180 / Math.PI) * -1 + 0;

  blower.style.transform = `rotate(${rot + 80}deg)`;

  if (rot > 0) {
    assignAnim("windToRight");
    wind.style.transform = "scale(1)";
  } else {
    assignAnim("windToLeft");
    wind.style.transform = "scale(-1, 1)";
  }

  if (rot < -110) {
    assignAnim("windToLeftDown");
  }

  if (rot > 110) {
    assignAnim("windToRightDown");
  }
});

const assignAnim = (animName) => {
  tree1.style.animationName = animName;
  tree2.style.animationName = animName;
  tree3.style.animationName = animName;
  tree4.style.animationName = animName;
  tree5.style.animationName = animName;
  tree6.style.animationName = animName;
  tree7.style.animationName = animName;
  tree8.style.animationName = animName;
  tree9.style.animationName = animName;
  tree10.style.animationName = animName;
};
const scene = document.querySelector('.scene');
const container = document.querySelector('.container');
const player = document.querySelector('.player');
const burger = document.querySelector('.burger');
const button = document.querySelector('.button-shoot');
const playerClone = player.cloneNode(true);
const burgerClone = burger.cloneNode(true);

// reflection
playerClone.classList.add('-clone');
burgerClone.classList.add('-clone');
container.appendChild(playerClone);
container.appendChild(burgerClone);

const head = document.querySelector('.head');
const eyebrowRight = document.querySelector('.eyebrow.-right');
const eyebrowLeft = document.querySelector('.eyebrow.-left');
const mouth = document.querySelector('.mouth');
const teeth = document.querySelector('.teeth');
const handRight = document.querySelector('.hand.-right');
const handLeft = document.querySelector('.hand.-left')
const handLeftReflection = playerClone.querySelector('.hand.-left')
const forearmFistLeft = document.querySelector('.hand.-left .arm-bottom-container');
const forearmFistLeftReflection = playerClone.querySelector('.hand.-left .arm-bottom-container');
const thighRight = document.querySelector('.thigh.-right');
const thighRightReflection = playerClone.querySelector('.thigh.-right');
const footRight = document.querySelector('.foot.-right');
const footRightReflection = playerClone.querySelector('.foot.-right');
const footLeft = document.querySelector('.foot.-left');
const footLeftReflection = playerClone.querySelector('.foot.-left');
const stick = document.querySelector('.stick-container');
const stickReflection = playerClone.querySelector('.stick-container');
const clouds = document.querySelectorAll('.clouds-container > *');

const { left: stickLeft } = stick.getBoundingClientRect();
const { innerWidth: windowInnerWidth } = window;

let isAnimating = false;

const toggleButtonActivity = () => {
  button.classList.toggle('-inactive');
};

const resetBurger = () => {
  TweenLite.set(burger, {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1
  });
  TweenLite.set(burgerClone, {
    x: 0,
    y: 0,
    opacity: 0.2,
    scaleX: -1,
    scaleY: 1,
    rotation: 180,
  });
};

const handleAnimationFinish = () => {
  isAnimating = false;
  toggleButtonActivity();
};

const sendBurger = () => {
  TweenLite.to([burger, burgerClone], 0.5, { x: stickLeft + windowInnerWidth / 4.1 });
  TweenLite.to([player, playerClone], 0.25, { x: 30 });
  TweenLite.to(eyebrowLeft, 0.3, { rotation: -10 });
  TweenLite.to(eyebrowRight, 0.3, { rotation: 10 });
  TweenLite.to([footRight, footRightReflection], 0.3, { rotation: 0 });
};

const readyPostureForShot = () => {
  TweenLite.to(handRight, 0.3, { rotation: 60 }).delay(0.3);
  TweenLite.to([handLeft, handLeftReflection], 0.3, { rotation: 77 }).delay(0.3);
  TweenLite.to(head, 0.3, { rotation: -12 }).delay(0.3);
  TweenLite.to([stick, stickReflection], 0.3, { rotation: 50 }).delay(0.3);
  TweenLite.to(mouth, 0.3, { height: 0.5 }).delay(0.3);
  TweenLite.to(teeth, 0.3, { height: 0 }).delay(0.3);
  TweenLite.to(eyebrowLeft, 0.3, { rotation: 14, y: -3 }).delay(0.3);
  TweenLite.to(eyebrowRight, 0.3, { rotation: -14, y: -3 }).delay(0.3);
  TweenLite.to([footRight, footRightReflection], 0.3, { rotation: -10, x: 16 }).delay(0.3);
  TweenLite.to([thighRight, thighRightReflection], 0.3, { rotation: -90 }).delay(0.3);
  TweenLite.to([footLeft, footLeftReflection], 0.3, { rotation: 15 }).delay(0.3);
};

const goForShot = () => {
  TweenLite.to([stick, stickReflection], 0.3, { rotation: 0 }).delay(0.6);
  TweenLite.to(handRight, 0.3, { rotation: 0 }).delay(0.6);
  TweenLite.to([handLeft, handLeftReflection], 0.3, { rotation: 0 }).delay(0.6);
  TweenLite.to(teeth, 0.3, { height: '0.4rem' }).delay(0.6);
  TweenLite.to([footLeft, footLeftReflection], 0.2, { rotation: 0 }).delay(0.6);
  TweenLite.to([footRight, footRightReflection], 0.2, { rotation: 0, x: -5 }).delay(0.6);
  TweenLite.to([thighRight, thighRightReflection], 0.2, { rotation: -75 }).delay(0.6);
  TweenLite.to([player, playerClone], 0.25, { x: 50 }).delay(0.6);
  TweenLite.to(head, 0.35, { rotation: 10 }).delay(0.6);
  TweenLite.to(mouth, 0.3, { height: '1.2rem' }).delay(0.7);
  TweenLite.to([player, playerClone], 0.2, { x: -20 }).delay(0.75);
};

const fadeClouds = () => {
  TweenLite.to(clouds, 3, { opacity: 0 });
}

const shot = () => {
  TweenLite.to(clouds, 0.3, { opacity: 1, onComplete: fadeClouds }).delay(0.8);
  TweenLite.to([footRight, footRightReflection], 0.3, { rotation: -70, y: 10, x: 45 }).delay(0.8);
  TweenLite.to([thighRight, thighRightReflection], 0.3, { rotation: -130, x: -20 }).delay(0.8);
  TweenLite.to([footLeft, footLeftReflection], 0.3, { rotation: 30, y: 5, x: 10 }).delay(0.8);
  TweenLite.to([stick, stickReflection], 0.3, { rotation: 40, x: 70, y: -15 }).delay(0.8);
  TweenLite.to(handRight, 0.3, { rotation: -20, y: 5 }).delay(0.8);
  TweenLite.to([forearmFistLeft, forearmFistLeftReflection], 0.3, { rotation: 95 }).delay(0.8);
  TweenLite.to([burger, burgerClone], 0.3, {
    opacity: 0,
    scale: 11,
    y: -100,
    onComplete: resetBurger,
  }).delay(0.8);
};

const shakeScreen = () => {
  const timeline = new TimelineLite();
  timeline
    .to(scene, 0.055, { x: -30 })
    .to(scene, 0.055, { x: 10, rotation: 2 })
    .to(scene, 0.055, { x: -20, rotation: 1 })
    .to(scene, 0.055, { x: 10, rotation: -2 })
    .to(scene, 0.055, { x: -10, rotation: -1 })
    .to(scene, 0.055, { x: -20, rotation: 1 })
    .to(scene, 0.055, { x: 10, rotation: 0 })
    .to(scene, 0.055, { x: -30, rotation: -1 })
    .to(scene, 0.055, { x: 0, rotation: 0 })
    .delay(0.75);
};

const backToDefault = () => {
  TweenLite.to([player, playerClone], 0.6, { x: 0 }).delay(1.1);
  TweenLite.to(handRight, 0.6, { rotation: 0, y: 0, x: 0 }).delay(1.1);
  TweenLite.to([stick, stickReflection], 0.6, { rotation: 0, x: 0, y: 0 }).delay(1.1);
  TweenLite.to([forearmFistLeft, forearmFistLeftReflection], 0.6, { rotation: 0, x: 0, y: 0 }).delay(1.1);
  TweenLite.to(head, 0.6, { rotation: 0 }).delay(1.1);
  TweenLite.to(eyebrowLeft, 0.6, { rotation: 0, y: 0 }).delay(1.1);
  TweenLite.to(eyebrowRight, 0.6, { rotation: -0, y: 0 }).delay(1.1);
  TweenLite.to([footLeft, footLeftReflection], 0.6, { rotation: 0, y: 0, x: 0 }).delay(1.1);
  TweenLite.to([footRight, footRightReflection], 0.6, { rotation: -10, y: 0, x: 0 }).delay(1.1);
  TweenLite.to([thighRight, thighRightReflection], 0.6, {
    rotation: -80,
    x: 0,
    onComplete: handleAnimationFinish
  }).delay(1.1);
}


const handleClick = () => {
  if (isAnimating) return;
  isAnimating = true;
  toggleButtonActivity();
  sendBurger();
  readyPostureForShot();
  goForShot();
  shot();
  shakeScreen();
  backToDefault();
};

button.addEventListener('click', handleClick);
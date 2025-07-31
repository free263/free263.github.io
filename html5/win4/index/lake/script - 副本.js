// setup
let store = {
  /**
   * 	p - height percentage, 	a - amplitude
   *     CHANGE THESE VALUES to have fun!
   *     you can change the img src also ;-)
   */
  from: { p: 38, a: 4 },
  to: { p: 100, a: 1 },
  wavelength: Math.PI * 32 };


let phase = 0;

const wi = Math.max(
document.documentElement["clientWidth"],
document.body["scrollWidth"],
document.documentElement["scrollWidth"],
document.body["offsetWidth"],
document.documentElement["offsetWidth"]),

hi = Math.max(
document.documentElement["clientHeight"],
document.body["scrollHeight"],
document.documentElement["scrollHeight"],
document.body["offsetHeight"],
document.documentElement["offsetHeight"]);


// create canvas
const canvas = document.createElement("canvas");
canvas.width = wi;
canvas.height = hi;
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;

const buffer = document.createElement("canvas");
buffer.width = wi;
buffer.height = 1;

// load image
const img = new Image();
img.crossOrigin = "anonymous";
img.onload = () => {
  store.scale = Math.max(canvas.width / img.width, canvas.height / img.height);
  store.x = canvas.width / 2 - img.width / 2 * store.scale;
  store.y = canvas.height / 2 - img.height / 2 * store.scale;

  // store row values in store
  store.from.row = Math.round(store.from.p * 0.01 * canvas.height);
  store.to.row = Math.round(store.to.p * 0.01 * canvas.height);
  store.offset = store.wavelength / (store.to.row - store.from.row);

  tick();
};
img.src = "https://assets.codepen.io/439000/lake-reflection.jpg";

// animation
const tick = () => {
  window.requestAnimationFrame(tick.bind(this));

  // draw image
  ctx.drawImage(
  img,
  store.x,
  store.y,
  img.width * store.scale,
  img.height * store.scale);


  // amplitude animation
  for (let rowData, row = store.from.row; row <= store.to.row; row++) {
    rowData = ctx.getImageData(0, row, canvas.width, 1);
    ctx.putImageData(
    rowData,
    Math.sin(phase + row * store.offset) *
    map(row, store.from.row, store.to.row, store.from.a, store.to.a),
    row);

  }

  phase += 0.1;
};

const normalize = (value, minimum, maximum) => {
  return (value - minimum) / (maximum - minimum);
};

const interpolate = (normValue, minimum, maximum) => {
  return minimum + (maximum - minimum) * normValue;
};

const map = (value, min1, max1, min2, max2) => {
  return interpolate(normalize(value, min1, max1), min2, max2);
};
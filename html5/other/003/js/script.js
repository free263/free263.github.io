var animation = anime.timeline({
  easing: "easeOutExpo",
  delay:"200:"
});

animation.add({
  targets: ".mountain",
  bottom: 0,
  duration: "3000"
});
animation.add({
  targets: ".trees",
  bottom: 0,
  duration: "3000",
});

animation.add({
  targets: ".river",
  bottom: 0,
  duration: "2500"
});
animation.add({
  targets: ".sun",
  bottom: 0,
  duration: "1500"
});
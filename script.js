gsap.registerPlugin(MotionPathPlugin);

gsap.to(".ball", {
  duration: 5,
  motionPath: {
    path: "#motionPath",
    align: "#motionPath",
    alignOrigin: [0.5, 0.5],
  },
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});

var tl = gsap.timeline();
tl.to(".offline", {
    duration: 1,
    width: ".5rem",
    height: "100px",
    ease: "power4.inOut"
})
tl.to(".offline", {
    duration: 1,
    width: "100%",
    height: "100px",
    ease: "expo.inOut"
})
tl.from(".word", {
    duration: 1,
    y: "100%",
    ease: "power4.inOut"
})
tl.from(".kosong-satu", {
    duration: 1,
    height: 0,
    ease: "expo.inOut"
})
gsap.from(".animate-right", {
    duration: 1,
    delay: 1,
    x: 30,
    opacity: 0,
    stagger: .1,
    ease: "expo.out"
})
gsap.from(".rei-ichi", {
    duration: 1,
    delay: 3.5,
    opacity: 0,
    y:30,
    ease: "expo.inOut"
})

var mbtl = gsap.timeline();
mbtl.to(".offline-mb", {
    duration: 1,
    width: ".5rem",
    height: "100px",
    ease: "power4.inOut"
})
mbtl.to(".offline-mb", {
    duration: 1,
    width: "90%",
    height: "100px",
    ease: "power4.inOut"
})
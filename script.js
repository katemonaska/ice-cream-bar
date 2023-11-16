gsap.to(".logo",{scale:-1,rotation:180,duration:1})

gsap.from("h2",{duration:2,scaleX: 2,scaleY: 2,opacity:0, delay:1})

gsap.from("#topImg", {x:200, duration:2, rotation:-5, delay:1, ease: "power2.out"})
gsap.from("#middleImg", {x:50, duration:1.5, rotation:-10, delay:1,ease: "power2.out"})
gsap.from("#bottomImg", {x:250,y:-70, duration:2, rotation:5, delay:1,ease: "power2.out"})

gsap.to("#topImg", {duration:1.5, rotation:5, delay:1.5, ease: "power2.out"})
gsap.to("#middleImg", {duration:1.5, rotation:10, delay:1.5,ease: "power2.out"})
gsap.to("#bottomImg", {duration:1.5, rotation:-5, y:-20, delay:1.5,ease: "power2.out"})

gsap.from(".par",{x:-70, delay:0.5,opacity:0})

gsap.from(".cta",{opacity:0, duration:2, delay:3})

function animateIcons() {
    gsap.to(".fa-facebook", {x: 50,duration: 2.5, ease: "power3.out",
        onComplete: function () {
        gsap.to(".fa-facebook", { x: -50, duration: 2.5, ease: "power3.out"});
        },
    repeat: -1, 
    yoyoEase:"power2.out",
    repeatDelay:1.5,
    });
    gsap.to(".fa-instagram", {x: -50,duration: 2.5, ease: "power3.out",
        onComplete: function () {
        gsap.to(".fa-instagram", {x: 50, duration: 2.5, ease: "power3.out"});
        },
    repeat: -1, 
    yoyoEase:"power2.out",

    repeatDelay:1.5,
    });
}
    animateIcons();

gsap.from(".img-Menu",{duration:2,scaleX: 1.5,scaleY: 1.5,opacity:0, delay:0.5})

gsap.to("label",{x:60, stagger:0.5, delay:1.5})
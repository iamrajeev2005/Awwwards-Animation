const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.main',
        pin: true, 
        start: '50% 50%', 
        end: '400% 50%',
        scrub: true, 
        // markers:true
    }
});

tl.to("#Logo",{
    opacity:1,
    filter: "blur(0px)"
})
tl.to("#Javascript",{
    opacity:1,
    filter: "blur(0px)",
    delay:-.2 
})
tl.to("#HTML",{
    opacity:1,
    filter: "blur(0px)",
    delay:-.2 
})
tl.to("#Gsap",{
    opacity:1,
    filter: "blur(0px)",
    delay:-.2 
})
tl.to("#Wordpress",{
    opacity:1,
    filter: "blur(0px)",
    delay:-.2 
})
tl.to("#React",{
    opacity:1,
    filter: "blur(0px)",
    delay:-.2 
})
tl.to("#Firefly",{
    opacity:1,
    filter: "blur(0px)",
    delay:-.2 
})
tl.to("#CSS",{
    opacity:1,
    filter: "blur(0px)",
    delay:-.2 
})
tl.to("#Branding",{
    opacity:1,
    filter: "blur(0px)",
    delay:-.2 
})
tl.to("#Next",{
    opacity:1,
    filter: "blur(0px)",
    delay:-.2 
})
tl.to("#Adobe",{
    opacity:1,
    filter: "blur(0px)",
    delay:-.2 
})
tl.to("#Marketing",{
    opacity:1,
    filter: "blur(0px)",
    delay:-.2 
})


var t= gsap.timeline();

t
  .from("#nav",{
    y:16,
    scale: 1.2,
    duration:0.3
  })
  .from("#hero",{
    opacity:0,
    scale:1.3,
    duration :0.4
  })
  .from("#skill h4",{
    opacity:0,
    duration:0.5,
    x:-60,
    scale:1.3
  })
  .from("#skill img",{
    opacity:0,
    duration:0.5,
    x:60,
    scale:1.3
  })
  

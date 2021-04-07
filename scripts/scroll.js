/* portfolio scroll */
var tlFirstScroll = new TimelineMax();
tlFirstScroll
.to('.scroll-anim-wrap', 15, {transform: "rotateX(0) rotateZ(0) translate3d(0, 0, 0) scale(1)", ease:"power4.easeOut", delay:3})
.from('.img-pofol2', 8, {x: "101%", delay:5})
.from('.img-pofol1', 10, {x: "101%", delay:20}) 

var elemScroll = new TimelineMax();
elemScroll
.to('.bg-wrap', )

var controller = new ScrollMagic.Controller();

var scene1 = new ScrollMagic.Scene({
  triggerElement: '.pofol-sec',
  triggerHook: 0,
  duration: '200%'  
})

.setTween(tlFirstScroll)
.setPin('.pofol-sec')
.addIndicators()
.addTo(controller);




/* portfolio scroll */
var tlHeroScroll = new TimelineMax();
tlHeroScroll
.set('.hero-sec', {position: "fixed", top: "0"})
.set('.hero-sec-fake', {display: "block"}, 0);

var tlPofolScroll = new TimelineMax();
tlPofolScroll
.to('.scroll-anim-wrap', 15, {transform: "rotateX(0) rotateZ(0) translate3d(0, 0, 0) scale(1)", ease:"power4.easeOut", delay:3})
.from('.img-pofol2', 8, {x: "101%", delay:5})
.from('.img-pofol1', 10, {x: "101%", delay:20})

var controller = new ScrollMagic.Controller();

var sceneHero = new ScrollMagic.Scene({
  triggerElement: '.hero-sec',
  triggerHook: 0,
  duration: '100%'
})
.setTween(tlHeroScroll)
.addIndicators({name:"1"})
.addTo(controller);

var scenePof = new ScrollMagic.Scene({
  triggerElement: '.pofol-sec',
  triggerHook: 0,
  duration: '200%'
})
.setTween(tlPofolScroll)
.setPin('.pofol-sec')
.addIndicators({name:"3"})
.addTo(controller);

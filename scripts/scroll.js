$(document).ready(function(){
  var moSize = false;
  var controller =  null;
  var maxWidth = 1024;
  if($(window).width() < maxWidth){
    moSize = true;
  }

  function initScrollmagic(){
    $('body').scrollTop( 0 );
    controller = new ScrollMagic.Controller();
    /* Hero */
    var tlHeroScrollOut = new TimelineMax();
    tlHeroScrollOut
    .fromTo('.hero-head',1,{opacity: 1}, {opacity: 0});

    var sceneHero = new ScrollMagic.Scene({
      triggerElement: '.hero-sec',
      triggerHook: 0,
      duration: '70%'
    })
    .setTween(tlHeroScrollOut)
    .addTo(controller);

    /* Info */
    var tlInfoScrollIn = new TimelineMax();
    tlInfoScrollIn
    .fromTo('.myinfo-cont',1,{opacity:0},{opacity: 1, ease:Power4.easeOut});
    var tlInfoScrollOut = new TimelineMax();
    tlInfoScrollOut
    .to('.myinfo-cont',1,{opacity: 0});

    var sceneInfo1 = new ScrollMagic.Scene({
      triggerElement: '.myinfo-sec',
      triggerHook: 'onEnter',
      duration: '100%'
    })
    .setPin('.hero-sec',{
      pushFollowers:false
    })
    .addTo(controller);

    var sceneInfo2 = new ScrollMagic.Scene({
      triggerElement: '.myinfo-sec',
      triggerHook: '0.4',
      duration: '70%'
    })
    .setTween(tlInfoScrollIn)
    .addIndicators({name:"myinfoText"})
    .addTo(controller);

    var sceneInfo3 = new ScrollMagic.Scene({
      triggerElement: '.myinfo-sec',
      triggerHook: 0,
      duration: '70%'
    })
    .setTween(tlInfoScrollOut)
    .addTo(controller);

    /* Portfolio - brief */
    var tlPofolScroll = new TimelineMax();
    tlPofolScroll
    .to('.scroll-anim-wrap', 15, {transform: "rotateX(0) rotateZ(0) translate3d(0, 0, 0) scale(1)", ease:"power4.easeOut", delay:3})
    .from('.img-pofol2', 8, {x: "101%", delay:5})
    .from('.img-pofol1', 10, {x: "101%", delay:20})

    var tlPofolScrollIn = new TimelineMax();
    tlPofolScrollIn
    .fromTo('.pofol-info',1,{opacity:0},{opacity: 1});
    var tlPofolScrollOut = new TimelineMax();
    tlPofolScrollOut
    .to('.pofol-info',1,{opacity: 0});

    var scenePof1 = new ScrollMagic.Scene({
      triggerElement: '.pofol-sec',
      triggerHook: 'onEnter',
      duration: '100%'
    })
    .setPin('.myinfo-sec',{
      pushFollowers:false
    })
    .addTo(controller);

    var scenePof2 = new ScrollMagic.Scene({
      triggerElement: '.pofol-sec',
      triggerHook: '0.4',
      duration: '70%'
    })
    .setTween(tlPofolScrollIn)
    .addIndicators({name:"pofolText"})
    .addTo(controller);

    var scenePof3 = new ScrollMagic.Scene({
      triggerElement: '.pofol-sec',
      triggerHook: 0,
      duration: '2000'
    })
    .setTween(tlPofolScroll)
    .setPin('.pofol-sec')
    .addTo(controller);
  }

  if(!moSize){
    initScrollmagic();
  }

  $(window).resize( function() {
		var wWidth = $(window).width();
		if( wWidth < maxWidth ) {
			if( controller !== null && controller !== undefined ) {
				// completely destroy the controller
				controller = controller.destroy( true );
				// if needed, use jQuery to manually remove styles added to DOM elements by GSAP etc. here
        $("[style]").removeAttr("style");
			}
		} else if( wWidth >= maxWidth ) {
			if( controller === null || controller === undefined ) {
				// reinitialize ScrollMagic only if it is not already initialized
				initScrollmagic();
			}
		}
	});
})

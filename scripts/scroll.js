$(document).ready(function(){
  var moSize = false;
  var controller =  null;
  var maxWidth = 1024;
  if($(window).width() < maxWidth){
    moSize = true;
  }

  function initScrollmagic(){
    $('body').scrollTop( 0 );
    var tlTitScrollIn = new TimelineMax();
    tlTitScrollIn
    .fromTo('.slide-tit01',1,{opacity:0},{opacity: 1})
    controller = new ScrollMagic.Controller();
    /* Hero */
    var tlHeroScrollOut = new TimelineMax();
    tlHeroScrollOut
    .fromTo('.hero-head',1,{opacity: 1}, {opacity: 0});

    var sceneHero = new ScrollMagic.Scene({
      triggerElement: '.hero-sec',
      triggerHook: 0,
      duration: '80%'
    })
    .setTween(tlHeroScrollOut)
    .addTo(controller);

    /*
      scrollIn - 텍스트 0 > 100
      scrollOut - 텍스트 100 > 0
                                */
    /* Info */
    var tlInfoScrollIn = new TimelineMax();
    tlInfoScrollIn
    .to('.slide-tit01',0.7,{y: -120})
    .fromTo('.myinfo-cont',1,{opacity:0},{opacity: 1, ease:Power4.easeOut});
    var tlInfoScrollOut = new TimelineMax();
    tlInfoScrollOut
    .to('.myinfo-cont',1,{opacity: 0});

    //스티키
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
      duration: '60%'
    })
    .setTween(tlInfoScrollIn)
    .addTo(controller);

    var sceneInfo3 = new ScrollMagic.Scene({
      triggerElement: '.myinfo-sec',
      triggerHook: '0',
      duration: '100%'
    })
    .setPin('.myinfo-sec')
    .addTo(controller);

    /* Portfolio - brief */
    var tlPofolScroll = new TimelineMax();
    tlPofolScroll
    .to('.scroll-anim-wrap', 15, {transform: "rotateX(0) rotateZ(0) translate3d(0, 0, 0) scale(1)", ease:"power4.easeOut", delay:3})
    .from('.img-pofol2', 8, {x: "101%", delay:5, ease:"power1.easeIn"})
    .from('.img-pofol1', 10, {x: "101%", delay:20, ease:"power1.easeIn"})
    .to('.pofol-info',15,{opacity: 0})
    .to('.slide-tit01',15,{opacity: 0}, "-=15");

    var tlPofolScrollIn = new TimelineMax();
    tlPofolScrollIn
    .to('.slide-tit01',1.2,{y: -240})
    .to('.pofol-info',1,{opacity: 1, delay:1, ease:Power4.easeOut}, "-=1");

    var tlPofolScrollOut = new TimelineMax();
    tlPofolScrollOut
    .to('.pofol-info',1,{opacity: 0});

    var scenePofDelay = new ScrollMagic.Scene({
      triggerElement: '.pofol-sec',
      triggerHook: 'onEnter',
      duration: '300'
    })
    .setTween(tlInfoScrollOut)
    .addTo(controller);

    //스티키
    var scenePof1 = new ScrollMagic.Scene({
      triggerElement: '.pofol-sec',
      triggerHook: '0.9',
      duration: '100%'
    })
    .setPin('.myinfo-sec',{
      pushFollowers:false
    })
    .addTo(controller);

    var scenePof2 = new ScrollMagic.Scene({
      triggerElement: '.pofol-sec',
      triggerHook: '0.1',
      duration: '80%'
    })
    .setTween(tlPofolScrollIn)
    .addTo(controller);
    //텍스트페이드아웃 & 이미지애니메이션
    var scenePof3 = new ScrollMagic.Scene({
      triggerElement: '.pofol-sec',
      triggerHook: 0,
      duration: '2000'
    })
    .setTween(tlPofolScroll)
    .setPin('.pofol-sec')
    .addTo(controller);

    /* Skill */
    // var sceneSkill1 = new ScrollMagic.Scene({
    //   triggerElement: '.skill-sec',
    //   triggerHook: 'onEnter',
    //   duration: '100%'
    // })
    // .setPin('.pofol-sec',{
    //   pushFollowers:false
    // })
    // .addTo(controller);

    /* List */
    var sceneList1 = new ScrollMagic.Scene({
      triggerElement: '.list-sec',
      triggerHook: 'onEnter',
      duration: '100%'
    })
    .setPin('.pofol-sec',{
      pushFollowers:false
    })
    .addTo(controller);

    var sceneList3 = new ScrollMagic.Scene({
      triggerElement: '.list-sec',
      triggerHook: 1,
      duration: '100%'
    })
    .on('start', skillAnim)
    .addTo(controller);
  }

  if(!moSize){
    initScrollmagic();
  }

function skillAnim(){
  var nodes = document.querySelectorAll('.skills-bar-cont li');
  Array.prototype.forEach.call(nodes, function(el){
    let barCont = el.querySelector('.bar-cont');
    let dataPer = parseInt(barCont.getAttribute('data-percent'));
    let elem = el.querySelector('.progress-bar');
    let width = 0;

    let id = setInterval(frame, 15);

    function frame(){
        if(width >= dataPer){
            clearInterval(id);
        }else{
            width++;
            elem.style.width = width + "%";
        }
    }
  });
}

  $(window).resize( function() {
		var wWidth = $(window).width();
		if( wWidth < maxWidth ) {
			if( controller !== null && controller !== undefined ) {
				// completely destroy the controller
				controller = controller.destroy( true );
				// if needed, use jQuery to manually remove styles added to DOM elements by GSAP etc. here
        $("section *[style]").removeAttr("style");
			}
		} else if( wWidth >= maxWidth ) {
			if( controller === null || controller === undefined ) {
				// reinitialize ScrollMagic only if it is not already initialized
				initScrollmagic();
			}
		}
	});
})

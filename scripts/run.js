"use strict";

console.clear();

function initApp() {
  let h = window.innerHeight; //* --------------------------------------- PARALLAX
  //* --------------------------------------- PARALLAX

  let $imgPlx = document.querySelectorAll('.img-plx');
  $($imgPlx).css('overflow', 'hidden');
  $($imgPlx).find('img').css('height', '120%');
  let initDistance = [];
  let bgs = [];
  $imgPlx.forEach(function (item) {
    let itemPosition = item.getBoundingClientRect().top;
    initDistance.push(itemPosition);
    bgs.push(item);
  });

  //* --------------------------------------- animascroll
  //* --------------------------------------- animascroll

  function animaFrame(scrolled) {
    //* --------------------------------------- PARALLAX
    $imgPlx.forEach(function (item, index) {
      let itemPosition = item.getBoundingClientRect().top;

      if (itemPosition < h && itemPosition > -h) {
        TweenMax.set($(bgs).eq(index).find('img'), {
          y: (scrolled - initDistance[index]) / 12
        });
      }
    });
  } //* --------------------------------------- smooth scrol
  //* --------------------------------------- smooth scroll


  function smoothScroll() {
    const math = {
      lerp: (a, b, n) => {
        return (1 - n) * a + n * b;
      },
      norm: (value, min, max) => {
        return (value - min) / (max - min);
      }
    };
    const config = {
      height: window.innerHeight,
      width: window.innerWidth
    };

    class Smooth {
      constructor() {
        this.bindMethods();
        this.data = {
          ease: 0.05,
          current: 0,
          last: 0
        };
        this.dom = {
          el: document.querySelector('[data-scroll]'),
          content: document.querySelector('[data-scroll-content]')
        };
        this.rAF = null;
        this.init();
      }

      bindMethods() {
        ['scroll', 'run', 'resize'].forEach(fn => this[fn] = this[fn].bind(this));
      }

      setStyles() {
        this.dom.el.style.position = 'fixed';
        this.dom.el.style.top = 0;
        this.dom.el.style.left = 0;
        this.dom.el.style.height = '100%';
        this.dom.el.style.width = '100%';
        this.dom.el.style.overflow = 'hidden';
      }

      setHeight() {
        document.body.style.height = `${this.dom.content.offsetHeight}px`;
      }

      resize() {
        this.setHeight();
        this.scroll();
      }

      scroll() {
        this.data.current = window.scrollY;
      }

      run() {
        this.data.last = math.lerp(this.data.last, this.data.current, this.data.ease);
        this.data.last = Math.floor(this.data.last * 100) / 100;
        const diff = this.data.current - this.data.last;
        const acc = diff / config.width;
        const velo = +acc; //console.log(velo)

        this.dom.content.style.transform = `translate3d(0, -${this.data.last.toFixed(0)}px, 0) `;
        animaFrame(this.data.last);
        this.requestAnimationFrame();
      }

      on(requestAnimationFrame = true) {
        this.setStyles();
        this.setHeight();
        this.addEvents();
        requestAnimationFrame && this.requestAnimationFrame();
      }

      off(cancelAnimationFrame = true) {
        cancelAnimationFrame && this.cancelAnimationFrame();
        this.removeEvents();
      }

      requestAnimationFrame() {
        this.rAF = requestAnimationFrame(this.run);
      }

      cancelAnimationFrame() {
        cancelAnimationFrame(this.rAF);
      }

      destroy() {
        document.body.style.height = '';
        this.data = null;
        this.removeEvents();
        this.cancelAnimationFrame();
      }

      resize() {
        this.setHeight(); //updatePosition()
      }

      addEvents() {
        window.addEventListener('resize', this.resize, {
          passive: true
        });
        window.addEventListener('scroll', this.scroll, {
          passive: true
        });
      }

      removeEvents() {
        window.removeEventListener('resize', this.resize, {
          passive: true
        });
        window.removeEventListener('scroll', this.scroll, {
          passive: true
        });
      }

      init() {
        this.on();
      }

    }

    const smooth = new Smooth();
  }

  smoothScroll();
  TweenMax.set('body', {
    overflow: 'auto'
  });
} //* --------------------------------------- PRELOADER
//* --------------------------------------- smooth scroll


let i = 0,
    $imgClass = $('.img-load'),
    imgLoad = imagesLoaded($imgClass); //* -------------- Preloader 

$imgClass.imagesLoaded().always(function (instance) {
  initApp();
}).progress(function (instance, image) {});

/* Layer parallax */
window.addEventListener('scroll', function(event){
  var depth, i, layer, len, movement, topDistance, translate3d;
  topDistance = this.pageYOffset;
  layer = document.getElementById('layerBalloon');
  depth = 0.2;
  movement = -(topDistance * depth);
  translate3d = 'translate3d(0, ' + movement + 'px, 0)';
  layer.style.transform = translate3d;
})






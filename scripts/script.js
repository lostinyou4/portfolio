/* Text Animation */
split = function(element){
  words = $(element).text().split('');
  for (i in words){
      words[i] = '<span>' + words[i] + '</span>';
  }
  text = words.join('');
  $(element).html(text);
};

textify = function(element, method, delay){
  split(element);
  $(element + ' span').css('opacity', '0')
  $(element + ' span').css('position', 'relative');
  in_speed = 30;
  count = 0;
  setTimeout(function(){
      count = 0;
      $(element + ' span').each(function (){
          if(method=='bounce'){
              $(this).delay(0 + in_speed * count).animate({opacity:'1', 'top': '-4px'}, 220, 'easeOutCubic');
          }
          count++;
      })
  },delay);
};
textify('.hero-txt1', 'bounce', 500);
textify('.hero-txt2', 'bounce', 1200);
textify('.hero-txt3', 'bounce', 1900);

/* Image Animation */
var balloon = new TimelineMax({ repeat: -1, yoyo: true});
balloon.to('#layerBalloon', 4, {y:-30, ease:Power1.easeInOut});

/* portfolio section */
var tabElements =  document.getElementsByClassName('pofol-pop');
var closeElements = document.getElementsByClassName('btn-close');
for(var i = 0; i< tabElements.length; i++){
    tabElements[i].addEventListener('click', function(){
        var tabNum = '#' + this.getAttribute('data-pop');
        document.querySelector(tabNum).style.display = 'block';
        document.body.classList.add('lock');
     });
     closeElements[i].addEventListener('click', function(){
        this.parentElement.parentElement.parentElement.style.display = 'none';
        document.body.classList.remove('lock');
    });
}

$(document).ready(function() {
  $("html, .pop-detail").niceScroll({cursorcolor:"#0D2040"});

  /* portfolio animation */
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop() - $(".sa03-top").offset().top;

    if (scrollTop >= -12 ) {
      $(".sa03-bg-txt").css("top", scrollTop + 215);
      $(".sa03-bg-txt").css(
        "left",
        `${
          28 -
          (scrollTop -12 ) * 0.08
        }%`
      );
    }

    $(".sa-vertical-trigger > li").each(function (index, item) {
      if ($(window).scrollTop() >= $(this).offset().top) {
        $(".sa03-bg").removeClass("trigger0");
        $(".sa03-bg").removeClass("trigger1");
        $(".sa03-bg").removeClass("trigger2");
        $(".sa03-bg").removeClass("trigger3");
        $(".sa03-bg").addClass(`trigger${index}`);
      }
    });
  });
});

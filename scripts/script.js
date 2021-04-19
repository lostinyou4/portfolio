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

/* Image Animation */
var balloon = new TimelineMax({ repeat: -1, yoyo: true});
balloon.to('#layerBalloon', 4, {y:-30, ease:Power1.easeInOut});

/* portfolio section */
var tabElements =  document.getElementsByClassName('tab-nav');
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
});

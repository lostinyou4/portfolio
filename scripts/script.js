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
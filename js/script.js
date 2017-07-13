$(document).ready(function(){
  console.log("Hello");
  $('.skillbar').each(function(){
    $(this).find('.skillbar-bar').animate({
      width:$(this).attr('data-percent')
    }, 6000);
  });
});

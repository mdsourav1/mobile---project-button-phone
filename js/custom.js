// hide and show 
$(function(){
  // show
  $('.yes').click (function(){
    $('.box-1').show (0)
  })
  // home button 
  $('.end').click (function(){
    $('.box-1').hide (0)
  }) 
  // contact button 
  $('.back').click (function(){
    $('.box-2').show (0)
  })
  $('.end').click (function(){
    $('.box-2').hide (0)
  }) 
  // call 
  $('.call').click (function(){
    $('.box-3').show (0)
  })
  $('.end').click (function(){
    $('.box-3').hide (0)
  }) 
});

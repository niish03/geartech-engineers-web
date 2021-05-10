var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }

  prevScrollpos = currentScrollPos;
}

$(document).ready(function() {
  $('#autoWidth').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
          $('#autoWidth').removeClass('cS-hidden');
      } 
  });  
});

jQuery('#contactform').on('submit' , function(e){
  jQuery('#submit').attr("value","Please wait...");
  jQuery('#submit').prop("disabled","true");
  
  jQuery.ajax({
    
    url:'https://safe-fortress-41631.herokuapp.com/datasend.php',
    type:'post', 
    data : jQuery('#contactform').serialize(),
    success: function(result){
      jQuery('#submit').attr("value","Send message");
  } 
});

e.preventDefault();
});

const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener)
}

const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}
let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

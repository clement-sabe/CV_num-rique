(function() {

    'use strict';
  
    // cration de la variable
    var items = document.querySelectorAll(".timeline li");
  
    // utilisation de viewport
  
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
  
    // evenements
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  
  })();



  $(function () {
    $('#navbarSupportedContent').on('click', '.nav-item', function () {
        $('#navbarSupportedContent').toggleClass('show');
    })
})

(function () {
	'use strict';

	//Scroll to up

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back-top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back-top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -30);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.back-top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);

  //Animation for button

	document.querySelector('.btn').onmousemove = e => {

	  const x = e.pageX - e.target.offsetLeft;
	  const y = e.pageY - e.target.offsetTop;

	  e.target.style.setProperty('--x', `${x}px`);
	  e.target.style.setProperty('--y', `${y}px`);

	};

})();
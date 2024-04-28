
window.onscroll = onScroll;

function onScroll() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.body.classList.remove("scroll-top");
  } else {
    document.body.classList.add("scroll-top");
  }
}

function hideNav() {
  // Close the collapsed navbar by selecting the button and remove show class
  var navbarToggler = document.getElementById('nav-collapse');
  if (navbarToggler.classList.contains('show')) {
    navbarToggler.classList.remove('show');
  }
}

function sendEmail() {
  window.location.assign("mailto:abaines1@vols.utk.edu");
}
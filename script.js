
window.onscroll = onScroll;


// IntersectionObserver API
// entries is array of elements being observed
// prop isIntersecting
// filter array who only has isIntersecting set to true
// forEach = elements that have been scrolled too
// add css class scrolled once scrolled to
// Define the observer callback function

// We use the threshold option in the Intersection Observer constructor with 
// an array [0, 0.2]. This array specifies the thresholds at which the callback 
// should be triggered. The first value 0 corresponds to when the element is 
// completely out of view, and the second value 0.2 corresponds to when at least 20% 
// of the element is in view.
// In the callback function observerSlideIn, we check entry.intersectionRatio < 0.2 
// to determine when to remove the class scrolled. This means that when the element 
// is less than 20% visible in the viewport, the class will be removed.

// rootMargin: Increase the Root Margin: Increase the rootMargin value to provide 
// more buffer space around the viewport for intersection detection. 
// This can help prevent glitches caused by elements transitioning in and out 
// of the viewport too quickly.


const observerSlideIn = (sections, observer) => {
  console.log('sections ', sections)
  sections.forEach(section => {
      if (section.isIntersecting) {
          console.log('entry is intersecting & section target ', section.target)
          section.target.classList.add('scrolled');
      }
      else if(section.intersectionRatio < 0.2){
          section.target.classList.remove('scrolled')
      } 
  });
};

// Create a new IntersectionObserver instance with the callback function
const observer = new IntersectionObserver(observerSlideIn, 
  {
  threshold: [0, 0.2],
  rootMargin: '0px 0px -100px 0px'
});

// Observe all sections on the page
document.querySelectorAll('section').forEach(section => {
  console.log('section queryAll', section)
  observer.observe(section);
});





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


// ***************** Header Menu Active Start*****************

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".header .container nav ul li a");
  const currentURL = window.location.href;

  links.forEach(link => {
    const linkURL = link.href;

    if (currentURL === linkURL || (currentURL.endsWith("/") && linkURL.endsWith("/index.html"))) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const listItems = document.querySelectorAll(".header .container nav ul li");
  const currentURL = window.location.href;

  listItems.forEach(li => {

    const aTag = li.querySelector('a');
    if (!aTag) return; 

    const linkURL = aTag.href;

    if (
      currentURL === linkURL ||
      (currentURL.endsWith("/") && linkURL.endsWith("/index.html"))
    ) {
      li.classList.add("active"); 
    } else {
      li.classList.remove("active");
    }
  });
});


// ***************** Header Menu Active End *****************


document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger-icon');
  const menu = document.querySelector('.menu-item');

  hamburger.addEventListener('click', function() {
    menu.classList.toggle('active'); 
  });
});




// document.addEventListener("DOMContentLoaded", function(){
//   const slider = document.querySelector(".services-item");
  
//   // mouse wheel horizontal scroll
//   slider.addEventListener('wheel', (e) => {
//     if (window.innerWidth < 768) { // mobile mode only
//       e.preventDefault();
//       slider.scrollLeft += e.deltaY;
//     }
//   });
// });

let location1 = document.querySelector("#about");
let progress = document.querySelectorAll(".progress-bar");
let location2 = document.querySelector("#clients");
let counter = document.querySelectorAll("#clients .number");
let navBar = document.querySelector("nav");
let root = document.querySelector(":root");
let navBarCont = document.querySelector("nav .container");
let toggler = document.querySelector(".navbar-toggler-icon");

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    dots: true,
    loop: true,
    dotsEach: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= location1.offsetTop - 250) {
    progress.forEach((ele) => {
      ele.style.width = ele.dataset.goal;
    });
    navBar.classList.remove("position-absolute");
    navBar.classList.add("fixed-top");
    navBar.classList.add("box-shadow");
    navBar.style.cssText = "background-color:#fff;";
    root.style.setProperty("--white", "#000");
    root.style.setProperty("--afwhite", "#000");
    navBarCont.classList.remove("pb-5");
    navBarCont.classList.add("pb-3");
    toggler.style.cssText = `background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");`;
  } else {
    navBar.classList.add("position-absolute");
    navBar.classList.remove("fixed-top");
    navBar.style.cssText = "background-color:transparent";
    navBar.classList.remove("box-shadow");
    root.style.setProperty("--white", "#fff");
    navBarCont.classList.add("pb-3");
    navBarCont.classList.add("pb-5");
    toggler.style.cssText = `background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");`;
  }
  // ifsc{
  //   .style.setProperty("--afwhite", "#fff");

  // }
});

if (window.innerWidth > 600) {
  console.log("yes");
} else {
  console.log("no");
}

window.addEventListener("scroll", () => {
  if (window.scrollY >= location2.offsetTop - 100) {
    counter.forEach((ele) => {
      let counterint = setInterval(() => {
        if (parseInt(ele.textContent) < ele.dataset.num) {
          ele.textContent = parseInt(ele.textContent) + 1;
        } else {
          clearInterval(counterint);
        }
      }, 20);
    });
  }
});

// init Isotope
var $grid = $("#product-list").isotope({
  // options
});
// filter items on button click
$(".filter-button-group").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter");
  $grid.isotope({ filter: filterValue });
});

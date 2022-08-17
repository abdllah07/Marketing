$(function () {
  $("#menu").click(function () {
    console.log("hi");
    $("#ul-left").slideToggle("fast");
    $("#ul-right").slideToggle("fast");
    $("#ul-left").css({ display: "block" });
    $("#ul-right").css({ display: "block" });
  });
});

let our_marketing = document.querySelector(".our-marketing");

let ongoing = document.querySelector(".Ongoing");

let text_ongoing = document.getElementById("text");

let photo_ongoing = document.getElementById("photo");

let company = document.querySelector(".company");

let company_header = document.getElementById("header");

let company_box1 = document.getElementById("box1");

let company_box2 = document.getElementById("box2");

let company_box3 = document.getElementById("box3");

window.onscroll = function () {
  if (window.scrollY >= our_marketing.offsetTop - 100) {
    our_marketing.style.left = our_marketing.dataset.left;
  }

  if (window.scrollY >= ongoing.offsetTop - 100) {
    text_ongoing.style.opacity = text_ongoing.dataset.opacity;
    photo_ongoing.style.right = photo_ongoing.dataset.right;
  }

  if (window.scrollY >= company.offsetTop - 250) {
    company_header.style.opacity = company_header.dataset.opacity;
    company_box1.style.left = company_box1.dataset.left;
    company_box2.style.right = company_box2.dataset.right;
    company_box3.style.opacity = company_box3.dataset.opacity;
  }
};

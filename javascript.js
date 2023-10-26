$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 50) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 1600) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: [
      "Software Engineer",
      "Front-End Developer",
      "Lifelong Learner",
      "Content Writter",
      "Freelancer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "Software  Engineer",
      "Front-End Developer",
      "Lifelong Learner",
      "Content Writter",
      "Freelancer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

// mail receiving
// function sendEmail() {
//   getElementById.send({
//   Host: "smtp.gmail.com",
//   Username: "samrhirau@gmail.com",
//   Password: "#SaMaR0703",
//   To: "samrhirau@gmail.com",
//   From: document.getElementById("email").value,
//   Subject: "New Contact Form Enquiry",
//   Body: "And this is the body",
// }).then((message) => alert(massege));
// }
// var btn = document.getElementById("btn");
// btn.addEventListener("click", function (e) {
//   e.preventDefault();
//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var subject = document.getElementById("subject").value;
//   var massege = document.getElementById("massege").value;
//   var body =
//     "name:" +
//     name +
//     "<br/> email: " +
//     email +
//     "<br/> subject " +
//     subject +
//     "<br/> massege" +
//     massegel;

//   Email.send({
//     Host: "smtp.gmail.com",
//     Username: "samrhirau@gmail.com",
//     Password: "#SaMaR0703",
//     To: "samrhirau@gmail.com",
//     From: email,
//     Subject: subject,
//     Body: body,
//   }).then((message) => alert(massege));
// });

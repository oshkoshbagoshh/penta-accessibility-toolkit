$(document).ready(function () {
  // Smooth scrolling for navigation links
  $("nav ul li a").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500
    );
  });

  // Form validation
  $("#contactForm").submit(function (e) {
    e.preventDefault();
    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var message = $("#message").val().trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
    } else if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
    } else {
      alert("Thank you for your message!");
      // Here you can add code to actually submit the form data
    }
  });

  // Email validation function
  function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Accessibility tools
  $("#toggle-dark-mode").click(function () {
    $("body").toggleClass("dark-mode");
  });

  $("#increase-text-size").click(function () {
    $("body").css("font-size", function (index, value) {
      return parseFloat(value) * 1.2 + "px";
    });
  });

  $("#reset-text-size").click(function () {
    $("body").css("font-size", "16px"); // Reset to default text size
  });

  $("#toggle-high-contrast").click(function () {
    $("body").toggleClass("high-contrast");
  });

  $("#highlight-links").click(function () {
    $("body").toggleClass("highlight-links");
  });

  // Scroll to Top button functionality
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scrollToTop").fadeIn();
    } else {
      $("#scrollToTop").fadeOut();
    }
  });

  $("#scrollToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  });

  // Toggle Accessibility Widget
  $("#toggle-widget").click(function () {
    $(".accessibility-widget").toggleClass("show");
    if ($(".accessibility-widget").hasClass("show")) {
      $(this).text("Hide Accessibility Tools");
    } else {
      $(this).text("Accessibility Tools");
    }
  });
});

(function ($) {
  "use strict";

  $(".nav-burguer > i.bi.bi-list").click(function () {
    $(this).hide();
    $(".nav-burguer > i.bi-chevron-contract").show();
    $(".nav-menu").show();
  });

  $(".nav-burguer > i.bi-chevron-contract").click(function () {
    $(this).hide();
    $(".nav-burguer > i.bi.bi-list").show();
    $(".nav-menu").hide();
  });

  // Skills
  $(".skill").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    { offset: "80%" }
  );

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: true,
    loop: true,
  });
})(jQuery);

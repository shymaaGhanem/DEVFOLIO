  /////////////////////////////////////////////navbar scroll
  $(window).scroll(function () {


    if ($(window).scrollTop() < 80) {
      $('#navbar').addClass('fixed-top bg-transparent navbar-dark');
      $('#navbar').removeClass('navbar-light bg-white shadow-sm');

    }
    if ($(window).scrollTop() > 80) {
      $('#navbar').addClass('fixed-top navbar-light bg-white shadow-sm');
      $('#navbar').removeClass('bg-transparent navbar-dark');
    }
  });

  $('li').click(function () {
    $('li.active').removeClass("active");
    $(this).addClass("active");
  });
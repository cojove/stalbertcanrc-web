// Animate to section id if coming from another page
if (window.location.hash) {
  setTimeout(function () {
    $('html, body').animate({
      scrollTop: $(window.location.hash).offset().top - 58
    }, 600);
  }, 100);
}

// Smooth Scrolling
$("#main-nav a").on('click', function (event) {
  console.log(this.hash);
  if (this.hash != "") {
    event.preventDefault();

    const hash = this.hash;

    $('.navbar-collapse').collapse('hide');

    $('html, body').animate({
      scrollTop: $(hash).offset().top - 350
    }, 800);
  }
});
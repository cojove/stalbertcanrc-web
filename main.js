// Local Links Scroll To
$("#about-god-btn").on("click", () => scrollToId("about-god"));
$("#our-church-btn").on("click", () => scrollToId("our-church"));

function scrollToId(id) {
    let el = $("#" + id);
    $("html, body").animate({scrollTop: el.offset().top}, "slow");
}
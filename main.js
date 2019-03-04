// Local Links Scroll To
$("#about-god-btn").on("click", () => scrollToId("about-god"));
$("#our-church-btn").on("click", () => scrollToId("our-church"));

function scrollToId(id) {
    let el = $("#" + id);
    $("html, body").animate({scrollTop: el.offset().top}, "slow");
}

// Rest API
fetch("https://app.churchsocial.com/api/sermons?limit=5", {
  headers: {
    Authorization: "0e3caa43db49cc8729a8bfa91f177bf6",
  }
}).then((rawData) => rawData.json())
.then((jsonData) => console.log(jsonData));
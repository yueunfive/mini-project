// 화면(viewport)가 스크롤 될때마다 투명도, 크기 조절
// 오류 : 윗쪽 화면까지 가로 너비 늘어남
$(window).scroll(function () {
  var height = $(window).scrollTop();
  for (let i = 0; i < 6; i++) {
    let y1 = (-1 / 310) * height + (234 + 40 * i) / 31;
    $(".card-box").eq(i).css("opacity", y1);
    let y2 = (-1 / 3100) * height + (513 + 40 * i) / 310;
    $(".card-box").eq(i).css("transform", `scale(${y2})`);
  }
});
// 이거 for 반복문으로 줄인 것!
// var y1 = (-1 / 310) * height + 234 / 31; // 스크롤바 높이가 2030~2340이 될 때 1~0이 되는 가변적인 값
// $(".card-box").eq(0).css("opacity", y1);
// var y2 = (-1 / 310) * height + 274 / 31; // 스크롤바 높이가 2430~2740이 될 때 1~0이 되는 가변적인 값
// $(".card-box").eq(1).css("opacity", y2);
// var y3 = (-1 / 310) * height + 314 / 31; // 스크롤바 높이가 2830~3140이 될 때 1~0이 되는 가변적인 값
// $(".card-box").eq(2).css("opacity", y3);
// var y4 = (-1 / 310) * height + 354 / 31; // 스크롤바 높이가 3230~3540이 될 때 1~0이 되는 가변적인 값
// $(".card-box").eq(3).css("opacity", y4);
// var y5 = (-1 / 310) * height + 394 / 31; // 스크롤바 높이가 3630~3940이 될 때 1~0이 되는 가변적인 값
// $(".card-box").eq(4).css("opacity", y5);
// var y6 = (-1 / 310) * height + 434 / 31; // 스크롤바 높이가 4030~4340이 될 때 1~0이 되는 가변적인 값
// $(".card-box").eq(5).css("opacity", y6);
// y2는 스크롤바 높이에 따라 1~0.9이 되는 가변적인 값

// 캐러셀 기능
let presentImg = 1;
$(".slideAfter").on("click", function () {
  if (presentImg == 1) {
    $(".slide-box").css("transform", "translateX(-550px)");
    presentImg++;
  }
});
$(".slideBefore").on("click", function () {
  if (presentImg == 2) {
    $(".slide-box").css("transform", "translateX(0px)");
    presentImg--;
  }
});

// 클릭시 특정 위치로 이동(스크롤)
for (let i = 0; i < 4; i++) {
  $(".header-ul li button")
    .eq(i)
    .on("click", function () {
      window.scrollTo({ top: 640 * i, behavior: "smooth" });
    });
}

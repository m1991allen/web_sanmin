$("#booktb1").click(function () {
  $("#book-tab1").show();
  $("#book-tab2").hide();
});
$("#booktb2").click(function () {
  $("#book-tab1").hide();
  $("#book-tab2").show();
});
$("#booktb3").click(function () {
  $("#book-tab4,#book-tab5,#book-tab6,#book-tab7").hide();
  $("#book-tab3").show();
});
$("#booktb4").click(function () {
  $("#book-tab3,#book-tab5,#book-tab6,#book-tab7").hide();
  $("#book-tab4").show();
});
$("#booktb5").click(function () {
  $("#book-tab3,#book-tab4,#book-tab6,#book-tab7").hide();
  $("#book-tab5").show();
});
$("#booktb6").click(function () {
  $("#book-tab3,#book-tab4,#book-tab5,#book-tab7").hide();
  $("#book-tab6").show();
});
$("#booktb7").click(function () {
  $("#book-tab3,#book-tab4,#book-tab5,#book-tab6").hide();
  $("#book-tab7").show();
});

// 手機 漢堡選單
$("#bgButton1").click(function () {
  $("#mbMenu").toggle("slow");
  $("#coverMask").css("opacity", "1");
  $("#coverMask").css("height", "100vh");
  $("#coverMask").css("position", "fixed");
});

$("#coverMask").click(function () {
  $("#mbMenu,#clickSearchBar,.condition-mobile").hide("slow");
  $("#coverMask").css("opacity", "0");
  $("#coverMask").css("height", "0");
  $("#coverMask").css("position", "absolute");
});

$(".content").click(function () {
  $("#mbMenu").hide("slow");
  $("#clickSearchBar").hide("slow");
  $(
    "#dropdown-menu1,#dropdown-menu2,#dropdown-menu3,#dropdown-menu4,#dropdown-menu5,#dropdown-menu6,#dropdown-menu7,#dropdown-menu8,#dropdown-menu9,#dropdown-menu10,#dropdown-menu11,#dropdown-menu12,#dropdown-menu13"
  ).hide("slow");
});

// 手機 搜尋欄
$("#searchBtn").click(function () {
  $("#clickSearchBar").toggle("slow");
  $("#coverMask").css("opacity", "1");
  $("#coverMask").css("height", "100vh");
  $("#coverMask").css("position", "fixed");
  $("#coverMask").css("background-color", "rgba(0,0,0,0.5)");
});

// 書籍分類下拉選單
$("#dpMenu1").click(function () {
  $("#dropdown-menu1").slideToggle("slow");
  $(
    "#dropdown-menu2,#dropdown-menu3,#dropdown-menu4,#dropdown-menu5,#dropdown-menu6,#dropdown-menu7,#dropdown-menu8,#dropdown-menu9,#dropdown-menu10,#dropdown-menu11,#dropdown-menu12,#dropdown-menu13"
  ).hide();
});
$("#dpMenu2").click(function () {
  $("#dropdown-menu2").slideToggle("slow");
  $(
    "#dropdown-menu1,#dropdown-menu3,#dropdown-menu4,#dropdown-menu5,#dropdown-menu6,#dropdown-menu7,#dropdown-menu8,#dropdown-menu9,#dropdown-menu10,#dropdown-menu11,#dropdown-menu12,#dropdown-menu13"
  ).hide();
});
$("#dpMenu3").click(function () {
  $("#dropdown-menu3").slideToggle("slow");
  $(
    "#dropdown-menu1,#dropdown-menu2,#dropdown-menu4,#dropdown-menu5,#dropdown-menu6,#dropdown-menu7,#dropdown-menu8,#dropdown-menu9,#dropdown-menu10,#dropdown-menu11,#dropdown-menu12,#dropdown-menu13"
  ).hide();
});
$("#dpMenu4").click(function () {
  $("#dropdown-menu4").slideToggle("slow");
  $(
    "#dropdown-menu1,#dropdown-menu2,#dropdown-menu3,#dropdown-menu5,#dropdown-menu6,#dropdown-menu7,#dropdown-menu8,#dropdown-menu9,#dropdown-menu10,#dropdown-menu11,#dropdown-menu12,#dropdown-menu13"
  ).hide();
});
$("#dpMenu5").click(function () {
  $("#dropdown-menu5").slideToggle("slow");
  $(
    "#dropdown-menu1,#dropdown-menu2,#dropdown-menu3,#dropdown-menu4,#dropdown-menu6,#dropdown-menu7,#dropdown-menu8,#dropdown-menu9,#dropdown-menu10,#dropdown-menu11,#dropdown-menu12,#dropdown-menu13"
  ).hide();
});
$("#dpMenu6").click(function () {
  $("#dropdown-menu6").slideToggle("slow");
  $(
    "#dropdown-menu1,#dropdown-menu2,#dropdown-menu3,#dropdown-menu4,#dropdown-menu5,#dropdown-menu7,#dropdown-menu8,#dropdown-menu9,#dropdown-menu10,#dropdown-menu11,#dropdown-menu12,#dropdown-menu13"
  ).hide();
});
$("#dpMenu7").click(function () {
  $("#dropdown-menu7").slideToggle("slow");
  $(
    "#dropdown-menu1,#dropdown-menu2,#dropdown-menu3,#dropdown-menu4,#dropdown-menu5,#dropdown-menu6,#dropdown-menu8,#dropdown-menu9,#dropdown-menu10,#dropdown-menu11,#dropdown-menu12,#dropdown-menu13"
  ).hide();
});
$("#dpMenu8").click(function () {
  $("#dropdown-menu8").slideToggle("slow");
  $(
    "#dropdown-menu1,#dropdown-menu2,#dropdown-menu3,#dropdown-menu4,#dropdown-menu5,#dropdown-menu6,#dropdown-menu7,#dropdown-menu9,#dropdown-menu10,#dropdown-menu11,#dropdown-menu12,#dropdown-menu13"
  ).hide();
});
$("#dpMenu9").click(function () {
  $("#dropdown-menu9").slideToggle("slow");
  $(
    "#dropdown-menu1,#dropdown-menu2,#dropdown-menu3,#dropdown-menu4,#dropdown-menu5,#dropdown-menu6,#dropdown-menu7,#dropdown-menu8,#dropdown-menu10,#dropdown-menu11,#dropdown-menu12,#dropdown-menu13"
  ).hide();
});
$("#dpMenu10").click(function () {
  $("#dropdown-menu10").slideToggle("slow");
  $(
    "#dropdown-menu1,#dropdown-menu2,#dropdown-menu3,#dropdown-menu4,#dropdown-menu5,#dropdown-menu6,#dropdown-menu7,#dropdown-menu8,#dropdown-menu9,#dropdown-menu11,#dropdown-menu12,#dropdown-menu13"
  ).hide();
});
$("#dpMenu11").click(function () {
  $("#dropdown-menu11").toggle("slow");
  $(
    "#dropdown-menu1,#dropdown-menu2,#dropdown-menu3,#dropdown-menu4,#dropdown-menu5,#dropdown-menu6,#dropdown-menu7,#dropdown-menu8,#dropdown-menu9,#dropdown-menu10,#dropdown-menu12,#dropdown-menu13"
  ).hide();
});
$("#dpMenu12").click(function () {
  $("#dropdown-menu12").slideToggle("slow");
  $(
    "#dropdown-menu1,#dropdown-menu2,#dropdown-menu3,#dropdown-menu4,#dropdown-menu5,#dropdown-menu6,#dropdown-menu7,#dropdown-menu8,#dropdown-menu9,#dropdown-menu10,#dropdown-menu11,#dropdown-menu13"
  ).hide();
});
$("#dpMenu13").click(function () {
  $("#dropdown-menu13").slideToggle("slow");
  $(
    "#dropdown-menu1,#dropdown-menu2,#dropdown-menu3,#dropdown-menu4,#dropdown-menu5,#dropdown-menu6,#dropdown-menu7,#dropdown-menu8,#dropdown-menu9,#dropdown-menu10,#dropdown-menu11,#dropdown-menu12"
  ).hide();
});

// 手機 主題書展&三民代理區
$("#photoBlockBtn1").click(function () {
  $("#photoBlockRow1").slideToggle("slow");
});

$("#photoBlockBtn2").click(function () {
  $("#photoBlockRow2").slideToggle("slow");
});

// 詳細頁
$("#norList").click(function () {
  $("#normal-list").show("100");
  $("#parallel-list").hide();
  $("#side-list").hide();
});

$("#parList").click(function () {
  $("#normal-list").hide();
  $("#parallel-list").show("100");
  $("#side-list").hide();
});

$("#sidList").click(function () {
  $("#normal-list").hide();
  $("#parallel-list").hide();
  $("#side-list").show("100");
});

$(document).ready(function () {
  $(".arrivel").click();
});

// 階層選單
jQuery(document).ready(function () {
  var accordionsMenu = $(".cd-accordion-menu");

  if (accordionsMenu.length > 0) {
    accordionsMenu.each(function () {
      var accordion = $(this);
      //detect change in the input[type="checkbox"] value
      accordion.on("change", 'input[type="checkbox"]', function () {
        var checkbox = $(this);
        console.log(checkbox.prop("checked"));
        checkbox.prop("checked")
          ? checkbox
            .siblings("ul")
            .attr("style", "display:none;")
            .slideDown(300)
          : checkbox
            .siblings("ul")
            .attr("style", "display:block;")
            .slideUp(300);
      });
    });
  }
});

// go top
$("#gotop").click(function () {
  jQuery("html,body").animate(
    {
      scrollTop: 0
    },
    1000
  );
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $("#gotop").fadeIn("fast");
  } else {
    $("#gotop")
      .stop()
      .fadeOut("fast");
  }
});

//filter
$(".filter").click(function () {
  $(".condition-mobile").slideToggle("");
  $("#coverMaskfilter").css("opacity", "1");
  $("#coverMaskfilter").css("height", "100vh");
  $("#coverMaskfilter").css("position", "fixed");
});

$(".cond-mob-close ").click(function () {
  $(".condition-mobile").hide("slow");
  $("#coverMaskfilter").css("opacity", "0");
  $("#coverMaskfilter").css("height", "0");
  $("#coverMaskfilter").css("position", "absolute");
});

//view all
$(".viewAllDate").click(function () {
  $(".dispDate").slideToggle("slow");
});

$(".viewAllAuthor").click(function () {
  $(".dispAuthor").slideToggle("slow");
});

$(".viewAllPubli").click(function () {
  $(".dispPubli").slideToggle("slow");
});

//clear
$(".clear").click(function () {
  $(this)
    .parent()
    .remove();
});

// 加入收藏
$(".collect").click(function () {
  $(this).toggleClass("collect-focus");
});

$(".collectFocus").click(function () {
  $(this).toggleClass("collectFocus-focus");
});

// 購物車
$(".rec-function").click(function () {
  $(".rec-function").removeClass("rec-on");
  $(this).addClass("rec-on");
});

$(".pay-function").click(function () {
  $(".pay-function").removeClass("pay-on");
  $(this).addClass("pay-on");
});

$(".store-set").click(function () {
  $(".store-set").removeClass("store-on");
  $(this).addClass("store-on");
});


// 隱藏條件按鈕
$(".plus-show-btn").click(function () {
  $(".mobile-display").toggleClass("mobile-display-none");
  $("#showPlus").toggleClass("fa-plus fa-minus");
});

// $("#showPlus").click(function() {
//   $("#showPlus").attr("class", "fas fa-plus");
// });

$("#zoom").mouseover(function () {
  $(".book-try-view").toggleClass("zoom-try-view");
  $(".zoom-try-view").css("visibility", "visible");
});
$("#zoom").mouseleave(function () {
  $(".book-try-view").toggleClass("zoom-try-view");
  $(".zoom-try-view").css("visibility", "hidden");
});

$("#askBtn").click(function () {
  $(".cart-qa-info").slideToggle("");
  $("#coverMaskAsk").css("opacity", "1");
  $("#coverMaskAsk").css("height", "100vh");
  $("#coverMaskAsk").css("position", "fixed");
});

$("#turn-off").click(function () {
  $(".cart-qa-info").hide("slow");
  $("#coverMaskAsk").css("opacity", "0");
  $("#coverMaskAsk").css("height", "0");
  $("#coverMaskAsk").css("position", "absolute");
});

// book try view
$(document).ready(function () {
  for (let i = 0; i < 10; i++) {
    $('.detailImg' + i).click(function () {
      $('.mainImg').attr('src', $('.img' + i).attr('src'))
    });
  }
  $("#booktb1,#booktb3").click();
});

var bookNum = $('.imgg').length;
var visibleNum = 5;
var touchLeft = 0;
$('.book_right').click(function () {
  if (touchLeft < bookNum - visibleNum) {
    $('.imgg').offset(function (n, c) {
      newPos = new Object();
      newPos.left = c.left - 60;
      return newPos;
    });
    touchLeft++;
  }
});

$('.book_left').click(function () {
  if (touchLeft > 0) {
    $('.imgg').offset(function (n, c) {
      newPos = new Object();
      newPos.left = c.left + 60;
      return newPos;
    });
    touchLeft--;
  }
});

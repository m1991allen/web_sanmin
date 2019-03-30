// 燈箱
var go = function () {
    if ($(".theme_slider").length > 0) {
        $.each($(".theme_slider"), function (i, v) {
            if ($(v).find('.owl-carousel').length == 1) {
                var owl = $(v).find(".owl-carousel");
                var next = $(v).find(".next");
                var prev = $(v).find(".prev");
                owl.owlCarousel({
                    loop: true,
                    margin: 0,
                    responsiveClass: true,
                    // autoplay: true,
                    autoplayHoverPause: true,
                    autoplayTimeout: 5000,
                    responsive: {
                        0: {
                            items: 1,
                            nav: true
                        }
                    }
                })
                next.click(function () {
                    owl.trigger('next.owl.carousel');
                })
                prev.click(function () {
                    owl.trigger('prev.owl.carousel', [300]);
                })
            }
        });
    }

    if ($(".product1_slider").length > 0) {
        $.each($(".product1_slider"), function (i, v) {
            if ($(v).find('.owl-carousel').length == 1) {
                var owl = $(v).find('.owl-carousel');
                var next = $(v).find(".next");
                var prev = $(v).find(".prev");
                owl.owlCarousel({
                    loop: true,
                    margin: 0,
                    dots: true,
                    responsiveClass: true,
                    autoplay: false,
                    autoplayHoverPause: true,
                    autoplayTimeout: 5000,
                    responsive: {
                        0: {
                            items: 1,
                            nav: true
                        }
                    }
                })
                next.click(function () {
                    owl.trigger('next.owl.carousel');
                })
                prev.click(function () {
                    owl.trigger('prev.owl.carousel', [300]);
                })
            }
        });
    }

    if ($(".product2_slider").length > 0) {
        $.each($(".product2_slider"), function (i, v) {
            if ($(v).find('.owl-carousel').length == 1) {
                var owl = $(v).find('.owl-carousel');
                var next = $(v).find(".next");
                var prev = $(v).find(".prev");
                owl.owlCarousel({
                    loop: true,
                    margin: 0,
                    dots: true,
                    responsiveClass: true,
                    // autoplay: true,
                    autoplayHoverPause: true,
                    autoplayTimeout: 5000,
                    responsive: {
                        0: {
                            items: 1,
                            nav: true
                        },
                        900: {
                            items: 3,
                            nav: true
                        },
                        1025: {
                            items: 5,
                            nav: true
                        }
                    }
                })
                next.click(function () {
                    owl.trigger('next.owl.carousel');
                })
                prev.click(function () {
                    owl.trigger('prev.owl.carousel', [300]);
                })
            }
        });
    }

    if ($(".product2_slider-1").length > 0) {
        $.each($(".product2_slider-1"), function (i, v) {
            if ($(v).find('.owl-carousel').length == 1) {
                var owl = $(v).find('.owl-carousel');
                var next = $(v).find(".next");
                var prev = $(v).find(".prev");
                owl.owlCarousel({
                    loop: true,
                    margin: 0,
                    dots: true,
                    responsiveClass: true,
                    // autoplay: true,
                    autoplayHoverPause: true,
                    autoplayTimeout: 5000,
                    responsive: {
                        0: {
                            items: 1,
                            nav: true
                        },
                        900: {
                            items: 3,
                            nav: true
                        },
                        1025: {
                            items: 5,
                            nav: true
                        }
                    }
                })
                next.click(function () {
                    owl.trigger('next.owl.carousel');
                })
                prev.click(function () {
                    owl.trigger('prev.owl.carousel', [300]);
                })
            }
        });
    }

    if ($(".product3_slider").length > 0) {
        $.each($(".product3_slider"), function (i, v) {
            if ($(v).find('.owl-carousel').length == 1) {
                var owl = $(v).find('.owl-carousel');
                var next = $(v).find(".next");
                var prev = $(v).find(".prev");
                owl.owlCarousel({
                    loop: true,
                    margin: 0,
                    dots: true,
                    responsiveClass: true,
                    // autoplay: true,
                    autoplayHoverPause: true,
                    autoplayTimeout: 5000,
                    responsive: {
                        0: {
                            items: 1,
                            nav: true
                        },
                        1024: {
                            items: 3,
                            nav: true
                        }
                    }
                })
                next.click(function () {
                    owl.trigger('next.owl.carousel');
                })
                prev.click(function () {
                    owl.trigger('prev.owl.carousel', [300]);
                })
            }
        });
    }

    if ($(".product4_slider").length > 0) {
        $.each($(".product4_slider"), function (i, v) {
            if ($(v).find('.owl-carousel').length == 1) {
                var owl = $(v).find('.owl-carousel');
                var next = $(v).find(".next");
                var prev = $(v).find(".prev");
                owl.owlCarousel({
                    loop: true,
                    margin: 0,
                    dots: true,
                    responsiveClass: true,
                    // autoplay: true,
                    thumbs: true,
                    autoplayTimeout: 5000,
                    responsive: {
                        0: {
                            items: 2,
                            nav: true
                        },
                        1024: {
                            items: 5,
                            nav: true
                        }
                    }
                })
                next.click(function () {
                    owl.trigger('next.owl.carousel');
                })
                prev.click(function () {
                    owl.trigger('prev.owl.carousel', [300]);
                })
            }
        });
    }
    if ($(".product5_slider").length > 0) {
        $.each($(".product5_slider"), function (i, v) {
            if ($(v).find('.owl-carousel').length == 1) {
                var owl = $(v).find('.owl-carousel');
                var next = $(v).find(".next");
                var prev = $(v).find(".prev");
                owl.owlCarousel({
                    loop: true,
                    margin: 0,
                    dots: true,
                    responsiveClass: true,
                    // autoplay: true,
                    thumbs: true,
                    autoplayTimeout: 5000,
                    responsive: {
                        0: {
                            items: 2,
                            nav: true
                        },
                        768: {
                            items: 3,
                            nav: true
                        },
                        1024: {
                            items: 5,
                            nav: true
                        }
                    }
                })
                next.click(function () {
                    owl.trigger('next.owl.carousel');
                })
                prev.click(function () {
                    owl.trigger('prev.owl.carousel', [300]);
                })
            }
        });
    }
}


var resizeId;
$(document).ready(function () {
    go();
    $(window).resize(function () {
        clearTimeout(resizeId);
        // resizeId = setTimeout(logo, 500); //當停止螢幕拖拉才執行
    });
});


// 頁籤
var header = document.getElementById("bookTab");
var btns = header.getElementsByClassName("tab");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("tabActive");
        current[0].className = current[0].className.replace(" tabActive", "");
        this.className += " tabActive";
    });
}

var header = document.getElementById("bookTab1");
var btns = header.getElementsByClassName("tab1");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("tabActive1");
        current[0].className = current[0].className.replace(" tabActive1", "");
        this.className += " tabActive1";
    });
}
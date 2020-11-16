import $ from "jquery";

var subUnderBar = $(".sub-connect-underbar"),
  gnbArea = $(".gnb-area-wrap"),
  subTopLogo = $(".sub-top-logo"),
  textEmpWrap = $(".text-emphasis-wrap"),
  textEmp3 = $(".text-emphasis3"),
  textEmp2 = $(".text-emphasis2");

$(".underber-effect").hover(
  function () {
    $(this)
      .parent()
      .siblings(".text-emphasis-wrap")
      .children(".text-emphasis2")
      .css({ opacity: "1" })
      .animate(
        {
          top: "-2px",
          left: "49.85%",
          transform: "translateX(-50%); -webkit-transform: translateX(-50%);"
        },
        600
      );
    $(this)
      .parent()
      .siblings(".text-emphasis-wrap")
      .children(".text-emphasis3")
      .css({ opacity: "1" })
      .animate(
        {
          top: "4px",
          left: "50.2%",
          transform: "translateX(-50%); -webkit-transform: translateX(-50%);"
        },
        150,
        "linear"
      );
    $(this)
      .parent()
      .siblings(".text-emphasis-wrap")
      .children(".text-emphasis3")
      .css({ opacity: "1" })
      .animate(
        {
          top: "3px",
          left: "50.1%",
          transform: "translateX(-50%); -webkit-transform: translateX(-50%);"
        },
        150,
        "linear"
      );
    $(".hidden-box").stop().animate({ width: 0 }, 1000, "linear");
  },
  function () {
    $(this)
      .parent()
      .siblings(".text-emphasis-wrap")
      .children(".text-emphasis2")
      .animate({
        top: "0px",
        left: "50%",
        transform: "translateX(-50%); -webkit-transform: translateX(-50%);"
      });
    $(this)
      .parent()
      .siblings(".text-emphasis-wrap")
      .children(".text-emphasis3")
      .animate({
        top: "0px",
        left: "50%",
        transform: "translateX(-50%); -webkit-transform: translateX(-50%);"
      });
    $(".hidden-box").stop().animate({ width: "156px" }, 10);
  }
);

subTopLogo.hover(
  function () {
    if (subUnderBar.width() < 70) {
      gnbArea.stop().animate({ top: "-463px" });
      subUnderBar.css({ visibility: "visible", width: "70px" });
    }
  },
  function () {
    if (subUnderBar.height() == 70) {
      gnbArea.stop().animate({ top: "0px" });
      subUnderBar.css({ visibility: "visible", height: "70px" });
      subUnderBar.css({ visibility: "visible", width: "70px" });
    } else {
      gnbArea.stop().animate({ top: "-542px" });
      subUnderBar.css({ visibility: "hidden", width: "0" });
      subUnderBar.css({ visibility: "visible", height: "5px" });
    }
  }
);

subTopLogo.click(function () {
  if (subUnderBar.height() == 5) {
    $(".sub-top-logo > img").animate({ opacity: 0 }, 400);
    gnbArea.stop().animate({ top: "0px" });
    subUnderBar.css({ visibility: "visible", height: "70px" });
    setTimeout(function () {
      $(".close-icon").animate({ opacity: 1 }, 200);
    }, 500);
    $(".sub-area-wrap .text-wrap").css({ "z-index": 1111 });
  } else {
    $(".sub-top-logo > img").animate({ opacity: 1 }, 1000);
    gnbArea.stop().animate({ top: "-485px" });
    subUnderBar.css({ visibility: "hidden", width: "0", height: "7px" });
    $(".close-icon").animate({ opacity: 0 }, 500);
    $(".sub-area-wrap .text-wrap").css({ "z-index": 11111 });
  }
});

$(".underber-effect").hover(
  function () {
    $(".hol-video").stop().animate({ opacity: 1 });
  },
  function () {
    $(".hol-video").stop().animate({ opacity: 0 });
  }
);

$(".gnb-menu-list > li").hover(
  function () {
    $(".gnb-menu-list > li .menu-hover-effect").css({ color: "#333" });
    $(".gnb-menu-list > li .menu-hover-effect2").css({ color: "#333" });
    $(".gnb-menu-list > li .menu-hover-effect3").css({ color: "#333" });

    $(this).find(".menu-hover-effect2").css({ color: "#2ec7ff" });
    $(this).find(".menu-hover-effect3").css({ color: "#ff64a7" });

    $(this).find(".menu-hover-effect").css({ color: "#fff" });
    $(this).find(".menu-hover-effect2").css({ opacity: "1" }).stop().animate(
      {
        top: "-2px",
        left: "-2px",
        transform: "translateX(-50%); -webkit-transform: translateX(-50%);"
      },
      600
    );
    $(this).find(".menu-hover-effect3").css({ opacity: "1" }).stop().animate(
      {
        top: "4px",
        left: "2px",
        transform: "translateX(-50%); -webkit-transform: translateX(-50%);"
      },
      150,
      "linear"
    );
    $(this).find(".menu-hover-effect3").css({ opacity: "1" }).stop().animate(
      {
        top: "3px",
        left: "2px",
        transform: "translateX(-50%); -webkit-transform: translateX(-50%);"
      },
      150,
      "linear"
    );
  },
  function () {
    $(".gnb-menu-list > li .menu-hover-effect").css({ color: "#FFF" });
    $(this).find(".menu-hover-effect2").stop().animate({
      top: "0px",
      left: "50%",
      transform: "translateX(-50%); -webkit-transform: translateX(-50%);"
    });
    $(this).find(".menu-hover-effect3").stop().animate({
      top: "0px",
      left: "50%",
      transform: "translateX(-50%); -webkit-transform: translateX(-50%);"
    });
  }
);

$(document).on("mousemove", function (event) {
  var window_height = $(window).height();
  var window_width = $(window).width();
  var mouseXpos = event.clientX;
  var mouseYpos = event.clientY;
  var YrotateDeg = (window_width / 2 - mouseXpos) * 0.005;
  var XrotateDeg = (window_height / 2 - mouseYpos) * -0.005;
  $(".fir-video").css(
    "transform",
    "rotateX(" + XrotateDeg + "deg) rotateY(" + YrotateDeg + "deg)",
    "translateZ",
    "-500px",
    "scale",
    "0.1"
  );
  $(".hol-video").css(
    "transform",
    "rotateX(" + XrotateDeg + "deg) rotateY(" + YrotateDeg + "deg)",
    "translateZ",
    "1px",
    "scale",
    "1"
  );

  $(".text-wrap").css(
    "transform",
    "rotateX(" + XrotateDeg + "deg) rotateY(" + YrotateDeg + "deg)",
    "translateX",
    "-50%",
    "translateY",
    "-50%"
  );
});

var $subPage = $(".sub-page");
setTimeout(function () {
  $subPage.css({ "background-color": "rgba(0,0,0,0.94)" });
  setTimeout(function () {
    $subPage.css({ "background-color": "rgba(47,40,34,0.94)" });
    setTimeout(function () {
      $subPage.css({ "background-color": "rgba(0,0,0,0.94)" });
      setTimeout(function () {
        $subPage.css({ "background-color": "rgba(1,11,36, 0.94)" });
        setTimeout(function () {
          $subPage.css({ "background-color": "rgba(0,0,0,0.94)" });
          setTimeout(function () {
            $subPage.css({ "background-color": "rgba(47,40,34,0.94)" });
            setTimeout(function () {
              $subPage.css({ "background-color": "rgba(0,0,0,0.94)" });
              setTimeout(function () {
                $subPage.css({ "background-color": "rgba(0,0,0,0.94)" });
                setTimeout(function () {
                  $subPage.css({ "background-color": "rgba(1,11,36, 0.94)" });
                  setTimeout(function () {
                    $subPage.css({ "background-color": "rgba(0,0,0,0.94)" });
                  }, 80);
                }, 100);
              }, 100);
            }, 100);
          }, 100);
        }, 100);
      }, 100);
    }, 100);
  }, 100);
}, 100);

window.onload = function () {
  var elm = "section";
  $(elm).each(function (index) {
    // 개별적으로 Wheel 이벤트 적용
    $(this).on("mousewheel DOMMouseScroll", function (e) {
      e.preventDefault();
      var delta = 0;
      if (!event) event = window.event;
      if (event.wheelDelta) {
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta;
      } else if (event.detail) delta = -event.detail / 3;
      var moveTop = $(window).scrollTop();
      var elmSelecter = $(elm).eq(index);
      // 마우스휠을 위에서 아래로
      if (delta < 0) {
        if ($(elmSelecter).next() != undefined) {
          try {
            moveTop = $(elmSelecter).next().offset().top;
            console.log(elmSelecter);
          } catch (e) {}
        }
        // 마우스휠을 아래에서 위로
      } else {
        if ($(elmSelecter).prev() != undefined) {
          try {
            moveTop = $(elmSelecter).prev().offset().top;
          } catch (e) {}
        }
      }
      // 화면 이동 0.5초(500)
      $("html,body")
        .stop()
        .animate(
          {
            scrollTop: moveTop + "px"
          },
          {
            duration: 800,
            complete: function () {
              jQuery.easing.def = "easeInOutQuart";
            }
          }
        );
    });
  });
};

$(window).on("mousewheel DOMMouseScroll", function () {
  clearInterval(bgInterval);
  var bgInterval = setInterval(function () {
    var $window = $(this).scrollTop();
    if ($window < 1) {
      $subPage
        .removeClass("sub-page2 sub-page3 sub-page1")
        .addClass("sub-page1");
      $(".hidden-box").css({ "background-color": "#111111" });
    } else if ($window <= 1298) {
      $subPage
        .removeClass("sub-page2 sub-page3 sub-page1")
        .addClass("sub-page2");
      $(".hidden-box").css({ "background-color": "#010B24" });
    } else {
      $subPage
        .removeClass("sub-page2 sub-page3 sub-page1")
        .addClass("sub-page3");
      $(".hidden-box").css({ "background-color": "#2F2822" });
    }
  }, 500);
});

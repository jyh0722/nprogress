import $ from "jquery";
import { NProgress } from "@tanem/react-nprogress";

NProgress.configure({
  speed: 700,
  trickleSpeed: 800,
  showSpinner: false,
  parent: "#container"
});
NProgress.start();

setTimeout(function () {
  NProgress.inc();
  setTimeout(function () {
    NProgress.set(0.999);
    setTimeout(function () {
      NProgress.done();
      $(".icon-wrap").css({ width: 0 });
      $(".loading-area-wrap .logo-logo > img").addClass("close-img");
      $(".loading-area-wrap").addClass("close-wrap");
      $(".loading-area-wrap .logo-logo").css({ width: "80px" });
      $(".loading-area-wrap .logo-logo > img").css({ left: "6px" });
      $(".loading-area-wrap .logo-text").css({ display: "none" });

      setTimeout(function () {
        $(".loading-area-wrap").css({ display: "none" });
        $(".main-area-wrap").css({ display: "block" });
      }, 500);
    }, 3000);
  }, 2000);
}, 2000);

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
          top: "2px",
          left: "50.1%",
          transform: "translateX(-50%); -webkit-transform: translateX(-50%);"
        },
        150,
        "linear"
      );
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
  }
);

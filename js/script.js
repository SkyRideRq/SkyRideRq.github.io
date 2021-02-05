document.addEventListener("DOMContentLoaded", function (event) {
  // modal
  var modal = document.querySelectorAll(".modal");
  var btn = document.querySelectorAll(".open-modal");
  var close = document.querySelectorAll(".modal__close");

  btn.forEach(function (element) {
    element.addEventListener("click", function () {
      var selected = element.dataset.to;
      modal.forEach(function (element) {
        if (selected === element.id) {
          element.classList.add("modal--active");
        }
      });
    });
  });

  close.forEach(function (element) {
    element.addEventListener("click", function () {
      modal.forEach(function (element) {
        element.classList.remove("modal--active");
      });
    });
  });

  window.onclick = function (event) {
    modal.forEach(function (element) {
      if (event.target == element) {
        modal.forEach(function (element) {
          element.classList.remove("modal--active");
        });
      }
    });
  };
  // end modal
  // scroll: change active class on scroll https://gist.github.com/davidtheclark/5515733
  const links = document.querySelectorAll(".header__link");
  const sections = document.querySelectorAll("section");

  function isAnyPartOfElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth;

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
    const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

    return vertInView && horInView;
  }

  console.log(sections);
  document.addEventListener("scroll", function () {
    sections.forEach(function (element) {
      if (isAnyPartOfElementInViewport(element)) {
        var selected = element.id;
        links.forEach(function (element) {
          element.classList.remove("header__link--active");
          if (element.dataset.link === selected)
            element.classList.add("header__link--active");
        });
      }
    });
  });
  // // end scroll
  console.log(window.innerWidth);
  if (window.innerWidth < 1030) {
    var mySwiper = new Swiper("#slider", {
      // loop: true,
      slidesPerView: "auto",
      slidesPerGroup: 2,

      spaceBetween: 0,
      // init: false,
      // centeredSlides: true,
      breakpoints: {
        480: {
          spaceBetween: 60,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },
    });
  }
});

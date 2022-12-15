const elm = document.querySelectorAll(".output .sec");
const elmCount = elm.length;

elm.forEach((item, idx) => {
  item.addEventListener("mousewheel", function (e) {
    e.preventDefault();
    let delta = 0;
    if (e.wheelDelta) {
      delta = e.wheelDelta;
    }
    let moveTop = window.scrollY;
    let elmSelector = elm[idx];

    // 휠을 내렸을 때
    if (delta < 0) {
      if (elmSelector !== elmCount - 1) {
        try {
          moveTop =
            window.pageYOffset +
            elmSelector.nextElementSibling.getBoundingClientRect().top;
        } catch (e) {}
      }
    } else {
      // 휠을 올렸을 때
      if (elmSelector !== 0) {
        try {
          moveTop =
            window.pageYOffset +
            elmSelector.previousElementSibling.getBoundingClientRect().top;
        } catch (e) {}
      }
    }
    window.scrollTo({ top: moveTop });
  });
});

window.addEventListener("scroll", function (e) {
  let scrollTop =
    document.documentElement.scrollTop ||
    this.window.scrollY ||
    this.window.pageYOffset;

  elm.forEach((item2, i) => {
    if (scrollTop >= item2.offsetTop - 50) {
      document.querySelectorAll(".gnb li").forEach((li) => {
        li.classList.remove("on");
      });
      document
        .querySelector(".gnb li:nth-child(" + (i + 1) + ")")
        .classList.add("on");
    }
  });
});

// sec4 탭
const $sec4Bigmain = document.querySelectorAll(".sec4_bigmain"),
  $sec4Button = document.querySelectorAll(".sec4_right>div>button");

$sec4Button.forEach(function (item, idx) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    $sec4Button.forEach(function (test) {
      test.classList.remove("on");
    });
    this.classList.add("on");

    $sec4Bigmain.forEach(function (test) {
      test.classList.remove("on");
    });
    $sec4Bigmain[idx].classList.add("on");
  });
});

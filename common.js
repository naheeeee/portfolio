const elm = document.querySelectorAll(".output>.sec");
const elmCount = elm.length;
const mediaViewContent = window.matchMedia(`(max-width: 414px)`);

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
    document.documentElement.scrollTop || window.scrollY || window.pageYOffset;

  let ht = document.querySelector(".output>.sec").clientHeight;
  let $moveBubble = document.querySelector(".moveBubble");
  let $bubble1 = document.querySelector(".bubble1");
  let $bubble2 = document.querySelector(".bubble2");
  let $bubble3 = document.querySelector(".bubble3_first");
  let $bubble3sub = document.querySelector(".bubble3_second");

  if (scrollTop >= 0 && scrollTop < ht * 1) {
    $bubble1.style.cssText = `  top: 9vw;
    left: 40vw; transition: 0.5s;`;
    $bubble2.style.cssText = `top: 23.5vw;
    left: 49vw; transition: 0.5s;`;
    $bubble3.style.cssText = ` top: 8vw;
    left: 68vw; transition: 0.5s;`;
    $bubble3sub.style.cssText = ` opacity: 0`;
  }
  if (scrollTop >= ht * 1 && scrollTop < ht * 2) {
    $bubble1.style.cssText = `  width: 10vh;
    height: 10vh; top:65vh; left:25vw; transition: 0.5s;opacity:1 `;
    $bubble2.style.cssText = `  width: 10vh;
    height: 10vh; top:65vh; left:25vw; transition: 0.5s; opacity:0 `;
    $bubble3.style.cssText = `  width: 10vh;
    height: 10vh; top:65vh; left:25vw; transition: 0.5s; opacity:0 `;
    $bubble3sub.style.cssText = ` opacity: 0`;
  }
  if (scrollTop >= ht * 2 && scrollTop < ht * 3) {
    $bubble1.style.cssText = `  width: 17vh;
    height: 17vh; top:10vh; left:5.5vw; transition: 0.5s; opacity:0 `;
    $bubble2.style.cssText = `  width: 17vh;
    height: 17vh; top:10vh; left:5.5vw; transition: 0.5s; opacity:1 `;
    $bubble3.style.cssText = `  width: 17vh;
    height: 17vh; top:10vh; left:5.5vw; transition: 0.5s; opacity:0 `;
    $bubble3sub.style.cssText = ` opacity: 0`;
  }
  if (scrollTop >= ht * 3 && scrollTop < ht * 4) {
    $bubble1.style.cssText = `  width: 20vw;
    height: 20vw; top:10vh; left:5.5vw; transition: 0.5s; opacity:0 `;
    $bubble2.style.cssText = `  width: 8vw;
    height: 8vw; top:10vh; left:5.5vw; transition: 0.5s; opacity:0 `;
    $bubble3.style.cssText = `  width: 50vh;
    height: 50vh; top:25vh; left:50vw; transition: 0.5s; opacity:1 `;
    $bubble3sub.style.cssText = ` top:0vh; left:0vw; transition: 0.5s; opacity:0.6`;
  }

  // if (matchMedia("screen and (min-width:414px)").matches) {
  //   if (scrollTop >= 0 && scrollTop < ht * 1) {
  //     // $moveBubble.style.cssText = `top:calc(50vh - 5vw); left:calc(50vw - 5vw); transition: 0.5s;`;
  //     $bubble1.style.cssText = `  width: 30vw;
  //     height: 30vw; top: 14vh;
  //         left: 10vw; transition: 0.5s;`;
  //     $bubble2.style.cssText = `width: 35vw;
  //     height: 35vw; top: 37vh;
  //         left: 27vw; transition: 0.5s;`;
  //     $bubble3.style.cssText = ` width: 40vw;
  //     height: 40vw;top: 18vh;
  //         left: 50vw; transition: 0.5s;`;
  //     $bubble3sub.style.cssText = ` opacity: 0`;
  //   }
  //   if (scrollTop >= ht * 1 && scrollTop < ht * 2) {
  //     // $moveBubble.style.cssText = `top:calc(50vh - 5vw); left:calc(50vw - 5vw); transition: 0.5s;`;
  //     $bubble1.style.cssText = `  width: 10vh;
  //         height: 10vh; top:25vh; left:65vw; transition: 0.5s; opacity:1 `;
  //     // $bubble1Img.style.cssText = `animation: rad-move 10s linear infinite `;
  //     $bubble2.style.cssText = `   width: 10vh;
  //     height: 10vh; top:25vh; left:65vw; transition: 0.5s; opacity:0 `;
  //     $bubble3.style.cssText = `   width: 10vh;
  //     height: 10vh; top:25vh; left:65vw; transition: 0.5s; opacity:0 `;
  //     $bubble3sub.style.cssText = ` opacity: 0`;
  //   }
  //   if (scrollTop >= ht * 2 && scrollTop < ht * 3) {
  //     // $moveBubble.style.cssText = `top:calc(50vh - 5vw); left:calc(50vw - 5vw); transition: 0.5s;`;
  //     $bubble1.style.cssText = ` width: 10vh;
  //     height: 10vh; top:7vh; left:45vw; transition: 0.5s; opacity:0 `;
  //     $bubble2.style.cssText = `  width: 10vh;
  //         height: 10vh; top:7vh; left:45vw; transition: 0.5s; opacity:1 `;
  //     $bubble3.style.cssText = `  width: 10vh;
  //     height: 10vh; top:7vh; left:45vw; transition: 0.5s; opacity:0 `;
  //     $bubble3sub.style.cssText = ` opacity: 0`;
  //   }
  //   if (scrollTop >= ht * 3 && scrollTop < ht * 4) {
  //     // $moveBubble.style.cssText = `top:calc(50vh - 5vw); left:calc(50vw - 5vw); transition: 0.5s;`;
  //     $bubble1.style.cssText = `  width: 20vw;
  //         height: 20vw; top:10vh; left:5.5vw; transition: 0.5s; opacity:0 `;
  //     $bubble2.style.cssText = `  width: 8vw;
  //         height: 8vw; top:10vh; left:5.5vw; transition: 0.5s; opacity:0 `;
  //     $bubble3.style.cssText = `  width: 25vh;
  //         height: 25vh; top:18vh; left:calc(50vw - 12.5vh); transition: 0.5s; opacity:1 `;
  //     $bubble3sub.style.cssText = ` top:0vh; left:0vw; transition: 0.5s; opacity:0.6`;
  //   }
  // }

  elm.forEach((item2, i) => {
    if (scrollTop >= item2.offsetTop - 5) {
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

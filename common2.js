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

  scrollTop = scrollTop + 50;

  let ht = document.querySelector(".output>.sec").clientHeight;
  let $moveBubble = document.querySelector(".moveBubble");
  let $bubble1 = document.querySelector(".bubble1");
  let $bubble2 = document.querySelector(".bubble2");
  let $bubble3 = document.querySelector(".bubble3_first");
  let $bubble3sub = document.querySelector(".bubble3_second");
  let $bubble3sub2 = document.querySelector(".bubble3_third");

  if (scrollTop >= 0 && scrollTop < ht * 1) {
    $bubble1.style.cssText = `  top: 9vw;
    left: 40vw; transition: 0.5s;`;
    $bubble2.style.cssText = `top: 24.5vw;
    left: 49.5vw; transition: 0.5s;`;
    $bubble3.style.cssText = ` top: 8vw;
    left: 68vw; transition: 0.5s;`;
    $bubble3sub.style.cssText = ` opacity: 0`;
    $bubble3sub2.style.cssText = ` opacity: 0`;
  }
  if (scrollTop >= ht * 1 && scrollTop < ht * 2) {
    $bubble1.style.cssText = `  width: 10vh;
    height: 10vh; top:62vh; left:26vw; transition: 0.5s; opacity:1 `;
    $bubble2.style.cssText = `  width: 10vh;
    height: 10vh; top:62vh; left:26vw; transition: 0.5s; opacity:0 `;
    $bubble3.style.cssText = `  width: 10vh;
    height: 10vh; top:62vh; left:26vw; transition: 0.5s; opacity:0 `;
    $bubble3sub.style.cssText = ` opacity: 0`;
    $bubble3sub2.style.cssText = ` opacity: 0`;
  }
  if (scrollTop >= ht * 2 && scrollTop < ht * 3) {
    $bubble1.style.cssText = `  width: 17vh;
    height: 17vh; top:13vh; left:6.5vw; transition: 0.5s; opacity:0 `;
    $bubble2.style.cssText = `  width: 17vh;
    height: 17vh; top:13vh; left:6.5vw; transition: 0.5s; opacity:1 `;
    $bubble3.style.cssText = `  width: 17vh;
    height: 17vh; top:13vh; left:6.5vw; transition: 0.5s; opacity:0 `;
    $bubble3sub.style.cssText = ` opacity: 0`;
    $bubble3sub2.style.cssText = ` opacity: 0`;
  }
  if (scrollTop >= ht * 3 && scrollTop < ht * 4) {
    $bubble1.style.cssText = `  width: 20vw;
    height: 20vw; top:25vh; left:52vw transition: 0.5s; opacity:0 `;
    $bubble2.style.cssText = `  width: 8vw;
    height: 8vw; top:25vh; left:52vw transition: 0.5s; opacity:0 `;
    $bubble3.style.cssText = `  width: 50vh;
    height: 50vh; top:25vh; left:52vw; transition: 0.5s; opacity:1 `;
    $bubble3sub.style.cssText = ` width: 50vh;
    height: 50vh; top:25vh; left:52vw; transition: 0.5s; opacity:0.6`;
    $bubble3sub2.style.cssText = ` width: 50vh;
    height: 50vh; top:25vh; left:52vw; transition: 0.5s; opacity:0.6`;
  }

  if (matchMedia("screen and (max-width:1500px)").matches) {
    if (scrollTop >= ht * 1 && scrollTop < ht * 2) {
      $bubble1.style.cssText = `  width: 10vh;
          height: 10vh; top:55vh; left:23vw; transition: 0.5s; opacity:1 `;
      $bubble2.style.cssText = `   width: 10vh;
      height: 10vh; top:55vh; left:23vw; transition: 0.5s; opacity:0 `;
      $bubble3.style.cssText = `   width: 10vh;
      height: 10vh; top:55vh; left:23vw; transition: 0.5s; opacity:0 `;
      $bubble3sub.style.cssText = ` opacity: 0`;
    }
    if (scrollTop >= ht * 2 && scrollTop < ht * 3) {
      $bubble1.style.cssText = `  width: 17vh;
      height: 17vh; top:13vh; left:3vw; transition: 0.5s; opacity:0 `;
      $bubble2.style.cssText = `  width: 17vh;
      height: 17vh; top:13vh; left:3vw; transition: 0.5s; opacity:1 `;
      $bubble3.style.cssText = `  width: 17vh;
      height: 17vh; top:13vh; left:3vw; transition: 0.5s; opacity:0 `;
      $bubble3sub.style.cssText = ` opacity: 0`;
      $bubble3sub2.style.cssText = ` opacity: 0`;
    }
  }

  if (matchMedia("screen and (max-width:1150px)").matches) {
    if (scrollTop >= ht * 1 && scrollTop < ht * 2) {
      $bubble1.style.cssText = `  width: 10vh;
          height: 10vh; top:63vh; left:27vw; transition: 0.5s; opacity:1 `;
      $bubble2.style.cssText = `   width: 10vh;
      height: 10vh;top:63vh; left:27vw;  transition: 0.5s; opacity:0 `;
      $bubble3.style.cssText = `   width: 10vh;
      height: 10vh; top:63vh; left:27vw;  transition: 0.5s; opacity:0 `;
      $bubble3sub.style.cssText = ` opacity: 0`;
    }
    if (scrollTop >= ht * 3 && scrollTop < ht * 4) {
      $bubble1.style.cssText = `   width: 40vh;
      height: 40vh; top:30vh; left:50vw; transition: 0.5s; opacity:0 `;
      $bubble2.style.cssText = `   width: 40vh;
      height: 40vh; top:30vh; left:50vw; transition: 0.5s; opacity:0 `;
      $bubble3.style.cssText = `  width: 40vh;
      height: 40vh; top:30vh; left:50vw; transition: 0.5s; opacity:1 `;
      $bubble3sub.style.cssText = `width: 40vh;
      height: 40vh; top:30vh; left:50vw; transition: 0.5s; opacity:0.6`;
      $bubble3sub2.style.cssText = ` width: 40vh;
      height: 40vh; top:30vh; left:50vw; transition: 0.5s; opacity:0.6`;
    }
  }

  if (matchMedia("screen and (max-width:1000px)").matches) {
    if (scrollTop >= 0 && scrollTop < ht * 1) {
      $bubble1.style.cssText = `  width: 20vw;
      height: 20vw; top: 13vh; left: 37vw; transition: 0.5s;`;
      $bubble2.style.cssText = `width: 23vw;
      height: 23vw; top: 42vw;left: 55vw; transition: 0.5s;`;
      $bubble3.style.cssText = `width: 25vw; height: 25vw;  top: 11vw;
    left: 70vw; transition: 0.5s;`;
      $bubble3sub.style.cssText = ` opacity: 0`;
      $bubble3sub2.style.cssText = ` opacity: 0`;
    }
    if (scrollTop >= ht * 2 && scrollTop < ht * 3) {
      $bubble1.style.cssText = `  width: 17vh;
    height: 17vh; top:13vh; left:6.5vw; transition: 0.5s; opacity:0 `;
      $bubble2.style.cssText = `  width: 17vh;
    height: 17vh; top:13vh; left:6.5vw; transition: 0.5s; opacity:1 `;
      $bubble3.style.cssText = `  width: 17vh;
    height: 17vh; top:13vh; left:6.5vw; transition: 0.5s; opacity:0 `;
      $bubble3sub.style.cssText = ` opacity: 0`;
      $bubble3sub2.style.cssText = ` opacity: 0`;
    }
  }

  if (matchMedia("screen and (max-width:900px)").matches) {
    if (scrollTop >= ht * 1 && scrollTop < ht * 2) {
      $bubble1.style.cssText = `  width: 8vh;
          height: 8vh; top:33vh; left:60vw; transition: 0.5s; opacity:1 `;
      $bubble2.style.cssText = `   width: 8vh;
      height: 8vh; top:33vh; left:60vw; transition: 0.5s; opacity:0 `;
      $bubble3.style.cssText = `   width: 8vh;
      height: 8vh; top:33vh; left:60vw; transition: 0.5s; opacity:0 `;
      $bubble3sub.style.cssText = ` opacity: 0`;
      $bubble3sub2.style.cssText = ` opacity: 0`;
    }
    if (scrollTop >= ht * 2 && scrollTop < ht * 3) {
      $bubble1.style.cssText = ` width: 10vh;
      height: 10vh; top:25vh; left:7vw; transition: 0.5s; opacity:0 `;
      $bubble2.style.cssText = `  width: 10vh;
          height: 10vh; top:25vh; left:7vw; transition: 0.5s; opacity:1 `;
      $bubble3.style.cssText = `  width: 10vh;
      height: 10vh; top:25vh; left:7vw; transition: 0.5s; opacity:0 `;
      $bubble3sub.style.cssText = ` opacity: 0`;
      $bubble3sub2.style.cssText = ` opacity: 0`;
    }
    if (scrollTop >= ht * 3 && scrollTop < ht * 4) {
      $bubble1.style.cssText = `  width: 20vw;
          height: 20vw; top:10vh; left:5.5vw; transition: 0.5s; opacity:0 `;
      $bubble2.style.cssText = `  width: 8vw;
          height: 8vw; top:10vh; left:5.5vw; transition: 0.5s; opacity:0 `;
      $bubble3.style.cssText = `   width: 30vh;
      height: 30vh; top:25vh; left:calc(50vw - 15vh); transition: 0.5s; opacity:1 `;
      $bubble3sub.style.cssText = ` width: 30vh;
      height: 30vh; top:25vh; left:calc(50vw - 15vh); transition: 0.5s; opacity:0.6`;
      $bubble3sub2.style.cssText = ` width: 30vh;
      height: 30vh; top:25vh; left:calc(50vw - 15vh); transition: 0.5s; opacity:0.6`;
    }
  }

  if (matchMedia("screen and (max-width:750px)").matches) {
    if (scrollTop >= 0 && scrollTop < ht * 1) {
      $bubble1.style.cssText = `  width: 25vw;
      height: 28vw; top: 20vh; left: 20vw; transition: 0.5s;`;
      $bubble2.style.cssText = `width: 28vw;
      height: 29vw; top: 65vw; left: 62vw; transition: 0.5s;`;
      $bubble3.style.cssText = `width: 30vw; height: 30vw; 
       top: 13vh; left: 60vw; transition: 0.5s;`;
      $bubble3sub.style.cssText = ` opacity: 0`;
      $bubble3sub2.style.cssText = ` opacity: 0`;
    }
    if (scrollTop >= ht * 1 && scrollTop < ht * 2) {
      $bubble1.style.cssText = `  width: 8vh;
        height: 8vh; top:36vh; left:60vw; transition: 0.5s; opacity:1 `;
      $bubble2.style.cssText = `   width: 8vh;
    height: 8vh; top:36vh; left:60vw; transition: 0.5s; opacity:0 `;
      $bubble3.style.cssText = `   width: 8vh;
    height: 8vh; top:36vh; left:60vw; transition: 0.5s; opacity:0 `;
      $bubble3sub.style.cssText = ` opacity: 0`;
      $bubble3sub2.style.cssText = ` opacity: 0`;
    }
  }
  if (matchMedia("screen and (max-width:600px)").matches) {
    if (scrollTop >= 0 && scrollTop < ht * 1) {
      $bubble1.style.cssText = `  width: 27vw;
      height: 28vw; top: 27vh; left: 15vw; transition: 0.5s;`;
      $bubble2.style.cssText = `width: 29vw;
      height: 30vw; top: 68vw; left: 62vw; transition: 0.5s;`;
      $bubble3.style.cssText = `width: 35vw; height: 35vw; 
       top: 13vh; left: 53vw; transition: 0.5s;`;
      $bubble3sub.style.cssText = ` opacity: 0`;
      $bubble3sub2.style.cssText = ` opacity: 0`;
    }
    if (scrollTop >= ht * 1 && scrollTop < ht * 2) {
      $bubble1.style.cssText = `  width: 7vh;
        height: 7vh; top:28vh; left:64vw; transition: 0.5s; opacity:1 `;
      $bubble2.style.cssText = `   width: 7vh;
    height: 7vh; top:28vh; left:64vw; transition: 0.5s; opacity:0 `;
      $bubble3.style.cssText = `   width: 7vh;
    height: 7vh; top:28vh; left:64vw; transition: 0.5s; opacity:0 `;
      $bubble3sub.style.cssText = ` opacity: 0`;
      $bubble3sub2.style.cssText = ` opacity: 0`;
    }
  }
  if (matchMedia("screen and (max-width:450px)").matches) {
    if (scrollTop >= 0 && scrollTop < ht * 1) {
      $bubble1.style.cssText = `  width: 30vw;
      height: 30vw; top: 14vh;
          left: 10vw; transition: 0.5s;`;
      $bubble2.style.cssText = `width: 35vw;
      height: 35vw; top: 37vh;
          left: 27vw; transition: 0.5s;`;
      $bubble3.style.cssText = ` width: 40vw;
      height: 40vw;top: 18vh;
          left: 50vw; transition: 0.5s;`;
      $bubble3sub.style.cssText = ` opacity: 0`;
      $bubble3sub2.style.cssText = ` opacity: 0`;
    }
    if (scrollTop >= ht * 1 && scrollTop < ht * 2) {
      $bubble1.style.cssText = `  width: 7vh;
          height: 7vh; top:29vh; left:66vw; transition: 0.5s; opacity:1 `;
      $bubble2.style.cssText = `   width: 10vh;
      height: 10vh; top:25vh; left:65vw; transition: 0.5s; opacity:0 `;
      $bubble3.style.cssText = `   width: 10vh;
      height: 10vh; top:25vh; left:65vw; transition: 0.5s; opacity:0 `;
      $bubble3sub.style.cssText = ` opacity: 0`;
      $bubble3sub2.style.cssText = ` opacity: 0`;
    }
    if (scrollTop >= ht * 2 && scrollTop < ht * 3) {
      $bubble1.style.cssText = ` width: 10vh;
      height: 10vh; top:7vh; left:45vw; transition: 0.5s; opacity:0 `;
      $bubble2.style.cssText = `  width: 10vh;
          height: 10vh; top:7vh; left:45vw; transition: 0.5s; opacity:1 `;
      $bubble3.style.cssText = `  width: 10vh;
      height: 10vh; top:7vh; left:45vw; transition: 0.5s; opacity:0 `;
      $bubble3sub.style.cssText = ` opacity: 0`;
      $bubble3sub2.style.cssText = ` opacity: 0`;
    }
  }

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

// sub
const $sec4TextA = document.querySelectorAll(".sec4_text>button");
const $subpage = document.querySelector(".subpage");
const $subTitleBtn = document.querySelectorAll(".sub_title>button");
const $subOnoffBtn = document.querySelectorAll(".sub_onoff>button");
const $subBtnOn = document.querySelectorAll(".sub_btnon");
const $subBtnOff = document.querySelectorAll(".sub_btnoff");
const $sub = document.querySelectorAll(".subpage >.sub");
$sec4TextA.forEach(function (item, idx) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $subpage.classList.add("on");
    $sub[idx].classList.add("on");
    document.documentElement.classList.add("scrollLock");
  });
});
$subTitleBtn.forEach(function (item, idx) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    $subpage.classList.remove("on");
    $sub[idx].classList.remove("on");
    document.documentElement.classList.remove("scrollLock");
  });
});
$subOnoffBtn.forEach(function (item, idx) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    $subOnoffBtn.forEach(function (test) {
      test.classList.toggle("on");
    });
    $subBtnOn.forEach(function (test) {
      test.classList.toggle("on");
    });
    $subBtnOff.forEach(function (test) {
      test.classList.toggle("on");
    });
  });
});

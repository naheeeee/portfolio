// gnb .on 효과
const $sec = document.querySelectorAll(".sec");

$sec.forEach(function (item, idx) {
  let $gnbA = document.querySelectorAll(".gnb li");
  if (scrollTop >= item.offsetTop) {
    $gnbA.forEach(function (a) {
      a.classList.remove("on");
    });
    document
      .querySelector(`.gnb li:nth-of-type(${idx + 2})`)
      .classList.add("on");
  }
});

// sec2 스크롤 내리면서 about, work, contact 글자 사라지고
// 큰 비눗방울 한 군데로 모아서 내리기

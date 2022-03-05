const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function () {
  searchInputEl.focus()
});

searchInputEl.addEventListener('focus', function (){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur', function (){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});


const badgeEL = document.querySelector('header,badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY)
  if (window.scrollY > 500) {
    //배지 숨기기 
    //gsap.to(요소,지속시간,옵션);
  gsap.to(badgeEL, .6, {
    opacity: 0,
    display: "none"
  }); 
    //버튼 보이기!
    gsap.to('#to-top', .2, {
      x: 0
    });


  } else {
    // 배지 보이기
    gsap.to(badgeEL, .6, {
      opacity: 1,
      display: 'block' 
    });
    // 버튼 숨기기!
    gsap.to('#to-top', .2, {
      x: 100
    });
  }

}, 300));
  //_.throttle(함수, 시간)

  
  toTopEl.addEventListener('click', function() {
    gsap.to(window, .7, {
      scrollTo: 0
    } );

  });








  const fadeELs = document.querySelectorAll('.visual .fade-in');
  fadeELs.forEach(function (fadeEL, index) {
    gsap.to(fadeEL, 1, {
      delay: (index+1) *.7,  // index=0 0.7, 1.4, 2.1 ,2.7 
      opacity: 1
    });
  });

//new Swiper(선택자, 옵션)

new Swiper ('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});

new Swiper ('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기 
  loop: true,
  //autoplay: {
  //  delay: 000
  //},
  pagination: { 
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { 
    prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
    nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
  }  
});

new Swiper('.awards .swiper-container', {
  // direction: 'horizontal' 기본값 명시할 필요 x
  autoplay: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'

  }
});




const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion  //처음 값이 false로 할당되어 있기에 !는 true
  if (isHidePromotion) {            //  isHidePromotion값이 true면
    promotionEl.classList.add('hide')  //숨김처림
  } else {
    promotionEl.classList.remove('hide') //보여짐처리
  }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}





function floatingObject(selector, delay, size) {
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), //애니메이션 동작 시간
    { //옵션 
      y: size,
      repeat: -1, //무한반복
      yoyo: true, // 내려왔다가 다시 올라가는 효과
      ease: Power1.easeInOut,
      delay: random(0, delay), //지연 시간
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 15);


const spyELs = document.querySelectorAll('section.scroll-spy')
spyELs.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());

});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2022




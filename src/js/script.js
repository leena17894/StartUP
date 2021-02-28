//Слайдер цитат

var slider = tns({
    container: '.quote-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    speed: 1000,
    nav: true,
    autoplayButtonOutput: false,
    navPosition: 'bottom'
  });

  // Слайдер сотрудников

  var slider = tns({
    container: '.staff-slider',
    items: 4,
    autoplay: false,
    speed: 400,
    swipeAngle: false,
    infinite: true,
    controls: false,
    nav: false
  });

// Слайдер работ

  var slider = tns({
    container: '.works__items-slider',
    items: 4,
    autoplay: false,
    speed: 400,
    swipeAngle: false,
    infinite: true,
    controls: false,
    nav: false
  });



  document.querySelector('.staff-prev').addEventListener('click', function(){
    slider.goTo('prev');
  });

  document.querySelector('.staff-next').addEventListener('click', function(){
    slider.goTo('next');
  });

  var headBtn = document.querySelector('.head__btn'),
      closeBtn = document.querySelector('.modal__close'),
      startModal = document.querySelector('.modal'),
      overlay = document.querySelector('.overlay'),
      questionBtn = document.querySelector('.question__btn'),
      questionModal = document.querySelector('.question-modal'),
      hamburger = document.querySelector('.hamburger'),
      headerMenu = document.querySelector('.header__menu');
      
      

  headBtn.addEventListener('click', function(e){
    e.preventDefault();
    startModal.classList.add('open');
    overlay.classList.add('open');
  });

  closeBtn.addEventListener('click', function(){
    startModal.classList.remove('open');
    overlay.classList.remove('open');
  });

  questionBtn.addEventListener('click', function (){
    questionModal.classList.add('open');
    overlay.classList.add('open');
  });

  // closeBtn.addEventListener('click', function (){
  //   questionModal.classList.remove('open');
  //   overlay.classList.remove('open');
  // });

  hamburger.addEventListener('click', function(){
    headerMenu.classList.toggle('active');
  });
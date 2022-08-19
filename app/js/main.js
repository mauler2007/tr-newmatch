document.addEventListener("DOMContentLoaded", function () {

  const top = document.querySelector('.top__inner');
  const header = document.querySelector('.header');

  const headerHeight = header.scrollHeight;
  
  const mediaMinHeight = window.matchMedia('(min-height: 600px)');
  const mediaMaxHeight = window.matchMedia('(max-height: 900px)');
  // console.log('headerHeight', headerHeight);

  if (mediaMinHeight.matches && mediaMaxHeight.matches ) {
    top.style.minHeight = `calc(100vh - ${headerHeight}px)`;
  } 

  //  SWHITCH LOCALISATION  SWHITCH LOCALISATION  SWHITCH LOCALISATION

  var swhithLang = document.querySelectorAll(
    ".langCheck__item:not(.selected) input"
  );
  swhithLang.forEach(function (item) {
    item.addEventListener("change", function () {
      var val = item.name;
      location.reload();
      document.cookie = `content_lang=${val}; max-age=3600`;
    });
  });


  //  SWHITCH LOCALISATION  SWHITCH LOCALISATION  SWHITCH LOCALISATION

  // start slider  
  // $('.top__promo .promo').slick({
  //   arrows: false,
  //   dots: true,
  //   fade: true,
  //   speed: 300,
  // });
  // end slider  

  var one = document.getElementById('instructionNumberOne');
  var two = document.getElementById('instructionNumberTwo');
  var three = document.getElementById('instructionNumberThree');

  setTimeout(function () {

    one.classList.add("active");

  }, 50);

  setTimeout(function () {

    two.classList.add("active");

  }, 250);

  setTimeout(function () {

    three.classList.add("active");

  }, 450);


  const modalBtn = document.querySelectorAll('[data-modal]');
  const modal = document.querySelectorAll('.modal');


  modalBtn.forEach(item => {
    item.addEventListener('click', event => {

      let $this = event.currentTarget;
      let modalId = $this.getAttribute('data-modal');

      let modal = document.getElementById(modalId);
      let modalWrapper = modal.querySelector('.popup__wrapper');

      modalWrapper.addEventListener('click', event => {
        event.stopPropagation();
      });

      modal.classList.add('show');

      setTimeout(function () {
        modalWrapper.style.transform = 'none';
      }, 1);
    });
  });

  modal.forEach(item => {
    item.addEventListener('click', event => {
      let currentModal = event.currentTarget

      closeModal(currentModal)
    });
  });

  function closeModal(currentModal) {
    let modalWrapper = currentModal.querySelector('.popup__wrapper');

    modalWrapper.removeAttribute('style');

    setTimeout(function () {
      currentModal.classList.remove('show');
    }, 300);
  }
});
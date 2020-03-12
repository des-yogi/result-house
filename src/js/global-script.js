document.documentElement.className = document.documentElement.className.replace('no-js', 'js');
function cth(c) {document.documentElement.classList.add(c)}
'ontouchstart' in window?cth('touch'):cth('no-touch');
if(typeof InstallTrigger!=='undefined')cth('firefox');
if(/constructor/i.test(window.HTMLElement)||(function(p){return p.toString()==="[object SafariRemoteNotification]"})(!window['safari']||(typeof safari!=='undefined'&&safari.pushNotification)))cth('safari');
if(/*@cc_on!@*/false||!!document.documentMode)cth('ie');
if(!(/*@cc_on!@*/false||!!document.documentMode)&&!!window.StyleMedia)cth('edge');
if(!!window.chrome&&(!!window.chrome.webstore||!!window.chrome.runtime))cth('chrome');
if(~navigator.appVersion.indexOf("Win"))cth('windows');
if(~navigator.appVersion.indexOf("Mac"))cth('osx');
if(~navigator.appVersion.indexOf("Linux"))cth('linux');

// Если на проекте jQuery
// $( document ).ready(function() {
//
// });

// Изоляция без jQuery
// (function(){
//   // code
// }());



$( document ).ready( function() {

  if ( $( window ).width() < 768 ) {

    new Mhead( '.page-header', {
        scroll: {
          pin: 100
        }
    });

  } else return;

});

$( document ).ready( function() {

  var mainContainer = document.querySelector('.aside-block');
  if ( !mainContainer ) { return; }
  var collapsibleElem = mainContainer.querySelector('#desktopNav');
  var triggerBtn = mainContainer.querySelector('.btn__icon--burger');
  var logoMenu = mainContainer.querySelector('.aside-block__logo');

  var escHandler = function (e) {
    if (e.keyCode === 27 || e.code === 'Escape') {
      //console.log('Нажата клавиша Esc');
      if ( collapsibleElem && collapsibleElem.classList.contains('show') ) {
        mainContainer.style.backgroundColor = 'rgba(255,255,255,0)';
        mainContainer.style.backgroundImage = 'none';
        triggerBtn.classList.remove('btn__icon--burger--close');
        document.querySelector('body').style.overflow = 'auto';
        logoMenu.blur();
        $('.collapse').collapse('hide');
      }
    }
  };

  var menuToggleHandler = function (e) {
    if ( collapsibleElem && !collapsibleElem.classList.contains('show') ) {
      mainContainer.style.backgroundColor = 'rgba(255,255,255,1)';
      mainContainer.style.backgroundImage = 'url(img/menu-bgr-desktop.svg)';
      triggerBtn.classList.add('btn__icon--burger--close');
      document.querySelector('body').style.overflow = 'hidden';
      window.setTimeout( function () {
        logoMenu.focus();
      }, 100);

    } else {
        mainContainer.style.backgroundColor = 'rgba(255,255,255,0)';
        mainContainer.style.backgroundImage = 'none';
        triggerBtn.classList.remove('btn__icon--burger--close');
        document.querySelector('body').style.overflow = 'auto';
        logoMenu.blur();
    }
  };

  triggerBtn.addEventListener('click', menuToggleHandler);
  window.addEventListener('keydown', escHandler);
});

(function(){

  window.onscroll = function() { scrollFunction() };

  function scrollFunction() {

    var headerDesktop = document.querySelector('.page-header__desktop');
    var logoDesktop = headerDesktop.querySelector('.logo');

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      headerDesktop.style.padding = '10px 0';
      logoDesktop.style.display = 'none';
    } else {
      headerDesktop.style.padding = '14px 0';
      logoDesktop.style.display = 'inline-block';
    }
  }

}());




(function(){

  var bLazy = new Blazy({
    selector: '.b-lazy'
  });

  /*$( window ).resize(function() {
    if ( $( window ).width() >= 992 || $( window ).width() >= 1280 ) {
      // подзагрузка скрытых изображений по ширине экрана
      bLazy.load($('.b-lazy'), true);
    }
  });*/

}());

(function () {
  const submitBtn = document.querySelector('.btn-submit');
  const agreementCheckbox = document.querySelector('#agreement');
  const agreementHandler = function (e) {
    if (!this.checked) {
      submitBtn.disabled = true;
    } else {
      submitBtn.disabled = false;
    }
  };
  if (agreementCheckbox) {
    agreementCheckbox.addEventListener('change', agreementHandler);
  }
})();

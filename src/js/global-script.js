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



$( document ).ready(function() {

  $( window ).resize(function() {

    if ( $( window ).width() < 768 ) {
      // new mhead( "#mob-header", {
      //     scroll: {
      //       pin: 100
      //     }
      // });
    }
  });

});

document.addEventListener(
        "DOMContentLoaded", () => {
            new Mhead( '.page-header', {
              scroll : {
                hide: 200
              },
              // hooks: {
              //  'scrolledIn': function () {
              //    console.log('scrolledIn');
              //  },
              //  'scrolledOut': function () {
              //    console.log('scrolledOut');
              //  }
              // }
            });
        }
    );

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

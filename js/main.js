$(document).ready(function(){  $('[data-fancybox]').fancybox({    margin: [35, 10, 10, 10],    baseClass: 'custom-style',    animationEffect : "zoom-in-out",    btnTpl: {      smallBtn: '<button data-fancybox-close class="fancybox-close-small my-fancybox-close" title="{{CLOSE}}"></button>'    },    lang : 'ru',    i18n : {      'ru' : {        CLOSE       : 'Закрыть',        NEXT        : 'След.',        PREV        : 'Пред.',        ERROR       : 'Запрошенный контент не может быть загружен. <br/> Повторите попытку позже.',        PLAY_START  : 'Начать слайд-шоу',        PLAY_STOP   : 'Пауза слайд-шоу',        FULL_SCREEN : 'Полноэкранный',        THUMBS      : 'Эскизы'      }    }  });  $('.js_btn_custom_form').on('click', function(){    var customHead = $(this).attr('data-head');    var customTxt = $(this).attr('data-txt');    var customPosition = $(this).attr('data-position');    var customBtnTxt = $(this).attr('data-btn-txt');    var $jsCustomTxt = $('.js_custom_txt');    var $jsCustomPosition = $('.js_custom_position');    if(customTxt === 'hide'){      $jsCustomTxt.addClass('hidden');    }else{      $jsCustomTxt.removeClass('hidden');      $jsCustomTxt.html(customTxt);    }    $('.js_custom_head').html(customHead);    $('.js_custom_btn').html(customBtnTxt);    var catalogName = location.pathname;    if(catalogName.length){      $jsCustomPosition.val('['+catalogName.slice(1)+'] '+customPosition);    }else{      $jsCustomPosition.val(customPosition);    }  });  function scrollBarWidth() {    var block = $('<div>').css({'height':'50px','width':'50px'}),      indicator = $('<div>').css({'height':'200px'});    $('body').append(block.append(indicator));    var w1 = $('div', block).innerWidth();    block.css('overflow-y', 'scroll');    var w2 = $('div', block).innerWidth();    $(block).remove();    return (w1 - w2);  }  var scrollBarWidthValue = $(window).width()+scrollBarWidth();  var teamSliderOption = {    speed: 250,    pager: false,    touchEnabled: true,    responsive: true,    adaptiveHeight: true,    hideControlOnEnd: true,    infiniteLoop: true,    controls: true,    nextSelector: '#team_slider_next',    prevSelector: '#team_slider_prev',    nextText: 'next',    prevText: 'prev',    minSlides: 3,    maxSlides: 3,    moveSlides: 1,    slideWidth: 300,    slideMargin: 20  };  if(scrollBarWidthValue <= '500'){    teamSliderOption['minSlides'] = 1;    teamSliderOption['maxSlides'] = 1;    $('#team_slider').bxSlider(teamSliderOption);  }else if(scrollBarWidthValue <= '700'){    teamSliderOption['minSlides'] = 2;    teamSliderOption['maxSlides'] = 2;    $('#team_slider').bxSlider(teamSliderOption);  }else{    $('#team_slider').bxSlider(teamSliderOption);  }  ymaps.ready(function () {    var map = new ymaps.Map('map', {      center: [55.754497, 37.617365],      zoom: 11,      controls: ['zoomControl']    });    var iconOption = {      iconLayout: 'default#image',      iconImageHref: '../img/map_marker.png',      iconImageSize: [24, 34],      iconImageOffset: [-12, -34]    };    map.behaviors.disable('scrollZoom');    map.geoObjects.add(new ymaps.Placemark({type: "Point", coordinates: [55.754497, 37.617365]}, {hintContent: 'м. Ул. 1905 года'}, iconOption));  });  function getLastDayOfMonth(year, month) {    var date = new Date(year, month + 1, 0);    return date.getDate();  }  var today = new Date();  var countDownDate = new Date(today.getFullYear(),today.getMonth(),getLastDayOfMonth(today.getFullYear(), today.getMonth()), 0, 0, 0).getTime();  function makeMeTwoDigits(n){    return (n < 10 ? "0" : "") + n;  }  var x = setInterval(function() {    var countdown = $('.countdown');    var now = new Date().getTime();    var distance = countDownDate - now;    var days = Math.floor(distance / (1000 * 60 * 60 * 24));    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));    var seconds = Math.floor((distance % (1000 * 60)) / 1000);    countdown.html('<div class="countdown_item">\n' +      '                            <span class="item_num">'+makeMeTwoDigits(days)+'</span>\n' +      '                            <span class="item_text">Дней</span>\n' +      '                        </div>\n' +      '                        <div class="countdown_item">\n' +      '                            <span class="item_num">'+makeMeTwoDigits(hours)+'</span>\n' +      '                            <span class="item_text">Часов</span>\n' +      '                        </div>\n' +      '                        <div class="countdown_item">\n' +      '                            <span class="item_num">'+makeMeTwoDigits(minutes)+'</span>\n' +      '                            <span class="item_text">Минут</span>\n' +      '                        </div>\n' +      '                        <div class="countdown_item">\n' +      '                            <span class="item_num">'+makeMeTwoDigits(seconds)+'</span>\n' +      '                            <span class="item_text">Секунд</span>\n' +      '                        </div>');    if (distance < 0) {      clearInterval(x);      countdown.html('<div class="countdown_item">\n' +        '                            <span class="item_num">00</span>\n' +        '                            <span class="item_text">Дней</span>\n' +        '                        </div>\n' +        '                        <div class="countdown_item">\n' +        '                            <span class="item_num">00</span>\n' +        '                            <span class="item_text">Часов</span>\n' +        '                        </div>\n' +        '                        <div class="countdown_item">\n' +        '                            <span class="item_num">00</span>\n' +        '                            <span class="item_text">Минут</span>\n' +        '                        </div>\n' +        '                        <div class="countdown_item">\n' +        '                            <span class="item_num">00</span>\n' +        '                            <span class="item_text">Секунд</span>\n' +        '                        </div>');    }  }, 1000);  function getNowMonth(today) {    var month = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря','января'];    return month[ today.getMonth()];  }  function setActionDate() {    var today = new Date();    var actionDate = new Date(today.getFullYear(),today.getMonth()+1, 0, 0, 0, 0);    var monthName = getNowMonth(today);    return actionDate.getDate()+' '+monthName;  }  $('.action_date').html(setActionDate());  $('input[name="number"]').inputmask("+7(999)999-99-99");  $.validator.addMethod('regexp', function(value, element, regexp) {      var re = new RegExp(regexp);      return this.optional(element) || re.test(value);    }, "Некорректно");  $.extend($.validator.messages, {    required: "Заполните поле"  });  $('.form_vertical, .form_horizontal').each(function () {    $(this).validate({      debug: false,      onfocusout: false,      onkeyup: function(element) {$(element).valid()},      rules: {        name: {          required: true,          minlength: 2,          regexp: /^[A-Za-zА-ЯЁа-яё\s]*$/        },        email: {          required: true,          email: true        },        number: {          required: true,          regexp: /^\+\d{1}\(\d{3}\)\d{3}-\d{2}-\d{2}$/        },        msg: {          required: true,          minlength: 10        }      },      messages: {        name: {          required: "Введите имя",          minlength: $.validator.format( "Не меньше {0} символов" ),          regexp: "Только буквы"        },        email: {          required: "Введите email",          email: "Некорректно"        },        number: {          required: "Введите телефон",          regexp: "Некорректно"        },        msg: {          required: "Введите вопрос",          minlength: $.validator.format( "Не меньше {0} символов" )        }      },      wrapper: "div",      errorPlacement: function(error, element) {        if(element.siblings('.errors_block').length>0){          element.siblings('.errors_block').html(error[0].textContent);        }else{          element.after('<span class="errors_block">'+error[0].textContent+'</span>');        }      },      success: function(element) {        if(element.siblings('.errors_block').length>0){          element.siblings('.errors_block').remove();        }      }    });  });});var yaBrowserUpdater = new ya.browserUpdater.init({"lang":"ru","browsers":{"yabrowser":"15.12","chrome":"20","ie":"9","opera":"20","safari":"5.1","fx":"20","amigo":"Infinity","iron":"35","flock":"Infinity","palemoon":"25","camino":"Infinity","maxthon":"4.5","seamonkey":"2.3"},"theme":"yellow"});
$(document).ready(function(){  $('.fancybox').fancybox({    margin: [30,10,10,10],    padding: 0,    openEffect: 'fade',    closeEffect: 'fade',    nextEffect: 'fade',    prevEffect: 'fade',    wrapCSS: 'custom-style',    helpers: {      overlay: {        locked: false,        closeClick: false      }    },    tpl: {      closeBtn: '<a title="закрыть" class="my-fancybox-close" href="javascript:;"></a>'    },    beforeShow: function(){      $("body").css({'overflow-y':'hidden'});      $("html").addClass('fancybox-margin');      if(this['content']){        this['content'].find('input').on('focusout', function(){$.fancybox.reposition()});      }    },    afterClose: function(){      $("body").css({'overflow-y':'visible'});      $("html").removeClass('fancybox-margin');    }  });  $('.js_btn_custom_form').on('click', function(){    var customHead = $(this).attr('data-head');    var customTxt = $(this).attr('data-txt');    var customPosition = $(this).attr('data-position');    var customBtnTxt = $(this).attr('data-btn-txt');    var $jsCustomTxt = $('.js_custom_txt');    var $jsCustomPosition = $('.js_custom_position');    if(customTxt === 'hide'){      $jsCustomTxt.addClass('hidden');    }else{      $jsCustomTxt.removeClass('hidden');      $jsCustomTxt.html(customTxt);    }    $('.js_custom_head').html(customHead);    $('.js_custom_btn').html(customBtnTxt);    var catalogName = location.pathname.split('/')[1];    if(catalogName.length){      $jsCustomPosition.val('['+catalogName+'] '+customPosition);    }else{      $jsCustomPosition.val(customPosition);    }  });  $('#dentists_slider').bxSlider({    pager: true,    responsive: true,    adaptiveHeight: true,    hideControlOnEnd: true,    infiniteLoop: false,    controls: true,    nextSelector: '#dentists-next',    prevSelector: '#dentists-prev',    nextText: 'next',    prevText: 'prev',    minSlides: 3,    maxSlides: 3,    moveSlides: 1,    slideWidth: 301,    slideMargin: 20  });  $('input[name="number"]').inputmask("+7(999)999-99-99");  $.validator.addMethod('regexp', function(value, element, regexp) {      var re = new RegExp(regexp);      return this.optional(element) || re.test(value);    }, "Некорректно");  $.extend($.validator.messages, {    required: "Заполните поле"  });  $('.form_vertical, .form_horizontal').each(function () {    $(this).validate({      debug: false,      onfocusout: true,      onkeyup: function(element) {$(element).valid()},      rules: {        name: {          required: true,          minlength: 2,          regexp: /^[A-Za-zА-ЯЁа-яё\s]*$/        },        email: {          required: true,          email: true        },        number: {          required: true,          regexp: /^\+\d{1}\(\d{3}\)\d{3}-\d{2}-\d{2}$/        },        msg: {          required: true,          minlength: 10        }      },      messages: {        name: {          required: "Введите имя",          minlength: $.validator.format( "Не меньше {0} символов" ),          regexp: "Только буквы"        },        email: {          required: "Введите email",          email: "Некорректно"        },        number: {          required: "Введите телефон",          regexp: "Некорректно"        },        msg: {          required: "Введите вопрос",          minlength: $.validator.format( "Не меньше {0} символов" )        }      },      wrapper: "div",      errorPlacement: function(error, element) {        if(element.siblings('.errors_block').length>0){          element.siblings('.errors_block').html(error[0].textContent);        }else{          element.after('<span class="errors_block">'+error[0].textContent+'</span>');        }      },      success: function(element) {        if(element.siblings('.errors_block').length>0){          element.siblings('.errors_block').remove();        }      }    });  });});ymaps.ready(function () {  var map = new ymaps.Map('map', {    center: [55.754497, 37.617365],    zoom: 11,    controls: ['zoomControl']  });  var iconOption = {    iconLayout: 'default#image',    iconImageHref: '../img/map_marker.png',    iconImageSize: [24, 34],    iconImageOffset: [-12, -34]  };  map.behaviors.disable('scrollZoom');  map.geoObjects.add(new ymaps.Placemark({type: "Point", coordinates: [55.754497, 37.617365]}, {hintContent: 'м. Ул. 1905 года'}, iconOption));});function getLastDayOfMonth(year, month) {  var date = new Date(year, month + 1, 0);  return date.getDate();}var today = new Date();var end = new Date(today.getFullYear(),today.getMonth(),getLastDayOfMonth(today.getFullYear(), today.getMonth()), 0, 0, 0);function CountBox() {  var now = new Date();  var amount = end.getTime() - now.getTime();  if (amount < 0) {    out ="<div class='countbox-num'><span class='countbox-days1'>0</span><span class='countbox-days2'>0</span><div class='countbox-days-text'>Дней</div></div>" +      "<div class='countbox-space'></div>" +      "<div class='countbox-num'><span class='countbox-hours1'>0</span><span class='countbox-hours2'>0</span><div class='countbox-hours-text'>Часов</div></div>" +      "<div class='countbox-space'></div>" +      "<div class='countbox-num'><span class='countbox-mins1'>0</span><span class='countbox-mins2'>0</span><div class='countbox-mins-text'>Минут</div></div>" +      "<div class='countbox-space'></div>" +      "<div class='countbox-num'><span class='countbox-secs1'>0</span><span class='countbox-secs2'>0</span><div class='countbox-secs-text'>Секунд</div></div>";    $(".countbox").html(out);  } else {    days = 0;    days1 = 0;    days2 = 0;    hours = 0;    hours1 = 0;    hours2 = 0;    mins = 0;    mins1 = 0;    mins2 = 0;    secs = 0;    secs1 = 0;    secs2 = 0;    out = "";    amount = Math.floor(amount / 1e3);    days = Math.floor(amount / 86400);    days1 = (days >= 10) ? days.toString().charAt(0) : '0';    days2 = (days >= 10) ? days.toString().charAt(1) : days.toString().charAt(0);    amount = amount % 86400;    hours = Math.floor(amount / 3600);    hours1 = (hours >= 10) ? hours.toString().charAt(0) : '0';    hours2 = (hours >= 10) ? hours.toString().charAt(1) : hours.toString().charAt(0);    amount = amount % 3600;    mins = Math.floor(amount / 60);    mins1 = (mins >= 10) ? mins.toString().charAt(0) : '0';    mins2 = (mins >= 10) ? mins.toString().charAt(1) : mins.toString().charAt(0);    amount = amount % 60;    secs = Math.floor(amount);    secs1 = (secs >= 10) ? secs.toString().charAt(0) : '0';    secs2 = (secs >= 10) ? secs.toString().charAt(1) : secs.toString().charAt(0);    out = "<div class='countbox-num'><span class='countbox-days1'>" + days1 + "</span><span class='countbox-days2'>" + days2 + "</span><div class='countbox-days-text'>Дней</div></div>" +      "<div class='countbox-space'></div>" +      "<div class='countbox-num'><span class='countbox-hours1'>" + hours1 + "</span><span class='countbox-hours2'>" + hours2 + "</span><div class='countbox-hours-text'>Часов</div></div>" +      "<div class='countbox-space'></div>" +      "<div class='countbox-num'><span class='countbox-mins1'>" + mins1 + "</span><span class='countbox-mins2'>" + mins2 + "</span><div class='countbox-mins-text'>Минут</div></div>" +      "<div class='countbox-space'></div>" +      "<div class='countbox-num'><span class='countbox-secs1'>" + secs1 + "</span><span class='countbox-secs2'>" + secs2 + "</span><div class='countbox-secs-text'>Секунд</div></div>";    $(".countbox").html(out);    setTimeout("CountBox()", 1e3)  }}window.onload = function () {  CountBox()};var yaBrowserUpdater = new ya.browserUpdater.init({"lang":"ru","browsers":{"yabrowser":"15.12","chrome":"20","ie":"9","opera":"20","safari":"5.1","fx":"20","amigo":"Infinity","iron":"35","flock":"Infinity","palemoon":"25","camino":"Infinity","maxthon":"4.5","seamonkey":"2.3"},"theme":"yellow"});
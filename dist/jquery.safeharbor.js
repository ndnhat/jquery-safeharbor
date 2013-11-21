/*!
 * jQuery SafeHarbor Plugin v0.2.0 - 2013-11-20
 * https://github.com/ndnhat/jquery-safeharbor
 * 
 * Copyright 2013 Nhat Nguyen
 * Licensed MIT */
(function ($) {
  'use strict';

  $.safeHarbor = function (options) {
    var hideRibbon = function() {
      saveCookie();
      $(this).closest('div').fadeOut();
    };

    var saveCookie = function() {
      if ($.cookie) {
        $.cookie($.safeHarbor.defaults.cookie.name, 'notified', { expires: $.safeHarbor.defaults.cookie.life });
      }
    };

    options = $.extend($.safeHarbor.defaults, options);

    if (!$.cookie || !$.cookie(options.cookie.name)) {
      var closeBtn = $('<span>').css({float: 'right', margin: '0 12px', cursor: 'pointer'}).text('×').on('click', hideRibbon);
      var ribbon = $('<div>').addClass(options.cssClass).css(options.styles).html(options.text).append(closeBtn);
      $('body').prepend(ribbon);

      return ribbon;
    }
  };

  $.safeHarbor.defaults = {
    text: 'This website requires cookies to function properly. Read more about this in our Privacy Policy.',
    cookie: {
      name: 'safe_harbor',
      life: 10*365
    },
    cssClass: null,
    styles: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      textAlign: 'center',
      padding: '5px 0',
      color: '#eee',
      background: '#444',
      opacity: 0.9,
      zIndex: 5
    }
  };

}(jQuery));

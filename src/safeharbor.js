/*
 * jQuery SafeHarbor Plugin v0.1.0
 * http://www.octanner.com/
 *
 * Copyright (c) 2013 Nhat Nguyen
 * Licensed under the MIT license.
 */

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
      var closeBtn = $('<span>').css({float: 'right', margin: '0 5px', cursor: 'pointer'}).text('×').on('click', hideRibbon);
      var ribbon = $('<div>').addClass(options.cssClass).css(options.styles).text(options.text).append(closeBtn);
      $('body').prepend(ribbon);
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
      fontSize: '14px',
      textAlign: 'center',
      padding: '5px 0',
      color: '#eee',
      backgroundColor: '#444',
      background: 'rgba(0, 0, 0, .5)'
    }
  };

}(jQuery));

/*
 * jQuery SafeHarbor Plugin
 * http://ndnhat.github.io/jquery-safeharbor
 *
 * Copyright (c) 2013 Nhat Nguyen
 * Licensed under the MIT license.
 */

;(function ($) {
  'use strict';

  var pluginName = 'safeHarbor';

  var safeHarbor = function(options) {
    var closeBtn = null;
    var notice = null;

    options = $.extend(true, safeHarbor.defaults, options);

    if (!$.cookie || !$.cookie(options.cookie.name)) {
      closeBtn = $('<span>').css(options.closeStyles).text('×').click(hideNotice);
      notice = $('<div>').addClass(options.cssClass).css(options.styles).html(options.text).append(closeBtn);
      $('body').prepend(notice);
    }

    return notice;
  };

  var hideNotice = function() {
    saveCookie();
    $(this).parent().fadeOut();
  };

  var saveCookie = function() {
    if ($.cookie) {
      $.cookie(safeHarbor.defaults.cookie.name, 'notified', { expires: safeHarbor.defaults.cookie.life });
    }
  };

  safeHarbor.defaults = {
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
    },
    closeStyles: {
      float: 'right', 
      margin: '0 12px', 
      cursor: 'pointer'
    }
  };

  $[pluginName] = safeHarbor;

}(jQuery));

/*
 * jQuery SafeHarbor Plugin v0.1.0
 * http://www.octanner.com/
 *
 * Copyright (c) 2013 Nhat Nguyen
 * Licensed under the MIT license.
 */

(function ($) {

  $.fn.employ = function (opts) {
    var hideRibbon = function() {
      if ($.cookie) {
        $.cookie('safe_harbor', 'notified', { expires: 10*365 });
      }
      $(this).closest('div').fadeOut();
    };

    var defaults = {
      text: 'This website requires cookies to function properly. Read more about this in our Privacy Policy.',
      cssClass: null,
      styles: {
        position: 'fixed',
        top: 0, 
        left: 0,
        width: '100%',
        textAlign: 'center',
        padding: '5px 0',
        color: '#eee',
        backgroundColor: '#444',
        background: 'rgba(0, 0, 0, .5)'
      }
    };

    $.extend(defaults, opts);

    if (!$.cookie || !$.cookie('safe_harbor')) {
      var closeBtn = $('<span>').css({float: 'right', margin: '0 5px', cursor: 'pointer'}).text('×').on('click', hideRibbon);
      var ribbon = $('<div>').addClass(defaults.cssClass).css(defaults.styles).text(defaults.text).append(closeBtn);
      this.first().parent('body').prepend(ribbon);
    }

    return this;
  };

}(jQuery));

/*
 * jQuery SafeHarbor Plugin v0.1.0
 * http://www.octanner.com/
 *
 * Copyright (c) 2013 Nhat Nguyen
 * Licensed under the MIT license.
 */

(function ($) {

  $.fn.employ = function (opts) {
    var defaults = {
      text: 'This website requires cookies to function properly. Read more about this on our Privacy Policy.',
      cssClass: null,
      styles: {
        position: 'absolute',
        top: 0, 
        left: 0,
        width: '100%',
        textAlign: 'center',
        padding: '5px 0',
        color: '#ccc',
        backgroundColor: '#444',
        background: 'rgba(0, 0, 0, .5)'
      }
    };

    $.extend(defaults, opts);

    var ribbon = $('<div>').css(defaults.styles).text(defaults.text);
    var closeBtn = $('<span>').css({float: 'right', margin: '0 5px'}).text('×');
    ribbon.append(closeBtn);
    this.first().parent('body').prepend(ribbon);

    return this;
  };

}(jQuery));

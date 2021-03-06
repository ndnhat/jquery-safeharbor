(function($) {
  module('jQuery.safeHarbor', {
    setup: function() {
      this.ribbon = null;
    },
    teardown: function() {
      this.ribbon.remove();
    }
  });

  test('sets a cookie when dismissed if possible', function() {
    this.ribbon = $.safeHarbor({cookie: {name: 'someName'}});
    this.ribbon.find('span').trigger('click');

    if ($.cookie) {
      ok($.removeCookie('someName'), 'should set a cookie');
    }
  });

  test('is employed to the top of body', function() {
    var verbiage = 'This is our <a href="#">Privacy Policy</a>';
    this.ribbon = $.safeHarbor({text: verbiage});

    expect(1);
    ok(this.ribbon.html().indexOf(verbiage) >= 0, 'should be employed to the top of the body');
  });

  test('supports custom class', function() {
    var className = 'testClass';
    this.ribbon = $.safeHarbor({cssClass: className});

    expect(1);
    ok(this.ribbon.hasClass(className), 'should support custom class');
  });

  test('supports style attribute', function() {
    var cssStyles = {top: '100px', position: 'absolute'};
    this.ribbon = $.safeHarbor({styles: cssStyles});

    expect(3);
    ok($.safeHarbor.defaults.styles.top === cssStyles.top, 'should add new options');
    ok($.safeHarbor.defaults.styles.position === cssStyles.position, 'should override existing options');
    ok($.safeHarbor.defaults.styles.color, 'should maintain default options');
  });

}(jQuery));

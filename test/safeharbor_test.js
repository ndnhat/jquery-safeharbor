(function($) {
  module('jQuery.safeHarbor', {});

  test('sets a cookie when dismissed if possible', function() {
    $.safeHarbor({cookie: {name: 'someName'}});
      $('body').children('div').first().find('span').trigger('click');
    if ($.cookie) {
      ok($.removeCookie('someName'), 'should set a cookie');
    }
  });

  test('is employed to the top of body', function() {
    var verbiage = 'This is our <a href="#">Privacy Policy</a>';
    $.safeHarbor({text: verbiage});
    var ribbon = $('body').children().first();
    expect(1);
    ok(ribbon.html().indexOf(verbiage) >= 0, 'should be employed to the top of the body');
    ribbon.remove();
  });

  test('supports custom class', function() {
    $.safeHarbor({cssClass: 'testClass'});
    var ribbon = $('body').children().first();
    expect(1);
    ok(ribbon.hasClass('testClass'), 'should support custom class');
    ribbon.remove();
  });

  test('supports style attribute', function() {
    $.safeHarbor({styles: {top: '100px'}});
    var ribbon = $('body').children().first();
    expect(1);
    ok(ribbon.css('top') === '100px', 'should support style attribute');
    ribbon.remove();
  });

}(jQuery));

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
    var verbiage = 'some verbiage';
    $.safeHarbor({text: verbiage});
    var ribbon = $('body').children().first();
    expect(1);
    ok(ribbon.text().indexOf(verbiage) >= 0, 'should be employed to the top of the body');
    ribbon.remove();
  });

}(jQuery));

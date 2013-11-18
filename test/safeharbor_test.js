(function($) {
  module('jQuery#employ', {
    setup: function() {
      this.elems = $('#qunit-fixture');
    },
    teardown: function() {
      if ($.cookie) {
        $.removeCookie('safe_harbor');
      }
    }
  });

  test('is chainable', function() {
    var elem = $('<div>'); 
    expect(1);
    strictEqual(elem.employ(), elem, 'should be chainable');
  });

  test('sets a cookie when dismissed if possible', function() {
    this.elems.employ().parent('body').children().first().find('span').trigger('click');
    if ($.cookie) {
      ok($.cookie('safe_harbor'), 'should set a cookie');
    }
  });

  test('is employed to the top of body', function() {
    var verbiage = 'some verbiage';
    var ribbon = this.elems.employ({text: verbiage}).parent('body').children().first();
    expect(1);
    ok(ribbon.text().indexOf(verbiage) >= 0, 'should be employed to the top of the body');
    ribbon.remove();
  });

}(jQuery));

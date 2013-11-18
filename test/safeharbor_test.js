(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#employ', {
    setup: function() {
      this.elems = $('#qunit-fixture');
    }
  });

  test('is chainable', function() {
    var elem = $('<div>'); 
    expect(1);
    strictEqual(elem.employ(), elem, 'should be chainable');
  });

  test('is employed to the top of body', function() {
    var verbiage = 'some verbiage';
    var ribbon = this.elems.employ({text: verbiage}).parent('body').children().first();
    expect(1);
    ok(ribbon.text().indexOf(verbiage) >= 0, 'should be employed to the top of the body');
  });

}(jQuery));

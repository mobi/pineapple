describe('Factory: deviceFactory', function() {
  'use strict';

  module.sharedInjector();

  var subject = {
    module: 'deviceFactory',
    factory: 'deviceFactory'
  };

  var reference;

  beforeAll(function() { // jshint ignore:line
    // The module we're testing
    module(subject.module);

    ////////////////////////

    inject(function($injector) {
      reference = $injector.get(subject.factory);
    });
  });

  // ================================
  // Specs
  // ================================
  describe('', function() {
    it('', function() {

    });
  });
});

describe('Component: deviceTable', function() {
  'use strict';

  module.sharedInjector();

  var subject = {
    module: 'deviceTable',
    component: 'deviceTable'
  };

  var ctrl, scope;

  beforeAll(function() { // jshint ignore: line
    module('deviceFactory');
    module(subject.module);

    ////////////////////////

    inject(function($injector) {
      var $componentController = $injector.get('$componentController');
      var $rootScope = $injector.get('$rootScope');

      scope = $rootScope.$new();

      // Component Setup
      // ========================
      var bindings = {};
      var locals = {
        $scope: scope
      };

      ctrl = $componentController(subject.component, locals, bindings);
    });
  });

  it('renders and binds', function() {
    expect(ctrl).toBeDefined();
  });

  describe('onInit', function() {
    beforeAll(function() {
      // Setup spec values
    });

    afterEach(function() {
      // Reset your values
    });

    it('', function() {
      // Add your expectations
      // Docs: https://jasmine.github.io/2.4/introduction.html
    });
  });
});

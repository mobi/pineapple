describe('Factory: deviceFactory', function() {
  'use strict';

  module.sharedInjector();

  var subject = {
    module: 'deviceFactory',
    factory: 'deviceFactory'
  };

  var reference, $httpBackend, deviceFixture;

  beforeAll(function() {
    module(subject.module);

    // Fixtures
    deviceFixture = {
      'id': 'devices',
      'title': 'Devices',
      'headers': [
        {
          'label': 'Model',
          'full_label': 'Model'
        },{
          'label': 'Person',
          'full_label': 'Person'
        },
      ],
      'rows': [
        ['Firebolt', 'Harry Potter'],
        ['Cleansweep Five', 'Ronald Weasley'],
        ['Buckbeak', 'Hermione Granger'],
        ['Nimbus 2001', 'Draco Malfoy'],
        ['Dark Mark', 'Tom Riddle']
      ]
    };

    ////////////////////////

    inject(function($injector) {
      $httpBackend = $injector.get('$httpBackend');
      reference = $injector.get(subject.factory);
    });
  });

  // ================================
  // Specs
  // ================================
  describe('get', function() {
    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('fetches data', function() {
      var didChange = false;
      $httpBackend.expectGET('assets/javascripts/fixtures/devices.json').respond(200, {
        data: deviceFixture
      });

      reference.get().then(function(data) {
        didChange = true;
      }).catch(function() {
        didChange = false;
      });

      $httpBackend.flush();

      expect(didChange).toBe(true);
    });

    it('errors if something is wrong', function() {
      var didFail = false;

      $httpBackend.expectGET('assets/javascripts/fixtures/devices.json').respond(400, {
        error: 'Something went wrong'
      });

      reference.get().then(function(data) {
        didFail = false;
      }).catch(function() {
        didFail = true;
      });

      $httpBackend.flush();

      expect(didFail).toBe(true);
    });
  });
});

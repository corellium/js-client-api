/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * The version of the OpenAPI document: 7.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CorelliumClient);
  }
}(this, function(expect, CorelliumClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CorelliumClient.TrialRequestMetadata();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TrialRequestMetadata', function() {
    it('should create an instance of TrialRequestMetadata', function() {
      // uncomment below and update the code to test TrialRequestMetadata
      //var instance = new CorelliumClient.TrialRequestMetadata();
      //expect(instance).to.be.a(CorelliumClient.TrialRequestMetadata);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CorelliumClient.TrialRequestMetadata();
      //expect(instance).to.be();
    });

    it('should have the property company (base name: "company")', function() {
      // uncomment below and update the code to test the property company
      //var instance = new CorelliumClient.TrialRequestMetadata();
      //expect(instance).to.be();
    });

    it('should have the property malware (base name: "malware")', function() {
      // uncomment below and update the code to test the property malware
      //var instance = new CorelliumClient.TrialRequestMetadata();
      //expect(instance).to.be();
    });

    it('should have the property research (base name: "research")', function() {
      // uncomment below and update the code to test the property research
      //var instance = new CorelliumClient.TrialRequestMetadata();
      //expect(instance).to.be();
    });

    it('should have the property pentest (base name: "pentest")', function() {
      // uncomment below and update the code to test the property pentest
      //var instance = new CorelliumClient.TrialRequestMetadata();
      //expect(instance).to.be();
    });

    it('should have the property other (base name: "other")', function() {
      // uncomment below and update the code to test the property other
      //var instance = new CorelliumClient.TrialRequestMetadata();
      //expect(instance).to.be();
    });

  });

}));

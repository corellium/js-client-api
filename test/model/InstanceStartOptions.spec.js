/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * The version of the OpenAPI document: 4.5.0-16775
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
    instance = new CorelliumClient.InstanceStartOptions();
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

  describe('InstanceStartOptions', function() {
    it('should create an instance of InstanceStartOptions', function() {
      // uncomment below and update the code to test InstanceStartOptions
      //var instance = new CorelliumClient.InstanceStartOptions();
      //expect(instance).to.be.a(CorelliumClient.InstanceStartOptions);
    });

    it('should have the property paused (base name: "paused")', function() {
      // uncomment below and update the code to test the property paused
      //var instance = new CorelliumClient.InstanceStartOptions();
      //expect(instance).to.be();
    });

    it('should have the property sockcap (base name: "sockcap")', function() {
      // uncomment below and update the code to test the property sockcap
      //var instance = new CorelliumClient.InstanceStartOptions();
      //expect(instance).to.be();
    });

  });

}));

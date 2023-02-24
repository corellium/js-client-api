/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * The version of the OpenAPI document: 4.2.0-6a4b86f
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
    instance = new CorelliumClient.GpiosState();
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

  describe('GpiosState', function() {
    it('should create an instance of GpiosState', function() {
      // uncomment below and update the code to test GpiosState
      //var instance = new CorelliumClient.GpiosState();
      //expect(instance).to.be.a(CorelliumClient.GpiosState);
    });

    it('should have the property led (base name: "led")', function() {
      // uncomment below and update the code to test the property led
      //var instance = new CorelliumClient.GpiosState();
      //expect(instance).to.be();
    });

    it('should have the property button (base name: "button")', function() {
      // uncomment below and update the code to test the property button
      //var instance = new CorelliumClient.GpiosState();
      //expect(instance).to.be();
    });

    it('should have the property _switch (base name: "switch")', function() {
      // uncomment below and update the code to test the property _switch
      //var instance = new CorelliumClient.GpiosState();
      //expect(instance).to.be();
    });

  });

}));
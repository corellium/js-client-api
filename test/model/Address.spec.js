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
    instance = new CorelliumClient.Address();
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

  describe('Address', function() {
    it('should create an instance of Address', function() {
      // uncomment below and update the code to test Address
      //var instance = new CorelliumClient.Address();
      //expect(instance).to.be.a(CorelliumClient.Address);
    });

    it('should have the property address1 (base name: "address1")', function() {
      // uncomment below and update the code to test the property address1
      //var instance = new CorelliumClient.Address();
      //expect(instance).to.be();
    });

    it('should have the property address2 (base name: "address2")', function() {
      // uncomment below and update the code to test the property address2
      //var instance = new CorelliumClient.Address();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new CorelliumClient.Address();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instance = new CorelliumClient.Address();
      //expect(instance).to.be();
    });

    it('should have the property postalCode (base name: "postal_code")', function() {
      // uncomment below and update the code to test the property postalCode
      //var instance = new CorelliumClient.Address();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new CorelliumClient.Address();
      //expect(instance).to.be();
    });

  });

}));

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
    instance = new CorelliumClient.User();
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

  describe('User', function() {
    it('should create an instance of User', function() {
      // uncomment below and update the code to test User
      //var instance = new CorelliumClient.User();
      //expect(instance).to.be.a(CorelliumClient.User);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new CorelliumClient.User();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instance = new CorelliumClient.User();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CorelliumClient.User();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new CorelliumClient.User();
      //expect(instance).to.be();
    });

    it('should have the property administrator (base name: "administrator")', function() {
      // uncomment below and update the code to test the property administrator
      //var instance = new CorelliumClient.User();
      //expect(instance).to.be();
    });

  });

}));
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
    instance = new CorelliumClient.NetworkConnectionProviderOffsetPaginationResult();
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

  describe('NetworkConnectionProviderOffsetPaginationResult', function() {
    it('should create an instance of NetworkConnectionProviderOffsetPaginationResult', function() {
      // uncomment below and update the code to test NetworkConnectionProviderOffsetPaginationResult
      //var instance = new CorelliumClient.NetworkConnectionProviderOffsetPaginationResult();
      //expect(instance).to.be.a(CorelliumClient.NetworkConnectionProviderOffsetPaginationResult);
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instance = new CorelliumClient.NetworkConnectionProviderOffsetPaginationResult();
      //expect(instance).to.be();
    });

    it('should have the property count (base name: "count")', function() {
      // uncomment below and update the code to test the property count
      //var instance = new CorelliumClient.NetworkConnectionProviderOffsetPaginationResult();
      //expect(instance).to.be();
    });

    it('should have the property limit (base name: "limit")', function() {
      // uncomment below and update the code to test the property limit
      //var instance = new CorelliumClient.NetworkConnectionProviderOffsetPaginationResult();
      //expect(instance).to.be();
    });

    it('should have the property offset (base name: "offset")', function() {
      // uncomment below and update the code to test the property offset
      //var instance = new CorelliumClient.NetworkConnectionProviderOffsetPaginationResult();
      //expect(instance).to.be();
    });

    it('should have the property results (base name: "results")', function() {
      // uncomment below and update the code to test the property results
      //var instance = new CorelliumClient.NetworkConnectionProviderOffsetPaginationResult();
      //expect(instance).to.be();
    });

  });

}));

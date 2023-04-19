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
    instance = new CorelliumClient.ProxyConfig();
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

  describe('ProxyConfig', function() {
    it('should create an instance of ProxyConfig', function() {
      // uncomment below and update the code to test ProxyConfig
      //var instance = new CorelliumClient.ProxyConfig();
      //expect(instance).to.be.a(CorelliumClient.ProxyConfig);
    });

    it('should have the property devicePort (base name: "devicePort")', function() {
      // uncomment below and update the code to test the property devicePort
      //var instance = new CorelliumClient.ProxyConfig();
      //expect(instance).to.be();
    });

    it('should have the property firstAvailable (base name: "firstAvailable")', function() {
      // uncomment below and update the code to test the property firstAvailable
      //var instance = new CorelliumClient.ProxyConfig();
      //expect(instance).to.be();
    });

    it('should have the property expose (base name: "expose")', function() {
      // uncomment below and update the code to test the property expose
      //var instance = new CorelliumClient.ProxyConfig();
      //expect(instance).to.be();
    });

    it('should have the property routerPort (base name: "routerPort")', function() {
      // uncomment below and update the code to test the property routerPort
      //var instance = new CorelliumClient.ProxyConfig();
      //expect(instance).to.be();
    });

  });

}));
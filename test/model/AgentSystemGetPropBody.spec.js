/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * The version of the OpenAPI document: 5.2.0-17368
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
    instance = new CorelliumClient.AgentSystemGetPropBody();
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

  describe('AgentSystemGetPropBody', function() {
    it('should create an instance of AgentSystemGetPropBody', function() {
      // uncomment below and update the code to test AgentSystemGetPropBody
      //var instance = new CorelliumClient.AgentSystemGetPropBody();
      //expect(instance).to.be.a(CorelliumClient.AgentSystemGetPropBody);
    });

    it('should have the property property (base name: "property")', function() {
      // uncomment below and update the code to test the property property
      //var instance = new CorelliumClient.AgentSystemGetPropBody();
      //expect(instance).to.be();
    });

  });

}));

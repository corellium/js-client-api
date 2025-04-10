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
    instance = new CorelliumClient.DomainAuthProviderResponse();
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

  describe('DomainAuthProviderResponse', function() {
    it('should create an instance of DomainAuthProviderResponse', function() {
      // uncomment below and update the code to test DomainAuthProviderResponse
      //var instance = new CorelliumClient.DomainAuthProviderResponse();
      //expect(instance).to.be.a(CorelliumClient.DomainAuthProviderResponse);
    });

    it('should have the property identifier (base name: "identifier")', function() {
      // uncomment below and update the code to test the property identifier
      //var instance = new CorelliumClient.DomainAuthProviderResponse();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new CorelliumClient.DomainAuthProviderResponse();
      //expect(instance).to.be();
    });

    it('should have the property providerType (base name: "providerType")', function() {
      // uncomment below and update the code to test the property providerType
      //var instance = new CorelliumClient.DomainAuthProviderResponse();
      //expect(instance).to.be();
    });

    it('should have the property provider (base name: "provider")', function() {
      // uncomment below and update the code to test the property provider
      //var instance = new CorelliumClient.DomainAuthProviderResponse();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instance = new CorelliumClient.DomainAuthProviderResponse();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CorelliumClient.DomainAuthProviderResponse();
      //expect(instance).to.be();
    });

    it('should have the property authorizationUrl (base name: "authorizationUrl")', function() {
      // uncomment below and update the code to test the property authorizationUrl
      //var instance = new CorelliumClient.DomainAuthProviderResponse();
      //expect(instance).to.be();
    });

    it('should have the property _default (base name: "default")', function() {
      // uncomment below and update the code to test the property _default
      //var instance = new CorelliumClient.DomainAuthProviderResponse();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instance = new CorelliumClient.DomainAuthProviderResponse();
      //expect(instance).to.be();
    });

    it('should have the property config (base name: "config")', function() {
      // uncomment below and update the code to test the property config
      //var instance = new CorelliumClient.DomainAuthProviderResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "createdBy")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instance = new CorelliumClient.DomainAuthProviderResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new CorelliumClient.DomainAuthProviderResponse();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updatedAt")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new CorelliumClient.DomainAuthProviderResponse();
      //expect(instance).to.be();
    });

  });

}));

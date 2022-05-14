/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * The version of the OpenAPI document: 3.10.0-13354
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
    instance = new CorelliumClient.Instance();
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

  describe('Instance', function() {
    it('should create an instance of Instance', function() {
      // uncomment below and update the code to test Instance
      //var instance = new CorelliumClient.Instance();
      //expect(instance).to.be.a(CorelliumClient.Instance);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new CorelliumClient.Instance();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CorelliumClient.Instance();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instance = new CorelliumClient.Instance();
      //expect(instance).to.be();
    });

    it('should have the property flavor (base name: "flavor")', function() {
      // uncomment below and update the code to test the property flavor
      //var instance = new CorelliumClient.Instance();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new CorelliumClient.Instance();
      //expect(instance).to.be();
    });

    it('should have the property project (base name: "project")', function() {
      // uncomment below and update the code to test the property project
      //var instance = new CorelliumClient.Instance();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new CorelliumClient.Instance();
      //expect(instance).to.be();
    });

    it('should have the property stateChanged (base name: "stateChanged")', function() {
      // uncomment below and update the code to test the property stateChanged
      //var instance = new CorelliumClient.Instance();
      //expect(instance).to.be();
    });

    it('should have the property userTask (base name: "userTask")', function() {
      // uncomment below and update the code to test the property userTask
      //var instance = new CorelliumClient.Instance();
      //expect(instance).to.be();
    });

    it('should have the property taskState (base name: "taskState")', function() {
      // uncomment below and update the code to test the property taskState
      //var instance = new CorelliumClient.Instance();
      //expect(instance).to.be();
    });

    it('should have the property error (base name: "error")', function() {
      // uncomment below and update the code to test the property error
      //var instance = new CorelliumClient.Instance();
      //expect(instance).to.be();
    });

    it('should have the property bootOptions (base name: "bootOptions")', function() {
      // uncomment below and update the code to test the property bootOptions
      //var instance = new CorelliumClient.Instance();
      //expect(instance).to.be();
    });

    it('should have the property serviceIp (base name: "serviceIp")', function() {
      // uncomment below and update the code to test the property serviceIp
      //var instance = new CorelliumClient.Instance();
      //expect(instance).to.be();
    });

    it('should have the property wifiIp (base name: "wifiIp")', function() {
      // uncomment below and update the code to test the property wifiIp
      //var instance = new CorelliumClient.Instance();
      //expect(instance).to.be();
    });

    it('should have the property services (base name: "services")', function() {
      // uncomment below and update the code to test the property services
      //var instance = new CorelliumClient.Instance();
      //expect(instance).to.be();
    });

    it('should have the property panicked (base name: "panicked")', function() {
      // uncomment below and update the code to test the property panicked
      //var instance = new CorelliumClient.Instance();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new CorelliumClient.Instance();
      //expect(instance).to.be();
    });

    it('should have the property model (base name: "model")', function() {
      // uncomment below and update the code to test the property model
      //var instance = new CorelliumClient.Instance();
      //expect(instance).to.be();
    });

    it('should have the property fwpackage (base name: "fwpackage")', function() {
      // uncomment below and update the code to test the property fwpackage
      //var instance = new CorelliumClient.Instance();
      //expect(instance).to.be();
    });

    it('should have the property os (base name: "os")', function() {
      // uncomment below and update the code to test the property os
      //var instance = new CorelliumClient.Instance();
      //expect(instance).to.be();
    });

    it('should have the property agent (base name: "agent")', function() {
      // uncomment below and update the code to test the property agent
      //var instance = new CorelliumClient.Instance();
      //expect(instance).to.be();
    });

    it('should have the property netmon (base name: "netmon")', function() {
      // uncomment below and update the code to test the property netmon
      //var instance = new CorelliumClient.Instance();
      //expect(instance).to.be();
    });

    it('should have the property exposePort (base name: "exposePort")', function() {
      // uncomment below and update the code to test the property exposePort
      //var instance = new CorelliumClient.Instance();
      //expect(instance).to.be();
    });

    it('should have the property fault (base name: "fault")', function() {
      // uncomment below and update the code to test the property fault
      //var instance = new CorelliumClient.Instance();
      //expect(instance).to.be();
    });

    it('should have the property patches (base name: "patches")', function() {
      // uncomment below and update the code to test the property patches
      //var instance = new CorelliumClient.Instance();
      //expect(instance).to.be();
    });

  });

}));

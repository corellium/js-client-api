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
    instance = new CorelliumClient.Firmware();
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

  describe('Firmware', function() {
    it('should create an instance of Firmware', function() {
      // uncomment below and update the code to test Firmware
      //var instance = new CorelliumClient.Firmware();
      //expect(instance).to.be.a(CorelliumClient.Firmware);
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new CorelliumClient.Firmware();
      //expect(instance).to.be();
    });

    it('should have the property buildid (base name: "buildid")', function() {
      // uncomment below and update the code to test the property buildid
      //var instance = new CorelliumClient.Firmware();
      //expect(instance).to.be();
    });

    it('should have the property androidFlavor (base name: "AndroidFlavor")', function() {
      // uncomment below and update the code to test the property androidFlavor
      //var instance = new CorelliumClient.Firmware();
      //expect(instance).to.be();
    });

    it('should have the property aPIVersion (base name: "APIVersion")', function() {
      // uncomment below and update the code to test the property aPIVersion
      //var instance = new CorelliumClient.Firmware();
      //expect(instance).to.be();
    });

    it('should have the property sha256sum (base name: "sha256sum")', function() {
      // uncomment below and update the code to test the property sha256sum
      //var instance = new CorelliumClient.Firmware();
      //expect(instance).to.be();
    });

    it('should have the property sha1sum (base name: "sha1sum")', function() {
      // uncomment below and update the code to test the property sha1sum
      //var instance = new CorelliumClient.Firmware();
      //expect(instance).to.be();
    });

    it('should have the property md5sum (base name: "md5sum")', function() {
      // uncomment below and update the code to test the property md5sum
      //var instance = new CorelliumClient.Firmware();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instance = new CorelliumClient.Firmware();
      //expect(instance).to.be();
    });

    it('should have the property uniqueId (base name: "uniqueId")', function() {
      // uncomment below and update the code to test the property uniqueId
      //var instance = new CorelliumClient.Firmware();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new CorelliumClient.Firmware();
      //expect(instance).to.be();
    });

    it('should have the property releasedate (base name: "releasedate")', function() {
      // uncomment below and update the code to test the property releasedate
      //var instance = new CorelliumClient.Firmware();
      //expect(instance).to.be();
    });

    it('should have the property uploaddate (base name: "uploaddate")', function() {
      // uncomment below and update the code to test the property uploaddate
      //var instance = new CorelliumClient.Firmware();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new CorelliumClient.Firmware();
      //expect(instance).to.be();
    });

    it('should have the property origUrl (base name: "orig_url")', function() {
      // uncomment below and update the code to test the property origUrl
      //var instance = new CorelliumClient.Firmware();
      //expect(instance).to.be();
    });

    it('should have the property filename (base name: "filename")', function() {
      // uncomment below and update the code to test the property filename
      //var instance = new CorelliumClient.Firmware();
      //expect(instance).to.be();
    });

  });

}));

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

import ApiClient from '../ApiClient';

/**
 * The Features model module.
 * @module model/Features
 * @version 0.4.1
 */
class Features {
    /**
     * Constructs a new <code>Features</code>.
     * 
     * @alias module:model/Features
     */
    constructor() { 
        
        Features.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Features</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Features} obj Optional instance to populate.
     * @return {module:model/Features} The populated <code>Features</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Features();

            if (data.hasOwnProperty('apps')) {
                obj['apps'] = ApiClient.convertToType(data['apps'], 'Boolean');
            }
            if (data.hasOwnProperty('connect')) {
                obj['connect'] = ApiClient.convertToType(data['connect'], 'Boolean');
            }
            if (data.hasOwnProperty('console')) {
                obj['console'] = ApiClient.convertToType(data['console'], 'Boolean');
            }
            if (data.hasOwnProperty('coretrace')) {
                obj['coretrace'] = ApiClient.convertToType(data['coretrace'], 'Boolean');
            }
            if (data.hasOwnProperty('deviceControl')) {
                obj['deviceControl'] = ApiClient.convertToType(data['deviceControl'], 'Boolean');
            }
            if (data.hasOwnProperty('deviceDelete')) {
                obj['deviceDelete'] = ApiClient.convertToType(data['deviceDelete'], 'Boolean');
            }
            if (data.hasOwnProperty('files')) {
                obj['files'] = ApiClient.convertToType(data['files'], 'Boolean');
            }
            if (data.hasOwnProperty('frida')) {
                obj['frida'] = ApiClient.convertToType(data['frida'], 'Boolean');
            }
            if (data.hasOwnProperty('images')) {
                obj['images'] = ApiClient.convertToType(data['images'], 'Boolean');
            }
            if (data.hasOwnProperty('messaging')) {
                obj['messaging'] = ApiClient.convertToType(data['messaging'], 'Boolean');
            }
            if (data.hasOwnProperty('netmon')) {
                obj['netmon'] = ApiClient.convertToType(data['netmon'], 'Boolean');
            }
            if (data.hasOwnProperty('network')) {
                obj['network'] = ApiClient.convertToType(data['network'], 'Boolean');
            }
            if (data.hasOwnProperty('portForwarding')) {
                obj['portForwarding'] = ApiClient.convertToType(data['portForwarding'], 'Boolean');
            }
            if (data.hasOwnProperty('powerManagement')) {
                obj['powerManagement'] = ApiClient.convertToType(data['powerManagement'], 'Boolean');
            }
            if (data.hasOwnProperty('profile')) {
                obj['profile'] = ApiClient.convertToType(data['profile'], 'Boolean');
            }
            if (data.hasOwnProperty('sensors')) {
                obj['sensors'] = ApiClient.convertToType(data['sensors'], 'Boolean');
            }
            if (data.hasOwnProperty('settings')) {
                obj['settings'] = ApiClient.convertToType(data['settings'], 'Boolean');
            }
            if (data.hasOwnProperty('snapshots')) {
                obj['snapshots'] = ApiClient.convertToType(data['snapshots'], 'Boolean');
            }
            if (data.hasOwnProperty('strace')) {
                obj['strace'] = ApiClient.convertToType(data['strace'], 'Boolean');
            }
            if (data.hasOwnProperty('system')) {
                obj['system'] = ApiClient.convertToType(data['system'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Features</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Features</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * 
 * @member {Boolean} apps
 */
Features.prototype['apps'] = undefined;

/**
 * 
 * @member {Boolean} connect
 */
Features.prototype['connect'] = undefined;

/**
 * 
 * @member {Boolean} console
 */
Features.prototype['console'] = undefined;

/**
 * 
 * @member {Boolean} coretrace
 */
Features.prototype['coretrace'] = undefined;

/**
 * 
 * @member {Boolean} deviceControl
 */
Features.prototype['deviceControl'] = undefined;

/**
 * 
 * @member {Boolean} deviceDelete
 */
Features.prototype['deviceDelete'] = undefined;

/**
 * 
 * @member {Boolean} files
 */
Features.prototype['files'] = undefined;

/**
 * 
 * @member {Boolean} frida
 */
Features.prototype['frida'] = undefined;

/**
 * 
 * @member {Boolean} images
 */
Features.prototype['images'] = undefined;

/**
 * 
 * @member {Boolean} messaging
 */
Features.prototype['messaging'] = undefined;

/**
 * 
 * @member {Boolean} netmon
 */
Features.prototype['netmon'] = undefined;

/**
 * 
 * @member {Boolean} network
 */
Features.prototype['network'] = undefined;

/**
 * 
 * @member {Boolean} portForwarding
 */
Features.prototype['portForwarding'] = undefined;

/**
 * 
 * @member {Boolean} powerManagement
 */
Features.prototype['powerManagement'] = undefined;

/**
 * 
 * @member {Boolean} profile
 */
Features.prototype['profile'] = undefined;

/**
 * 
 * @member {Boolean} sensors
 */
Features.prototype['sensors'] = undefined;

/**
 * 
 * @member {Boolean} settings
 */
Features.prototype['settings'] = undefined;

/**
 * 
 * @member {Boolean} snapshots
 */
Features.prototype['snapshots'] = undefined;

/**
 * 
 * @member {Boolean} strace
 */
Features.prototype['strace'] = undefined;

/**
 * 
 * @member {Boolean} system
 */
Features.prototype['system'] = undefined;






export default Features;


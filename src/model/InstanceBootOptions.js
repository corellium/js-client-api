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

import ApiClient from '../ApiClient';

/**
 * The InstanceBootOptions model module.
 * @module model/InstanceBootOptions
 * @version 0.1.0
 */
class InstanceBootOptions {
    /**
     * Constructs a new <code>InstanceBootOptions</code>.
     * @alias module:model/InstanceBootOptions
     */
    constructor() { 
        
        InstanceBootOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InstanceBootOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceBootOptions} obj Optional instance to populate.
     * @return {module:model/InstanceBootOptions} The populated <code>InstanceBootOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstanceBootOptions();

            if (data.hasOwnProperty('bootArgs')) {
                obj['bootArgs'] = ApiClient.convertToType(data['bootArgs'], 'String');
            }
            if (data.hasOwnProperty('restoreBootArgs')) {
                obj['restoreBootArgs'] = ApiClient.convertToType(data['restoreBootArgs'], 'String');
            }
            if (data.hasOwnProperty('udid')) {
                obj['udid'] = ApiClient.convertToType(data['udid'], 'String');
            }
            if (data.hasOwnProperty('ecid')) {
                obj['ecid'] = ApiClient.convertToType(data['ecid'], 'String');
            }
            if (data.hasOwnProperty('randomSeed')) {
                obj['randomSeed'] = ApiClient.convertToType(data['randomSeed'], 'String');
            }
            if (data.hasOwnProperty('pac')) {
                obj['pac'] = ApiClient.convertToType(data['pac'], 'Boolean');
            }
            if (data.hasOwnProperty('aprr')) {
                obj['aprr'] = ApiClient.convertToType(data['aprr'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} bootArgs
 */
InstanceBootOptions.prototype['bootArgs'] = undefined;

/**
 * @member {String} restoreBootArgs
 */
InstanceBootOptions.prototype['restoreBootArgs'] = undefined;

/**
 * Boot udid
 * @member {String} udid
 */
InstanceBootOptions.prototype['udid'] = undefined;

/**
 * Assigned ECID
 * @member {String} ecid
 */
InstanceBootOptions.prototype['ecid'] = undefined;

/**
 * Random seed to provide to boot if any
 * @member {String} randomSeed
 */
InstanceBootOptions.prototype['randomSeed'] = undefined;

/**
 * Enable PAC
 * @member {Boolean} pac
 */
InstanceBootOptions.prototype['pac'] = undefined;

/**
 * Enable APRR
 * @member {Boolean} aprr
 */
InstanceBootOptions.prototype['aprr'] = undefined;






export default InstanceBootOptions;


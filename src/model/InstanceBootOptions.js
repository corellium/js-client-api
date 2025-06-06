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
import InstanceBootOptionsAdditionalTag from './InstanceBootOptionsAdditionalTag';

/**
 * The InstanceBootOptions model module.
 * @module model/InstanceBootOptions
 * @version 0.4.1
 */
class InstanceBootOptions {
    /**
     * Constructs a new <code>InstanceBootOptions</code>.
     * 
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
            if (data.hasOwnProperty('additionalTags')) {
                obj['additionalTags'] = ApiClient.convertToType(data['additionalTags'], [InstanceBootOptionsAdditionalTag]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InstanceBootOptions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InstanceBootOptions</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['bootArgs'] && !(typeof data['bootArgs'] === 'string' || data['bootArgs'] instanceof String)) {
            throw new Error("Expected the field `bootArgs` to be a primitive type in the JSON string but got " + data['bootArgs']);
        }
        // ensure the json data is a string
        if (data['restoreBootArgs'] && !(typeof data['restoreBootArgs'] === 'string' || data['restoreBootArgs'] instanceof String)) {
            throw new Error("Expected the field `restoreBootArgs` to be a primitive type in the JSON string but got " + data['restoreBootArgs']);
        }
        // ensure the json data is a string
        if (data['udid'] && !(typeof data['udid'] === 'string' || data['udid'] instanceof String)) {
            throw new Error("Expected the field `udid` to be a primitive type in the JSON string but got " + data['udid']);
        }
        // ensure the json data is a string
        if (data['ecid'] && !(typeof data['ecid'] === 'string' || data['ecid'] instanceof String)) {
            throw new Error("Expected the field `ecid` to be a primitive type in the JSON string but got " + data['ecid']);
        }
        // ensure the json data is a string
        if (data['randomSeed'] && !(typeof data['randomSeed'] === 'string' || data['randomSeed'] instanceof String)) {
            throw new Error("Expected the field `randomSeed` to be a primitive type in the JSON string but got " + data['randomSeed']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['additionalTags'])) {
            throw new Error("Expected the field `additionalTags` to be an array in the JSON data but got " + data['additionalTags']);
        }

        return true;
    }


}



/**
 * 
 * @member {String} bootArgs
 */
InstanceBootOptions.prototype['bootArgs'] = undefined;

/**
 * 
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

/**
 * 
 * @member {Array.<module:model/InstanceBootOptionsAdditionalTag>} additionalTags
 */
InstanceBootOptions.prototype['additionalTags'] = undefined;






export default InstanceBootOptions;


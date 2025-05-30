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
 * The Extension model module.
 * @module model/Extension
 * @version 0.4.1
 */
class Extension {
    /**
     * Constructs a new <code>Extension</code>.
     * 
     * @alias module:model/Extension
     */
    constructor() { 
        
        Extension.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Extension</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Extension} obj Optional instance to populate.
     * @return {module:model/Extension} The populated <code>Extension</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Extension();

            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
            }
            if (data.hasOwnProperty('imageId')) {
                obj['imageId'] = ApiClient.convertToType(data['imageId'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('flavors')) {
                obj['flavors'] = ApiClient.convertToType(data['flavors'], [Object]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Extension</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Extension</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['identifier'] && !(typeof data['identifier'] === 'string' || data['identifier'] instanceof String)) {
            throw new Error("Expected the field `identifier` to be a primitive type in the JSON string but got " + data['identifier']);
        }
        // ensure the json data is a string
        if (data['createdAt'] && !(typeof data['createdAt'] === 'string' || data['createdAt'] instanceof String)) {
            throw new Error("Expected the field `createdAt` to be a primitive type in the JSON string but got " + data['createdAt']);
        }
        // ensure the json data is a string
        if (data['updatedAt'] && !(typeof data['updatedAt'] === 'string' || data['updatedAt'] instanceof String)) {
            throw new Error("Expected the field `updatedAt` to be a primitive type in the JSON string but got " + data['updatedAt']);
        }
        // ensure the json data is a string
        if (data['imageId'] && !(typeof data['imageId'] === 'string' || data['imageId'] instanceof String)) {
            throw new Error("Expected the field `imageId` to be a primitive type in the JSON string but got " + data['imageId']);
        }
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['flavors'])) {
            throw new Error("Expected the field `flavors` to be an array in the JSON data but got " + data['flavors']);
        }

        return true;
    }


}



/**
 * Identifier
 * @member {String} identifier
 */
Extension.prototype['identifier'] = undefined;

/**
 * If true, instances requiring this extension can be created or started
 * @member {Boolean} enabled
 */
Extension.prototype['enabled'] = undefined;

/**
 * Created Date in ISO-8601 format e.g. 2022-05-06T02:39:23.000Z
 * @member {String} createdAt
 */
Extension.prototype['createdAt'] = undefined;

/**
 * Updated Date in ISO-8601 format e.g. 2022-05-06T02:39:23.000Z
 * @member {String} updatedAt
 */
Extension.prototype['updatedAt'] = undefined;

/**
 * Image Id
 * @member {String} imageId
 */
Extension.prototype['imageId'] = undefined;

/**
 * State
 * @member {String} state
 */
Extension.prototype['state'] = undefined;

/**
 * Array of Flavor definitions
 * @member {Array.<Object>} flavors
 */
Extension.prototype['flavors'] = undefined;






export default Extension;


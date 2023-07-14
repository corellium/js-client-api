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

import ApiClient from '../ApiClient';

/**
 * The InstanceNetmonState model module.
 * @module model/InstanceNetmonState
 * @version 0.3.3
 */
class InstanceNetmonState {
    /**
     * Constructs a new <code>InstanceNetmonState</code>.
     * 
     * @alias module:model/InstanceNetmonState
     */
    constructor() { 
        
        InstanceNetmonState.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InstanceNetmonState</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceNetmonState} obj Optional instance to populate.
     * @return {module:model/InstanceNetmonState} The populated <code>InstanceNetmonState</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstanceNetmonState();

            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
            if (data.hasOwnProperty('info')) {
                obj['info'] = ApiClient.convertToType(data['info'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InstanceNetmonState</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InstanceNetmonState</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['hash'] && !(typeof data['hash'] === 'string' || data['hash'] instanceof String)) {
            throw new Error("Expected the field `hash` to be a primitive type in the JSON string but got " + data['hash']);
        }
        // ensure the json data is a string
        if (data['info'] && !(typeof data['info'] === 'string' || data['info'] instanceof String)) {
            throw new Error("Expected the field `info` to be a primitive type in the JSON string but got " + data['info']);
        }

        return true;
    }


}



/**
 * 
 * @member {String} hash
 */
InstanceNetmonState.prototype['hash'] = undefined;

/**
 * 
 * @member {String} info
 */
InstanceNetmonState.prototype['info'] = undefined;

/**
 * 
 * @member {Boolean} enabled
 */
InstanceNetmonState.prototype['enabled'] = undefined;






export default InstanceNetmonState;


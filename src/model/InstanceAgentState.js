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

import ApiClient from '../ApiClient';

/**
 * The InstanceAgentState model module.
 * @module model/InstanceAgentState
 * @version 0.3.2
 */
class InstanceAgentState {
    /**
     * Constructs a new <code>InstanceAgentState</code>.
     * 
     * @alias module:model/InstanceAgentState
     */
    constructor() { 
        
        InstanceAgentState.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InstanceAgentState</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceAgentState} obj Optional instance to populate.
     * @return {module:model/InstanceAgentState} The populated <code>InstanceAgentState</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstanceAgentState();

            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
            if (data.hasOwnProperty('info')) {
                obj['info'] = ApiClient.convertToType(data['info'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InstanceAgentState</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InstanceAgentState</code>.
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
InstanceAgentState.prototype['hash'] = undefined;

/**
 * 
 * @member {String} info
 */
InstanceAgentState.prototype['info'] = undefined;






export default InstanceAgentState;


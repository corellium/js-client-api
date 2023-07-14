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
 * The AgentValueReturn model module.
 * @module model/AgentValueReturn
 * @version 0.3.3
 */
class AgentValueReturn {
    /**
     * Constructs a new <code>AgentValueReturn</code>.
     * 
     * @alias module:model/AgentValueReturn
     */
    constructor() { 
        
        AgentValueReturn.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AgentValueReturn</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AgentValueReturn} obj Optional instance to populate.
     * @return {module:model/AgentValueReturn} The populated <code>AgentValueReturn</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AgentValueReturn();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AgentValueReturn</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AgentValueReturn</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }

        return true;
    }


}



/**
 * The requested value
 * @member {String} value
 */
AgentValueReturn.prototype['value'] = undefined;






export default AgentValueReturn;


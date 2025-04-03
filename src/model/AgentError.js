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
 * The AgentError model module.
 * @module model/AgentError
 * @version 0.4.0
 */
class AgentError {
    /**
     * Constructs a new <code>AgentError</code>.
     * 
     * @alias module:model/AgentError
     * @param error {String} The error encountered by the agent
     * @param errorID {module:model/AgentError.ErrorIDEnum} AgentError
     */
    constructor(error, errorID) { 
        
        AgentError.initialize(this, error, errorID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, error, errorID) { 
        obj['error'] = error;
        obj['errorID'] = errorID;
    }

    /**
     * Constructs a <code>AgentError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AgentError} obj Optional instance to populate.
     * @return {module:model/AgentError} The populated <code>AgentError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AgentError();

            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
            if (data.hasOwnProperty('errorID')) {
                obj['errorID'] = ApiClient.convertToType(data['errorID'], 'String');
            }
            if (data.hasOwnProperty('originalError')) {
                obj['originalError'] = ApiClient.convertToType(data['originalError'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AgentError</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AgentError</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AgentError.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['error'] && !(typeof data['error'] === 'string' || data['error'] instanceof String)) {
            throw new Error("Expected the field `error` to be a primitive type in the JSON string but got " + data['error']);
        }
        // ensure the json data is a string
        if (data['errorID'] && !(typeof data['errorID'] === 'string' || data['errorID'] instanceof String)) {
            throw new Error("Expected the field `errorID` to be a primitive type in the JSON string but got " + data['errorID']);
        }

        return true;
    }


}

AgentError.RequiredProperties = ["error", "errorID"];

/**
 * The error encountered by the agent
 * @member {String} error
 */
AgentError.prototype['error'] = undefined;

/**
 * AgentError
 * @member {module:model/AgentError.ErrorIDEnum} errorID
 */
AgentError.prototype['errorID'] = undefined;

/**
 * The full error encountered by the agent
 * @member {Object} originalError
 */
AgentError.prototype['originalError'] = undefined;





/**
 * Allowed values for the <code>errorID</code> property.
 * @enum {String}
 * @readonly
 */
AgentError['ErrorIDEnum'] = {

    /**
     * value: "AgentError"
     * @const
     */
    "AgentError": "AgentError"
};



export default AgentError;


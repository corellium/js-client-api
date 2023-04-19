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
 * The ApiConflictError model module.
 * @module model/ApiConflictError
 * @version 0.3.2
 */
class ApiConflictError {
    /**
     * Constructs a new <code>ApiConflictError</code>.
     * 
     * @alias module:model/ApiConflictError
     * @param error {String} Error text
     * @param errorID {module:model/ApiConflictError.ErrorIDEnum} Error ID
     */
    constructor(error, errorID) { 
        
        ApiConflictError.initialize(this, error, errorID);
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
     * Constructs a <code>ApiConflictError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiConflictError} obj Optional instance to populate.
     * @return {module:model/ApiConflictError} The populated <code>ApiConflictError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiConflictError();

            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
            if (data.hasOwnProperty('errorID')) {
                obj['errorID'] = ApiClient.convertToType(data['errorID'], 'String');
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApiConflictError</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApiConflictError</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ApiConflictError.RequiredProperties) {
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

ApiConflictError.RequiredProperties = ["error", "errorID"];

/**
 * Error text
 * @member {String} error
 */
ApiConflictError.prototype['error'] = undefined;

/**
 * Error ID
 * @member {module:model/ApiConflictError.ErrorIDEnum} errorID
 */
ApiConflictError.prototype['errorID'] = undefined;

/**
 * Object that is conflicted with
 * @member {Object} object
 */
ApiConflictError.prototype['object'] = undefined;





/**
 * Allowed values for the <code>errorID</code> property.
 * @enum {String}
 * @readonly
 */
ApiConflictError['ErrorIDEnum'] = {

    /**
     * value: "Conflict"
     * @const
     */
    "Conflict": "Conflict"
};



export default ApiConflictError;


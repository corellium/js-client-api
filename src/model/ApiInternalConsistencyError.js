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
 * The ApiInternalConsistencyError model module.
 * @module model/ApiInternalConsistencyError
 * @version 0.3.3
 */
class ApiInternalConsistencyError {
    /**
     * Constructs a new <code>ApiInternalConsistencyError</code>.
     * 
     * @alias module:model/ApiInternalConsistencyError
     * @param error {String} Error text
     * @param errorID {String} Error ID
     */
    constructor(error, errorID) { 
        
        ApiInternalConsistencyError.initialize(this, error, errorID);
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
     * Constructs a <code>ApiInternalConsistencyError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiInternalConsistencyError} obj Optional instance to populate.
     * @return {module:model/ApiInternalConsistencyError} The populated <code>ApiInternalConsistencyError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiInternalConsistencyError();

            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
            if (data.hasOwnProperty('errorID')) {
                obj['errorID'] = ApiClient.convertToType(data['errorID'], 'String');
            }
            if (data.hasOwnProperty('originalError')) {
                obj['originalError'] = ApiClient.convertToType(data['originalError'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApiInternalConsistencyError</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApiInternalConsistencyError</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ApiInternalConsistencyError.RequiredProperties) {
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
        // ensure the json data is a string
        if (data['originalError'] && !(typeof data['originalError'] === 'string' || data['originalError'] instanceof String)) {
            throw new Error("Expected the field `originalError` to be a primitive type in the JSON string but got " + data['originalError']);
        }

        return true;
    }


}

ApiInternalConsistencyError.RequiredProperties = ["error", "errorID"];

/**
 * Error text
 * @member {String} error
 */
ApiInternalConsistencyError.prototype['error'] = undefined;

/**
 * Error ID
 * @member {String} errorID
 */
ApiInternalConsistencyError.prototype['errorID'] = undefined;

/**
 * Upstream error description
 * @member {String} originalError
 */
ApiInternalConsistencyError.prototype['originalError'] = undefined;






export default ApiInternalConsistencyError;


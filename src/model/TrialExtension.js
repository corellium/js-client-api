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
 * The TrialExtension model module.
 * @module model/TrialExtension
 * @version 0.3.2
 */
class TrialExtension {
    /**
     * Constructs a new <code>TrialExtension</code>.
     * 
     * @alias module:model/TrialExtension
     */
    constructor() { 
        
        TrialExtension.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TrialExtension</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TrialExtension} obj Optional instance to populate.
     * @return {module:model/TrialExtension} The populated <code>TrialExtension</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TrialExtension();

            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('denied')) {
                obj['denied'] = ApiClient.convertToType(data['denied'], 'Boolean');
            }
            if (data.hasOwnProperty('deniedReason')) {
                obj['deniedReason'] = ApiClient.convertToType(data['deniedReason'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TrialExtension</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TrialExtension</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['reason'] && !(typeof data['reason'] === 'string' || data['reason'] instanceof String)) {
            throw new Error("Expected the field `reason` to be a primitive type in the JSON string but got " + data['reason']);
        }
        // ensure the json data is a string
        if (data['deniedReason'] && !(typeof data['deniedReason'] === 'string' || data['deniedReason'] instanceof String)) {
            throw new Error("Expected the field `deniedReason` to be a primitive type in the JSON string but got " + data['deniedReason']);
        }

        return true;
    }


}



/**
 * how many additional days?
 * @member {Number} duration
 */
TrialExtension.prototype['duration'] = undefined;

/**
 * why does the user want more time?
 * @member {String} reason
 */
TrialExtension.prototype['reason'] = undefined;

/**
 * 
 * @member {Boolean} denied
 */
TrialExtension.prototype['denied'] = undefined;

/**
 * explanation for why the request was denied
 * @member {String} deniedReason
 */
TrialExtension.prototype['deniedReason'] = undefined;






export default TrialExtension;


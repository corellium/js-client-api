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
 * The Plan model module.
 * @module model/Plan
 * @version 0.3.2
 */
class Plan {
    /**
     * Constructs a new <code>Plan</code>.
     * 
     * @alias module:model/Plan
     */
    constructor() { 
        
        Plan.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Plan</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Plan} obj Optional instance to populate.
     * @return {module:model/Plan} The populated <code>Plan</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Plan();

            if (data.hasOwnProperty('planId')) {
                obj['planId'] = ApiClient.convertToType(data['planId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Plan</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Plan</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['planId'] && !(typeof data['planId'] === 'string' || data['planId'] instanceof String)) {
            throw new Error("Expected the field `planId` to be a primitive type in the JSON string but got " + data['planId']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * Plan ID
 * @member {String} planId
 */
Plan.prototype['planId'] = undefined;

/**
 * Plan Name
 * @member {String} name
 */
Plan.prototype['name'] = undefined;






export default Plan;


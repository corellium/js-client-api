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
 * The Trial model module.
 * @module model/Trial
 * @version 0.3.3
 */
class Trial {
    /**
     * Constructs a new <code>Trial</code>.
     * Trial options
     * @alias module:model/Trial
     * @param duration {Number} Duration in days
     */
    constructor(duration) { 
        
        Trial.initialize(this, duration);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, duration) { 
        obj['duration'] = duration;
    }

    /**
     * Constructs a <code>Trial</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Trial} obj Optional instance to populate.
     * @return {module:model/Trial} The populated <code>Trial</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Trial();

            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Trial</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Trial</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Trial.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

Trial.RequiredProperties = ["duration"];

/**
 * Duration in days
 * @member {Number} duration
 */
Trial.prototype['duration'] = undefined;






export default Trial;


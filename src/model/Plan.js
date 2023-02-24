/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * The version of the OpenAPI document: 4.2.0-6a4b86f
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
 * @version 0.2.0
 */
class Plan {
    /**
     * Constructs a new <code>Plan</code>.
     * Plan options
     * @alias module:model/Plan
     * @param licenseType {module:model/Plan.LicenseTypeEnum} 
     * @param cores {Number} Number of CPU cores
     */
    constructor(licenseType, cores) { 
        
        Plan.initialize(this, licenseType, cores);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, licenseType, cores) { 
        obj['licenseType'] = licenseType;
        obj['cores'] = cores;
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

            if (data.hasOwnProperty('licenseType')) {
                obj['licenseType'] = ApiClient.convertToType(data['licenseType'], 'String');
            }
            if (data.hasOwnProperty('cores')) {
                obj['cores'] = ApiClient.convertToType(data['cores'], 'Number');
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
        // check to make sure all required properties are present in the JSON string
        for (const property of Plan.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['licenseType'] && !(typeof data['licenseType'] === 'string' || data['licenseType'] instanceof String)) {
            throw new Error("Expected the field `licenseType` to be a primitive type in the JSON string but got " + data['licenseType']);
        }

        return true;
    }


}

Plan.RequiredProperties = ["licenseType", "cores"];

/**
 * 
 * @member {module:model/Plan.LicenseTypeEnum} licenseType
 */
Plan.prototype['licenseType'] = undefined;

/**
 * Number of CPU cores
 * @member {Number} cores
 */
Plan.prototype['cores'] = undefined;





/**
 * Allowed values for the <code>licenseType</code> property.
 * @enum {String}
 * @readonly
 */
Plan['LicenseTypeEnum'] = {

    /**
     * value: "premium"
     * @const
     */
    "premium": "premium",

    /**
     * value: "individual"
     * @const
     */
    "individual": "individual",

    /**
     * value: "standard"
     * @const
     */
    "standard": "standard",

    /**
     * value: "enterprise"
     * @const
     */
    "enterprise": "enterprise",

    /**
     * value: "individual-usage"
     * @const
     */
    "individual-usage": "individual-usage",

    /**
     * value: "enterprise-usage"
     * @const
     */
    "enterprise-usage": "enterprise-usage",

    /**
     * value: "unrestricted"
     * @const
     */
    "unrestricted": "unrestricted"
};



export default Plan;


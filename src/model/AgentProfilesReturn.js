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
 * The AgentProfilesReturn model module.
 * @module model/AgentProfilesReturn
 * @version 0.4.1
 */
class AgentProfilesReturn {
    /**
     * Constructs a new <code>AgentProfilesReturn</code>.
     * 
     * @alias module:model/AgentProfilesReturn
     * @param profiles {Array.<String>} 
     */
    constructor(profiles) { 
        
        AgentProfilesReturn.initialize(this, profiles);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, profiles) { 
        obj['profiles'] = profiles;
    }

    /**
     * Constructs a <code>AgentProfilesReturn</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AgentProfilesReturn} obj Optional instance to populate.
     * @return {module:model/AgentProfilesReturn} The populated <code>AgentProfilesReturn</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AgentProfilesReturn();

            if (data.hasOwnProperty('profiles')) {
                obj['profiles'] = ApiClient.convertToType(data['profiles'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AgentProfilesReturn</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AgentProfilesReturn</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AgentProfilesReturn.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['profiles'])) {
            throw new Error("Expected the field `profiles` to be an array in the JSON data but got " + data['profiles']);
        }

        return true;
    }


}

AgentProfilesReturn.RequiredProperties = ["profiles"];

/**
 * 
 * @member {Array.<String>} profiles
 */
AgentProfilesReturn.prototype['profiles'] = undefined;






export default AgentProfilesReturn;


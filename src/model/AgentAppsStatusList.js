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
import AgentAppStatus from './AgentAppStatus';

/**
 * The AgentAppsStatusList model module.
 * @module model/AgentAppsStatusList
 * @version 0.3.3
 */
class AgentAppsStatusList {
    /**
     * Constructs a new <code>AgentAppsStatusList</code>.
     * 
     * @alias module:model/AgentAppsStatusList
     */
    constructor() { 
        
        AgentAppsStatusList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AgentAppsStatusList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AgentAppsStatusList} obj Optional instance to populate.
     * @return {module:model/AgentAppsStatusList} The populated <code>AgentAppsStatusList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AgentAppsStatusList();

            if (data.hasOwnProperty('apps')) {
                obj['apps'] = ApiClient.convertToType(data['apps'], [AgentAppStatus]);
            }
            if (data.hasOwnProperty('frontmost')) {
                obj['frontmost'] = ApiClient.convertToType(data['frontmost'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AgentAppsStatusList</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AgentAppsStatusList</code>.
     */
    static validateJSON(data) {
        if (data['apps']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['apps'])) {
                throw new Error("Expected the field `apps` to be an array in the JSON data but got " + data['apps']);
            }
            // validate the optional field `apps` (array)
            for (const item of data['apps']) {
                AgentAppStatus.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['frontmost'] && !(typeof data['frontmost'] === 'string' || data['frontmost'] instanceof String)) {
            throw new Error("Expected the field `frontmost` to be a primitive type in the JSON string but got " + data['frontmost']);
        }

        return true;
    }


}



/**
 * 
 * @member {Array.<module:model/AgentAppStatus>} apps
 */
AgentAppsStatusList.prototype['apps'] = undefined;

/**
 * bundleID of frontmost app or empty string if none are frontmost
 * @member {String} frontmost
 */
AgentAppsStatusList.prototype['frontmost'] = undefined;






export default AgentAppsStatusList;


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
 * The AgentApp model module.
 * @module model/AgentApp
 * @version 0.3.3
 */
class AgentApp {
    /**
     * Constructs a new <code>AgentApp</code>.
     * 
     * @alias module:model/AgentApp
     */
    constructor() { 
        
        AgentApp.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AgentApp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AgentApp} obj Optional instance to populate.
     * @return {module:model/AgentApp} The populated <code>AgentApp</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AgentApp();

            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('running')) {
                obj['running'] = ApiClient.convertToType(data['running'], 'Boolean');
            }
            if (data.hasOwnProperty('diskUsage')) {
                obj['diskUsage'] = ApiClient.convertToType(data['diskUsage'], 'Number');
            }
            if (data.hasOwnProperty('Date')) {
                obj['Date'] = ApiClient.convertToType(data['Date'], 'Number');
            }
            if (data.hasOwnProperty('applicationType')) {
                obj['applicationType'] = ApiClient.convertToType(data['applicationType'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('bundleID')) {
                obj['bundleID'] = ApiClient.convertToType(data['bundleID'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AgentApp</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AgentApp</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }
        // ensure the json data is a string
        if (data['applicationType'] && !(typeof data['applicationType'] === 'string' || data['applicationType'] instanceof String)) {
            throw new Error("Expected the field `applicationType` to be a primitive type in the JSON string but got " + data['applicationType']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['bundleID'] && !(typeof data['bundleID'] === 'string' || data['bundleID'] instanceof String)) {
            throw new Error("Expected the field `bundleID` to be a primitive type in the JSON string but got " + data['bundleID']);
        }

        return true;
    }


}



/**
 * 
 * @member {Array.<String>} tags
 */
AgentApp.prototype['tags'] = undefined;

/**
 * 
 * @member {Boolean} running
 */
AgentApp.prototype['running'] = undefined;

/**
 * 
 * @member {Number} diskUsage
 */
AgentApp.prototype['diskUsage'] = undefined;

/**
 * 
 * @member {Number} Date
 */
AgentApp.prototype['Date'] = undefined;

/**
 * 
 * @member {String} applicationType
 */
AgentApp.prototype['applicationType'] = undefined;

/**
 * 
 * @member {String} name
 */
AgentApp.prototype['name'] = undefined;

/**
 * 
 * @member {String} bundleID
 */
AgentApp.prototype['bundleID'] = undefined;






export default AgentApp;


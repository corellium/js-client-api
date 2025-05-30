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
 * The AgentAppStatus model module.
 * @module model/AgentAppStatus
 * @version 0.4.1
 */
class AgentAppStatus {
    /**
     * Constructs a new <code>AgentAppStatus</code>.
     * 
     * @alias module:model/AgentAppStatus
     */
    constructor() { 
        
        AgentAppStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AgentAppStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AgentAppStatus} obj Optional instance to populate.
     * @return {module:model/AgentAppStatus} The populated <code>AgentAppStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AgentAppStatus();

            if (data.hasOwnProperty('running')) {
                obj['running'] = ApiClient.convertToType(data['running'], 'Boolean');
            }
            if (data.hasOwnProperty('bundleID')) {
                obj['bundleID'] = ApiClient.convertToType(data['bundleID'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AgentAppStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AgentAppStatus</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['bundleID'] && !(typeof data['bundleID'] === 'string' || data['bundleID'] instanceof String)) {
            throw new Error("Expected the field `bundleID` to be a primitive type in the JSON string but got " + data['bundleID']);
        }

        return true;
    }


}



/**
 * 
 * @member {Boolean} running
 */
AgentAppStatus.prototype['running'] = undefined;

/**
 * 
 * @member {String} bundleID
 */
AgentAppStatus.prototype['bundleID'] = undefined;






export default AgentAppStatus;


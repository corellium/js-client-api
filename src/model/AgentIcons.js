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
 * The AgentIcons model module.
 * @module model/AgentIcons
 * @version 0.4.1
 */
class AgentIcons {
    /**
     * Constructs a new <code>AgentIcons</code>.
     * 
     * @alias module:model/AgentIcons
     */
    constructor() { 
        
        AgentIcons.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AgentIcons</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AgentIcons} obj Optional instance to populate.
     * @return {module:model/AgentIcons} The populated <code>AgentIcons</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AgentIcons();

            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'Blob');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AgentIcons</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AgentIcons</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * The data for an icon
 * @member {Blob} icon
 */
AgentIcons.prototype['icon'] = undefined;






export default AgentIcons;


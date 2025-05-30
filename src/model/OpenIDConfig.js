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
 * The OpenIDConfig model module.
 * @module model/OpenIDConfig
 * @version 0.4.1
 */
class OpenIDConfig {
    /**
     * Constructs a new <code>OpenIDConfig</code>.
     * 
     * @alias module:model/OpenIDConfig
     */
    constructor() { 
        
        OpenIDConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OpenIDConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OpenIDConfig} obj Optional instance to populate.
     * @return {module:model/OpenIDConfig} The populated <code>OpenIDConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OpenIDConfig();

            if (data.hasOwnProperty('discoveryUrl')) {
                obj['discoveryUrl'] = ApiClient.convertToType(data['discoveryUrl'], 'String');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'String');
            }
            if (data.hasOwnProperty('clientSecret')) {
                obj['clientSecret'] = ApiClient.convertToType(data['clientSecret'], 'String');
            }
            if (data.hasOwnProperty('invitedOnly')) {
                obj['invitedOnly'] = ApiClient.convertToType(data['invitedOnly'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OpenIDConfig</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OpenIDConfig</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['discoveryUrl'] && !(typeof data['discoveryUrl'] === 'string' || data['discoveryUrl'] instanceof String)) {
            throw new Error("Expected the field `discoveryUrl` to be a primitive type in the JSON string but got " + data['discoveryUrl']);
        }
        // ensure the json data is a string
        if (data['clientId'] && !(typeof data['clientId'] === 'string' || data['clientId'] instanceof String)) {
            throw new Error("Expected the field `clientId` to be a primitive type in the JSON string but got " + data['clientId']);
        }
        // ensure the json data is a string
        if (data['clientSecret'] && !(typeof data['clientSecret'] === 'string' || data['clientSecret'] instanceof String)) {
            throw new Error("Expected the field `clientSecret` to be a primitive type in the JSON string but got " + data['clientSecret']);
        }

        return true;
    }


}



/**
 * Service Discovery URL
 * @member {String} discoveryUrl
 */
OpenIDConfig.prototype['discoveryUrl'] = undefined;

/**
 * Service Client ID
 * @member {String} clientId
 */
OpenIDConfig.prototype['clientId'] = undefined;

/**
 * Service Client Secret
 * @member {String} clientSecret
 */
OpenIDConfig.prototype['clientSecret'] = undefined;

/**
 * Only accept individuals with invitations
 * @member {Boolean} invitedOnly
 */
OpenIDConfig.prototype['invitedOnly'] = undefined;






export default OpenIDConfig;


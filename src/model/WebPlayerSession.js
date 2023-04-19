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
 * The WebPlayerSession model module.
 * @module model/WebPlayerSession
 * @version 0.3.2
 */
class WebPlayerSession {
    /**
     * Constructs a new <code>WebPlayerSession</code>.
     * 
     * @alias module:model/WebPlayerSession
     * @param identifier {String} New Session Identifier
     * @param token {String} Session Token
     * @param expiration {Number} Expiration in ISO-8601 format e.g. 2022-05-06T02:39:23.000Z
     */
    constructor(identifier, token, expiration) { 
        
        WebPlayerSession.initialize(this, identifier, token, expiration);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, identifier, token, expiration) { 
        obj['identifier'] = identifier;
        obj['token'] = token;
        obj['expiration'] = expiration;
    }

    /**
     * Constructs a <code>WebPlayerSession</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebPlayerSession} obj Optional instance to populate.
     * @return {module:model/WebPlayerSession} The populated <code>WebPlayerSession</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebPlayerSession();

            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('expiration')) {
                obj['expiration'] = ApiClient.convertToType(data['expiration'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebPlayerSession</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebPlayerSession</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebPlayerSession.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['identifier'] && !(typeof data['identifier'] === 'string' || data['identifier'] instanceof String)) {
            throw new Error("Expected the field `identifier` to be a primitive type in the JSON string but got " + data['identifier']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }

        return true;
    }


}

WebPlayerSession.RequiredProperties = ["identifier", "token", "expiration"];

/**
 * New Session Identifier
 * @member {String} identifier
 */
WebPlayerSession.prototype['identifier'] = undefined;

/**
 * Session Token
 * @member {String} token
 */
WebPlayerSession.prototype['token'] = undefined;

/**
 * Expiration in ISO-8601 format e.g. 2022-05-06T02:39:23.000Z
 * @member {Number} expiration
 */
WebPlayerSession.prototype['expiration'] = undefined;






export default WebPlayerSession;


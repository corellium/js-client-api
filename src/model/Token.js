/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * The version of the OpenAPI document: 3.10.0-13354
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Token model module.
 * @module model/Token
 * @version 0.1.0
 */
class Token {
    /**
     * Constructs a new <code>Token</code>.
     * @alias module:model/Token
     * @param token {String} 
     */
    constructor(token) { 
        
        Token.initialize(this, token);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, token) { 
        obj['token'] = token;
    }

    /**
     * Constructs a <code>Token</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Token} obj Optional instance to populate.
     * @return {module:model/Token} The populated <code>Token</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Token();

            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('expiration')) {
                obj['expiration'] = ApiClient.convertToType(data['expiration'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} token
 */
Token.prototype['token'] = undefined;

/**
 * Token expiration
 * @member {Date} expiration
 */
Token.prototype['expiration'] = undefined;






export default Token;


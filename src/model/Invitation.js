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
 * The Invitation model module.
 * @module model/Invitation
 * @version 0.4.1
 */
class Invitation {
    /**
     * Constructs a new <code>Invitation</code>.
     * 
     * @alias module:model/Invitation
     */
    constructor() { 
        
        Invitation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Invitation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Invitation} obj Optional instance to populate.
     * @return {module:model/Invitation} The populated <code>Invitation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Invitation();

            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('settings')) {
                obj['settings'] = ApiClient.convertToType(data['settings'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Invitation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Invitation</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['identifier'] && !(typeof data['identifier'] === 'string' || data['identifier'] instanceof String)) {
            throw new Error("Expected the field `identifier` to be a primitive type in the JSON string but got " + data['identifier']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }

        return true;
    }


}



/**
 * Invite ID
 * @member {String} identifier
 */
Invitation.prototype['identifier'] = undefined;

/**
 * Invited email
 * @member {String} email
 */
Invitation.prototype['email'] = undefined;

/**
 * 
 * @member {Object} settings
 */
Invitation.prototype['settings'] = undefined;






export default Invitation;


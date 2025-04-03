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
 * The PasswordChangeBody model module.
 * @module model/PasswordChangeBody
 * @version 0.4.0
 */
class PasswordChangeBody {
    /**
     * Constructs a new <code>PasswordChangeBody</code>.
     * 
     * @alias module:model/PasswordChangeBody
     * @param user {String} userId
     * @param oldPassword {String} old password
     * @param newPassword {String} new password
     */
    constructor(user, oldPassword, newPassword) { 
        
        PasswordChangeBody.initialize(this, user, oldPassword, newPassword);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, user, oldPassword, newPassword) { 
        obj['user'] = user;
        obj['old-password'] = oldPassword;
        obj['new-password'] = newPassword;
    }

    /**
     * Constructs a <code>PasswordChangeBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PasswordChangeBody} obj Optional instance to populate.
     * @return {module:model/PasswordChangeBody} The populated <code>PasswordChangeBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PasswordChangeBody();

            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
            if (data.hasOwnProperty('old-password')) {
                obj['old-password'] = ApiClient.convertToType(data['old-password'], 'String');
            }
            if (data.hasOwnProperty('new-password')) {
                obj['new-password'] = ApiClient.convertToType(data['new-password'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PasswordChangeBody</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PasswordChangeBody</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PasswordChangeBody.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['user'] && !(typeof data['user'] === 'string' || data['user'] instanceof String)) {
            throw new Error("Expected the field `user` to be a primitive type in the JSON string but got " + data['user']);
        }
        // ensure the json data is a string
        if (data['old-password'] && !(typeof data['old-password'] === 'string' || data['old-password'] instanceof String)) {
            throw new Error("Expected the field `old-password` to be a primitive type in the JSON string but got " + data['old-password']);
        }
        // ensure the json data is a string
        if (data['new-password'] && !(typeof data['new-password'] === 'string' || data['new-password'] instanceof String)) {
            throw new Error("Expected the field `new-password` to be a primitive type in the JSON string but got " + data['new-password']);
        }

        return true;
    }


}

PasswordChangeBody.RequiredProperties = ["user", "old-password", "new-password"];

/**
 * userId
 * @member {String} user
 */
PasswordChangeBody.prototype['user'] = undefined;

/**
 * old password
 * @member {String} old-password
 */
PasswordChangeBody.prototype['old-password'] = undefined;

/**
 * new password
 * @member {String} new-password
 */
PasswordChangeBody.prototype['new-password'] = undefined;






export default PasswordChangeBody;


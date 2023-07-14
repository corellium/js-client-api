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
 * The ResetLinkBody model module.
 * @module model/ResetLinkBody
 * @version 0.3.3
 */
class ResetLinkBody {
    /**
     * Constructs a new <code>ResetLinkBody</code>.
     * 
     * @alias module:model/ResetLinkBody
     * @param email {String} Email address to request password reset link for
     */
    constructor(email) { 
        
        ResetLinkBody.initialize(this, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email) { 
        obj['email'] = email;
    }

    /**
     * Constructs a <code>ResetLinkBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResetLinkBody} obj Optional instance to populate.
     * @return {module:model/ResetLinkBody} The populated <code>ResetLinkBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResetLinkBody();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ResetLinkBody</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ResetLinkBody</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ResetLinkBody.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }

        return true;
    }


}

ResetLinkBody.RequiredProperties = ["email"];

/**
 * Email address to request password reset link for
 * @member {String} email
 */
ResetLinkBody.prototype['email'] = undefined;






export default ResetLinkBody;


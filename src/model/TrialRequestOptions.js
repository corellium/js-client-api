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
import Address from './Address';
import TrialRequestMetadata from './TrialRequestMetadata';

/**
 * The TrialRequestOptions model module.
 * @module model/TrialRequestOptions
 * @version 0.4.1
 */
class TrialRequestOptions {
    /**
     * Constructs a new <code>TrialRequestOptions</code>.
     * 
     * @alias module:model/TrialRequestOptions
     */
    constructor() { 
        
        TrialRequestOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TrialRequestOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TrialRequestOptions} obj Optional instance to populate.
     * @return {module:model/TrialRequestOptions} The populated <code>TrialRequestOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TrialRequestOptions();

            if (data.hasOwnProperty('address')) {
                obj['address'] = Address.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = TrialRequestMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('enterprise')) {
                obj['enterprise'] = ApiClient.convertToType(data['enterprise'], 'Boolean');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TrialRequestOptions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TrialRequestOptions</code>.
     */
    static validateJSON(data) {
        // validate the optional field `address`
        if (data['address']) { // data not null
          Address.validateJSON(data['address']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `metadata`
        if (data['metadata']) { // data not null
          TrialRequestMetadata.validateJSON(data['metadata']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }

        return true;
    }


}



/**
 * @member {module:model/Address} address
 */
TrialRequestOptions.prototype['address'] = undefined;

/**
 * The user's email address.
 * @member {String} email
 */
TrialRequestOptions.prototype['email'] = undefined;

/**
 * The user's full name.
 * @member {String} name
 */
TrialRequestOptions.prototype['name'] = undefined;

/**
 * @member {module:model/TrialRequestMetadata} metadata
 */
TrialRequestOptions.prototype['metadata'] = undefined;

/**
 * If true, create an enterprise domain.
 * @member {Boolean} enterprise
 */
TrialRequestOptions.prototype['enterprise'] = undefined;

/**
 * Stripe payment token.
 * @member {String} token
 */
TrialRequestOptions.prototype['token'] = undefined;






export default TrialRequestOptions;


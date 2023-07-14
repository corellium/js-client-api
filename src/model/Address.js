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
 * The Address model module.
 * @module model/Address
 * @version 0.3.3
 */
class Address {
    /**
     * Constructs a new <code>Address</code>.
     * The user&#39;s address
     * @alias module:model/Address
     */
    constructor() { 
        
        Address.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Address} obj Optional instance to populate.
     * @return {module:model/Address} The populated <code>Address</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Address();

            if (data.hasOwnProperty('address1')) {
                obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
            }
            if (data.hasOwnProperty('address2')) {
                obj['address2'] = ApiClient.convertToType(data['address2'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('postal_code')) {
                obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Address</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Address</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['address1'] && !(typeof data['address1'] === 'string' || data['address1'] instanceof String)) {
            throw new Error("Expected the field `address1` to be a primitive type in the JSON string but got " + data['address1']);
        }
        // ensure the json data is a string
        if (data['address2'] && !(typeof data['address2'] === 'string' || data['address2'] instanceof String)) {
            throw new Error("Expected the field `address2` to be a primitive type in the JSON string but got " + data['address2']);
        }
        // ensure the json data is a string
        if (data['city'] && !(typeof data['city'] === 'string' || data['city'] instanceof String)) {
            throw new Error("Expected the field `city` to be a primitive type in the JSON string but got " + data['city']);
        }
        // ensure the json data is a string
        if (data['country'] && !(typeof data['country'] === 'string' || data['country'] instanceof String)) {
            throw new Error("Expected the field `country` to be a primitive type in the JSON string but got " + data['country']);
        }
        // ensure the json data is a string
        if (data['postal_code'] && !(typeof data['postal_code'] === 'string' || data['postal_code'] instanceof String)) {
            throw new Error("Expected the field `postal_code` to be a primitive type in the JSON string but got " + data['postal_code']);
        }
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }

        return true;
    }


}



/**
 * Address line 1 (e.g., street, PO Box, or company name).
 * @member {String} address1
 */
Address.prototype['address1'] = undefined;

/**
 * Address line 2 (e.g., apartment, suite, unit, or building).
 * @member {String} address2
 */
Address.prototype['address2'] = undefined;

/**
 * City, district, suburb, town, or village.
 * @member {String} city
 */
Address.prototype['city'] = undefined;

/**
 * Two-letter country code (ISO 3166-1 alpha-2).
 * @member {String} country
 */
Address.prototype['country'] = undefined;

/**
 * ZIP or postal code.
 * @member {String} postal_code
 */
Address.prototype['postal_code'] = undefined;

/**
 * State, county, province, or region.
 * @member {String} state
 */
Address.prototype['state'] = undefined;






export default Address;


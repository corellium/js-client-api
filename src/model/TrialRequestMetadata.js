/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * The version of the OpenAPI document: 4.2.0-6a4b86f
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The TrialRequestMetadata model module.
 * @module model/TrialRequestMetadata
 * @version 0.2.0
 */
class TrialRequestMetadata {
    /**
     * Constructs a new <code>TrialRequestMetadata</code>.
     * 
     * @alias module:model/TrialRequestMetadata
     */
    constructor() { 
        
        TrialRequestMetadata.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TrialRequestMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TrialRequestMetadata} obj Optional instance to populate.
     * @return {module:model/TrialRequestMetadata} The populated <code>TrialRequestMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TrialRequestMetadata();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = ApiClient.convertToType(data['company'], 'String');
            }
            if (data.hasOwnProperty('malware')) {
                obj['malware'] = ApiClient.convertToType(data['malware'], 'Boolean');
            }
            if (data.hasOwnProperty('research')) {
                obj['research'] = ApiClient.convertToType(data['research'], 'Boolean');
            }
            if (data.hasOwnProperty('pentest')) {
                obj['pentest'] = ApiClient.convertToType(data['pentest'], 'Boolean');
            }
            if (data.hasOwnProperty('other')) {
                obj['other'] = ApiClient.convertToType(data['other'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TrialRequestMetadata</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TrialRequestMetadata</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['company'] && !(typeof data['company'] === 'string' || data['company'] instanceof String)) {
            throw new Error("Expected the field `company` to be a primitive type in the JSON string but got " + data['company']);
        }
        // ensure the json data is a string
        if (data['other'] && !(typeof data['other'] === 'string' || data['other'] instanceof String)) {
            throw new Error("Expected the field `other` to be a primitive type in the JSON string but got " + data['other']);
        }

        return true;
    }


}



/**
 * 
 * @member {String} name
 */
TrialRequestMetadata.prototype['name'] = undefined;

/**
 * provided company name
 * @member {String} company
 */
TrialRequestMetadata.prototype['company'] = undefined;

/**
 * option from sign up form, interesting using for malware
 * @member {Boolean} malware
 */
TrialRequestMetadata.prototype['malware'] = undefined;

/**
 * option from sign up form, interesting using for research
 * @member {Boolean} research
 */
TrialRequestMetadata.prototype['research'] = undefined;

/**
 * option from sign up form, interesting using for pentesting
 * @member {Boolean} pentest
 */
TrialRequestMetadata.prototype['pentest'] = undefined;

/**
 * option from sign up form, interesting using for other area added here
 * @member {String} other
 */
TrialRequestMetadata.prototype['other'] = undefined;






export default TrialRequestMetadata;


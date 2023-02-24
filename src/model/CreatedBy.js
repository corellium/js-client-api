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
 * The CreatedBy model module.
 * @module model/CreatedBy
 * @version 0.2.0
 */
class CreatedBy {
    /**
     * Constructs a new <code>CreatedBy</code>.
     * 
     * @alias module:model/CreatedBy
     */
    constructor() { 
        
        CreatedBy.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreatedBy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatedBy} obj Optional instance to populate.
     * @return {module:model/CreatedBy} The populated <code>CreatedBy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreatedBy();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('deleted')) {
                obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreatedBy</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreatedBy</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['username'] && !(typeof data['username'] === 'string' || data['username'] instanceof String)) {
            throw new Error("Expected the field `username` to be a primitive type in the JSON string but got " + data['username']);
        }
        // ensure the json data is a string
        if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
            throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
        }

        return true;
    }


}



/**
 * User Identifier
 * @member {String} id
 */
CreatedBy.prototype['id'] = undefined;

/**
 * Username
 * @member {String} username
 */
CreatedBy.prototype['username'] = undefined;

/**
 * User Label
 * @member {String} label
 */
CreatedBy.prototype['label'] = undefined;

/**
 * Indicates if user was deleted
 * @member {Boolean} deleted
 */
CreatedBy.prototype['deleted'] = undefined;






export default CreatedBy;


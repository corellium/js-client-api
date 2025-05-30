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
 * The UpdateNetworkConnectionOptions model module.
 * @module model/UpdateNetworkConnectionOptions
 * @version 0.4.1
 */
class UpdateNetworkConnectionOptions {
    /**
     * Constructs a new <code>UpdateNetworkConnectionOptions</code>.
     * 
     * @alias module:model/UpdateNetworkConnectionOptions
     * @param name {String} User specified name for this network connection. e.g. My Network Connection
     */
    constructor(name) { 
        
        UpdateNetworkConnectionOptions.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>UpdateNetworkConnectionOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateNetworkConnectionOptions} obj Optional instance to populate.
     * @return {module:model/UpdateNetworkConnectionOptions} The populated <code>UpdateNetworkConnectionOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateNetworkConnectionOptions();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('config')) {
                obj['config'] = ApiClient.convertToType(data['config'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateNetworkConnectionOptions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateNetworkConnectionOptions</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateNetworkConnectionOptions.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

UpdateNetworkConnectionOptions.RequiredProperties = ["name"];

/**
 * User specified name for this network connection. e.g. My Network Connection
 * @member {String} name
 */
UpdateNetworkConnectionOptions.prototype['name'] = undefined;

/**
 * An object containing network connection configuration data. Will vary based on network provider type. See examples.
 * @member {Object} config
 */
UpdateNetworkConnectionOptions.prototype['config'] = undefined;






export default UpdateNetworkConnectionOptions;


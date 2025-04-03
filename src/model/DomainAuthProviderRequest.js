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
import OpenIDConfig from './OpenIDConfig';

/**
 * The DomainAuthProviderRequest model module.
 * @module model/DomainAuthProviderRequest
 * @version 0.4.0
 */
class DomainAuthProviderRequest {
    /**
     * Constructs a new <code>DomainAuthProviderRequest</code>.
     * 
     * @alias module:model/DomainAuthProviderRequest
     * @param providerType {String} Provider Type
     * @param enabled {Boolean} Enabled/Disabled
     */
    constructor(providerType, enabled) { 
        
        DomainAuthProviderRequest.initialize(this, providerType, enabled);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, providerType, enabled) { 
        obj['providerType'] = providerType;
        obj['enabled'] = enabled;
    }

    /**
     * Constructs a <code>DomainAuthProviderRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DomainAuthProviderRequest} obj Optional instance to populate.
     * @return {module:model/DomainAuthProviderRequest} The populated <code>DomainAuthProviderRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DomainAuthProviderRequest();

            if (data.hasOwnProperty('providerType')) {
                obj['providerType'] = ApiClient.convertToType(data['providerType'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('config')) {
                obj['config'] = OpenIDConfig.constructFromObject(data['config']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DomainAuthProviderRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DomainAuthProviderRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DomainAuthProviderRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['providerType'] && !(typeof data['providerType'] === 'string' || data['providerType'] instanceof String)) {
            throw new Error("Expected the field `providerType` to be a primitive type in the JSON string but got " + data['providerType']);
        }
        // ensure the json data is a string
        if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
            throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
        }
        // validate the optional field `config`
        if (data['config']) { // data not null
          OpenIDConfig.validateJSON(data['config']);
        }

        return true;
    }


}

DomainAuthProviderRequest.RequiredProperties = ["providerType", "enabled"];

/**
 * Provider Type
 * @member {String} providerType
 */
DomainAuthProviderRequest.prototype['providerType'] = undefined;

/**
 * Enabled/Disabled
 * @member {Boolean} enabled
 */
DomainAuthProviderRequest.prototype['enabled'] = undefined;

/**
 * Login Button Text
 * @member {String} label
 */
DomainAuthProviderRequest.prototype['label'] = undefined;

/**
 * @member {module:model/OpenIDConfig} config
 */
DomainAuthProviderRequest.prototype['config'] = undefined;






export default DomainAuthProviderRequest;


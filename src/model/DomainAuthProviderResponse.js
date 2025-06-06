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
 * The DomainAuthProviderResponse model module.
 * @module model/DomainAuthProviderResponse
 * @version 0.4.1
 */
class DomainAuthProviderResponse {
    /**
     * Constructs a new <code>DomainAuthProviderResponse</code>.
     * 
     * @alias module:model/DomainAuthProviderResponse
     * @param identifier {String} Provider ID
     * @param providerType {String} Provider Type
     * @param label {String} Login Button Text
     * @param _default {Boolean} True: Configured in coordinator.json, False: Custom Domain Provider
     * @param enabled {Boolean} Enabled/Disabled
     * @param createdAt {String} Created Date in ISO-8601 format e.g. 2022-05-06T02:39:23.000Z
     * @param updatedAt {String} Updated Date in ISO-8601 format e.g. 2022-05-06T02:39:23.000Z
     */
    constructor(identifier, providerType, label, _default, enabled, createdAt, updatedAt) { 
        
        DomainAuthProviderResponse.initialize(this, identifier, providerType, label, _default, enabled, createdAt, updatedAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, identifier, providerType, label, _default, enabled, createdAt, updatedAt) { 
        obj['identifier'] = identifier;
        obj['providerType'] = providerType;
        obj['label'] = label;
        obj['default'] = _default;
        obj['enabled'] = enabled;
        obj['createdAt'] = createdAt;
        obj['updatedAt'] = updatedAt;
    }

    /**
     * Constructs a <code>DomainAuthProviderResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DomainAuthProviderResponse} obj Optional instance to populate.
     * @return {module:model/DomainAuthProviderResponse} The populated <code>DomainAuthProviderResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DomainAuthProviderResponse();

            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('providerType')) {
                obj['providerType'] = ApiClient.convertToType(data['providerType'], 'String');
            }
            if (data.hasOwnProperty('provider')) {
                obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('authorizationUrl')) {
                obj['authorizationUrl'] = ApiClient.convertToType(data['authorizationUrl'], 'String');
            }
            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('config')) {
                obj['config'] = OpenIDConfig.constructFromObject(data['config']);
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DomainAuthProviderResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DomainAuthProviderResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DomainAuthProviderResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['identifier'] && !(typeof data['identifier'] === 'string' || data['identifier'] instanceof String)) {
            throw new Error("Expected the field `identifier` to be a primitive type in the JSON string but got " + data['identifier']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['providerType'] && !(typeof data['providerType'] === 'string' || data['providerType'] instanceof String)) {
            throw new Error("Expected the field `providerType` to be a primitive type in the JSON string but got " + data['providerType']);
        }
        // ensure the json data is a string
        if (data['provider'] && !(typeof data['provider'] === 'string' || data['provider'] instanceof String)) {
            throw new Error("Expected the field `provider` to be a primitive type in the JSON string but got " + data['provider']);
        }
        // ensure the json data is a string
        if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
            throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['authorizationUrl'] && !(typeof data['authorizationUrl'] === 'string' || data['authorizationUrl'] instanceof String)) {
            throw new Error("Expected the field `authorizationUrl` to be a primitive type in the JSON string but got " + data['authorizationUrl']);
        }
        // validate the optional field `config`
        if (data['config']) { // data not null
          OpenIDConfig.validateJSON(data['config']);
        }
        // ensure the json data is a string
        if (data['createdBy'] && !(typeof data['createdBy'] === 'string' || data['createdBy'] instanceof String)) {
            throw new Error("Expected the field `createdBy` to be a primitive type in the JSON string but got " + data['createdBy']);
        }
        // ensure the json data is a string
        if (data['createdAt'] && !(typeof data['createdAt'] === 'string' || data['createdAt'] instanceof String)) {
            throw new Error("Expected the field `createdAt` to be a primitive type in the JSON string but got " + data['createdAt']);
        }
        // ensure the json data is a string
        if (data['updatedAt'] && !(typeof data['updatedAt'] === 'string' || data['updatedAt'] instanceof String)) {
            throw new Error("Expected the field `updatedAt` to be a primitive type in the JSON string but got " + data['updatedAt']);
        }

        return true;
    }


}

DomainAuthProviderResponse.RequiredProperties = ["identifier", "providerType", "label", "default", "enabled", "createdAt", "updatedAt"];

/**
 * Provider ID
 * @member {String} identifier
 */
DomainAuthProviderResponse.prototype['identifier'] = undefined;

/**
 * Provider ID for backward compatibility with frontend
 * @member {String} id
 */
DomainAuthProviderResponse.prototype['id'] = undefined;

/**
 * Provider Type
 * @member {String} providerType
 */
DomainAuthProviderResponse.prototype['providerType'] = undefined;

/**
 * Provider Type for backward compatibility with frontend
 * @member {String} provider
 */
DomainAuthProviderResponse.prototype['provider'] = undefined;

/**
 * Login Button Text
 * @member {String} label
 */
DomainAuthProviderResponse.prototype['label'] = undefined;

/**
 * Title Text for the Frontend's Provider Configuration Form
 * @member {String} name
 */
DomainAuthProviderResponse.prototype['name'] = undefined;

/**
 * Coordinator endpoint for Authorizing with this provider
 * @member {String} authorizationUrl
 */
DomainAuthProviderResponse.prototype['authorizationUrl'] = undefined;

/**
 * True: Configured in coordinator.json, False: Custom Domain Provider
 * @member {Boolean} default
 */
DomainAuthProviderResponse.prototype['default'] = undefined;

/**
 * Enabled/Disabled
 * @member {Boolean} enabled
 */
DomainAuthProviderResponse.prototype['enabled'] = undefined;

/**
 * @member {module:model/OpenIDConfig} config
 */
DomainAuthProviderResponse.prototype['config'] = undefined;

/**
 * Optional User ID of creator
 * @member {String} createdBy
 */
DomainAuthProviderResponse.prototype['createdBy'] = undefined;

/**
 * Created Date in ISO-8601 format e.g. 2022-05-06T02:39:23.000Z
 * @member {String} createdAt
 */
DomainAuthProviderResponse.prototype['createdAt'] = undefined;

/**
 * Updated Date in ISO-8601 format e.g. 2022-05-06T02:39:23.000Z
 * @member {String} updatedAt
 */
DomainAuthProviderResponse.prototype['updatedAt'] = undefined;






export default DomainAuthProviderResponse;


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
import ProjectNetworkState from './ProjectNetworkState';

/**
 * The NetworkConnection model module.
 * @module model/NetworkConnection
 * @version 0.4.0
 */
class NetworkConnection {
    /**
     * Constructs a new <code>NetworkConnection</code>.
     * 
     * @alias module:model/NetworkConnection
     * @param identifier {String} UUIDv4
     * @param provider {String} One of the registered [network provider types](#get-/v1/network/providers)
     * @param name {String} User specified name for this network connection. e.g., \"My Network Connection\"
     * @param config {Object} An object containing network connection configuration data. Will vary based on network provider type.
     * @param createdAt {String} Created Date in ISO-8601 format e.g., \"2022-05-06T02:39:23.000Z\"
     * @param updatedAt {String} Updated Date in ISO-8601 format e.g., \"2022-05-06T02:39:23.000Z\"
     * @param createdBy {String} UUIDv4 of the user who created this record.
     * @param updatedBy {String} UUIDv4 of the user who last updated this record.
     */
    constructor(identifier, provider, name, config, createdAt, updatedAt, createdBy, updatedBy) { 
        
        NetworkConnection.initialize(this, identifier, provider, name, config, createdAt, updatedAt, createdBy, updatedBy);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, identifier, provider, name, config, createdAt, updatedAt, createdBy, updatedBy) { 
        obj['identifier'] = identifier;
        obj['provider'] = provider;
        obj['name'] = name;
        obj['config'] = config;
        obj['createdAt'] = createdAt;
        obj['updatedAt'] = updatedAt;
        obj['createdBy'] = createdBy;
        obj['updatedBy'] = updatedBy;
    }

    /**
     * Constructs a <code>NetworkConnection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkConnection} obj Optional instance to populate.
     * @return {module:model/NetworkConnection} The populated <code>NetworkConnection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkConnection();

            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('provider')) {
                obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('config')) {
                obj['config'] = ApiClient.convertToType(data['config'], Object);
            }
            if (data.hasOwnProperty('projects')) {
                obj['projects'] = ApiClient.convertToType(data['projects'], [ProjectNetworkState]);
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'String');
            }
            if (data.hasOwnProperty('updatedBy')) {
                obj['updatedBy'] = ApiClient.convertToType(data['updatedBy'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NetworkConnection</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NetworkConnection</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of NetworkConnection.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['identifier'] && !(typeof data['identifier'] === 'string' || data['identifier'] instanceof String)) {
            throw new Error("Expected the field `identifier` to be a primitive type in the JSON string but got " + data['identifier']);
        }
        // ensure the json data is a string
        if (data['provider'] && !(typeof data['provider'] === 'string' || data['provider'] instanceof String)) {
            throw new Error("Expected the field `provider` to be a primitive type in the JSON string but got " + data['provider']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        if (data['projects']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['projects'])) {
                throw new Error("Expected the field `projects` to be an array in the JSON data but got " + data['projects']);
            }
            // validate the optional field `projects` (array)
            for (const item of data['projects']) {
                ProjectNetworkState.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['createdAt'] && !(typeof data['createdAt'] === 'string' || data['createdAt'] instanceof String)) {
            throw new Error("Expected the field `createdAt` to be a primitive type in the JSON string but got " + data['createdAt']);
        }
        // ensure the json data is a string
        if (data['updatedAt'] && !(typeof data['updatedAt'] === 'string' || data['updatedAt'] instanceof String)) {
            throw new Error("Expected the field `updatedAt` to be a primitive type in the JSON string but got " + data['updatedAt']);
        }
        // ensure the json data is a string
        if (data['createdBy'] && !(typeof data['createdBy'] === 'string' || data['createdBy'] instanceof String)) {
            throw new Error("Expected the field `createdBy` to be a primitive type in the JSON string but got " + data['createdBy']);
        }
        // ensure the json data is a string
        if (data['updatedBy'] && !(typeof data['updatedBy'] === 'string' || data['updatedBy'] instanceof String)) {
            throw new Error("Expected the field `updatedBy` to be a primitive type in the JSON string but got " + data['updatedBy']);
        }

        return true;
    }


}

NetworkConnection.RequiredProperties = ["identifier", "provider", "name", "config", "createdAt", "updatedAt", "createdBy", "updatedBy"];

/**
 * UUIDv4
 * @member {String} identifier
 */
NetworkConnection.prototype['identifier'] = undefined;

/**
 * One of the registered [network provider types](#get-/v1/network/providers)
 * @member {String} provider
 */
NetworkConnection.prototype['provider'] = undefined;

/**
 * User specified name for this network connection. e.g., \"My Network Connection\"
 * @member {String} name
 */
NetworkConnection.prototype['name'] = undefined;

/**
 * An object containing network connection configuration data. Will vary based on network provider type.
 * @member {Object} config
 */
NetworkConnection.prototype['config'] = undefined;

/**
 * An object where the keys are project IDs and the values are {@link ProjectNetworkState} objects representing the state of each project.
 * @member {Array.<module:model/ProjectNetworkState>} projects
 */
NetworkConnection.prototype['projects'] = undefined;

/**
 * Created Date in ISO-8601 format e.g., \"2022-05-06T02:39:23.000Z\"
 * @member {String} createdAt
 */
NetworkConnection.prototype['createdAt'] = undefined;

/**
 * Updated Date in ISO-8601 format e.g., \"2022-05-06T02:39:23.000Z\"
 * @member {String} updatedAt
 */
NetworkConnection.prototype['updatedAt'] = undefined;

/**
 * UUIDv4 of the user who created this record.
 * @member {String} createdBy
 */
NetworkConnection.prototype['createdBy'] = undefined;

/**
 * UUIDv4 of the user who last updated this record.
 * @member {String} updatedBy
 */
NetworkConnection.prototype['updatedBy'] = undefined;






export default NetworkConnection;


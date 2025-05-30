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
import Features from './Features';

/**
 * The WebPlayerCreateSessionRequest model module.
 * @module model/WebPlayerCreateSessionRequest
 * @version 0.4.1
 */
class WebPlayerCreateSessionRequest {
    /**
     * Constructs a new <code>WebPlayerCreateSessionRequest</code>.
     * 
     * @alias module:model/WebPlayerCreateSessionRequest
     * @param projectId {String} Project Identifier
     * @param instanceId {String} VM Instance Identifier
     * @param expiresIn {Number} Number of seconds token remains valid
     * @param features {module:model/Features} 
     */
    constructor(projectId, instanceId, expiresIn, features) { 
        
        WebPlayerCreateSessionRequest.initialize(this, projectId, instanceId, expiresIn, features);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, projectId, instanceId, expiresIn, features) { 
        obj['projectId'] = projectId;
        obj['instanceId'] = instanceId;
        obj['expiresIn'] = expiresIn;
        obj['features'] = features;
    }

    /**
     * Constructs a <code>WebPlayerCreateSessionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebPlayerCreateSessionRequest} obj Optional instance to populate.
     * @return {module:model/WebPlayerCreateSessionRequest} The populated <code>WebPlayerCreateSessionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebPlayerCreateSessionRequest();

            if (data.hasOwnProperty('projectId')) {
                obj['projectId'] = ApiClient.convertToType(data['projectId'], 'String');
            }
            if (data.hasOwnProperty('instanceId')) {
                obj['instanceId'] = ApiClient.convertToType(data['instanceId'], 'String');
            }
            if (data.hasOwnProperty('expiresIn')) {
                obj['expiresIn'] = ApiClient.convertToType(data['expiresIn'], 'Number');
            }
            if (data.hasOwnProperty('features')) {
                obj['features'] = Features.constructFromObject(data['features']);
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebPlayerCreateSessionRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebPlayerCreateSessionRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebPlayerCreateSessionRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['projectId'] && !(typeof data['projectId'] === 'string' || data['projectId'] instanceof String)) {
            throw new Error("Expected the field `projectId` to be a primitive type in the JSON string but got " + data['projectId']);
        }
        // ensure the json data is a string
        if (data['instanceId'] && !(typeof data['instanceId'] === 'string' || data['instanceId'] instanceof String)) {
            throw new Error("Expected the field `instanceId` to be a primitive type in the JSON string but got " + data['instanceId']);
        }
        // validate the optional field `features`
        if (data['features']) { // data not null
          Features.validateJSON(data['features']);
        }
        // ensure the json data is a string
        if (data['clientId'] && !(typeof data['clientId'] === 'string' || data['clientId'] instanceof String)) {
            throw new Error("Expected the field `clientId` to be a primitive type in the JSON string but got " + data['clientId']);
        }

        return true;
    }


}

WebPlayerCreateSessionRequest.RequiredProperties = ["projectId", "instanceId", "expiresIn", "features"];

/**
 * Project Identifier
 * @member {String} projectId
 */
WebPlayerCreateSessionRequest.prototype['projectId'] = undefined;

/**
 * VM Instance Identifier
 * @member {String} instanceId
 */
WebPlayerCreateSessionRequest.prototype['instanceId'] = undefined;

/**
 * Number of seconds token remains valid
 * @member {Number} expiresIn
 */
WebPlayerCreateSessionRequest.prototype['expiresIn'] = undefined;

/**
 * @member {module:model/Features} features
 */
WebPlayerCreateSessionRequest.prototype['features'] = undefined;

/**
 * Optional string value supplied by client for tracking purposes
 * @member {String} clientId
 */
WebPlayerCreateSessionRequest.prototype['clientId'] = undefined;






export default WebPlayerCreateSessionRequest;


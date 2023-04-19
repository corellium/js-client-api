/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * The version of the OpenAPI document: 4.5.0-16775
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ProjectQuota from './ProjectQuota';
import ProjectSettings from './ProjectSettings';
import ProjectUsage from './ProjectUsage';

/**
 * The Project model module.
 * @module model/Project
 * @version 0.3.2
 */
class Project {
    /**
     * Constructs a new <code>Project</code>.
     * 
     * @alias module:model/Project
     * @param id {String} Project Identifier
     */
    constructor(id) { 
        
        Project.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>Project</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Project} obj Optional instance to populate.
     * @return {module:model/Project} The populated <code>Project</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Project();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('settings')) {
                obj['settings'] = ProjectSettings.constructFromObject(data['settings']);
            }
            if (data.hasOwnProperty('quotas')) {
                obj['quotas'] = ProjectQuota.constructFromObject(data['quotas']);
            }
            if (data.hasOwnProperty('quotasUsed')) {
                obj['quotasUsed'] = ProjectUsage.constructFromObject(data['quotasUsed']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Project</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Project</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Project.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `settings`
        if (data['settings']) { // data not null
          ProjectSettings.validateJSON(data['settings']);
        }
        // validate the optional field `quotas`
        if (data['quotas']) { // data not null
          ProjectQuota.validateJSON(data['quotas']);
        }
        // validate the optional field `quotasUsed`
        if (data['quotasUsed']) { // data not null
          ProjectUsage.validateJSON(data['quotasUsed']);
        }

        return true;
    }


}

Project.RequiredProperties = ["id"];

/**
 * Project Identifier
 * @member {String} id
 */
Project.prototype['id'] = undefined;

/**
 * Project Name
 * @member {String} name
 */
Project.prototype['name'] = undefined;

/**
 * @member {module:model/ProjectSettings} settings
 */
Project.prototype['settings'] = undefined;

/**
 * @member {module:model/ProjectQuota} quotas
 */
Project.prototype['quotas'] = undefined;

/**
 * @member {module:model/ProjectUsage} quotasUsed
 */
Project.prototype['quotasUsed'] = undefined;






export default Project;


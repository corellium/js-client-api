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
 * The Role model module.
 * @module model/Role
 * @version 0.4.0
 */
class Role {
    /**
     * Constructs a new <code>Role</code>.
     * 
     * @alias module:model/Role
     * @param role {module:model/Role.RoleEnum} 
     * @param project {String} Project ID
     * @param user {String} User ID
     */
    constructor(role, project, user) { 
        
        Role.initialize(this, role, project, user);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, role, project, user) { 
        obj['role'] = role;
        obj['project'] = project;
        obj['user'] = user;
    }

    /**
     * Constructs a <code>Role</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Role} obj Optional instance to populate.
     * @return {module:model/Role} The populated <code>Role</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Role();

            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = ApiClient.convertToType(data['project'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Role</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Role</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Role.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['role'] && !(typeof data['role'] === 'string' || data['role'] instanceof String)) {
            throw new Error("Expected the field `role` to be a primitive type in the JSON string but got " + data['role']);
        }
        // ensure the json data is a string
        if (data['project'] && !(typeof data['project'] === 'string' || data['project'] instanceof String)) {
            throw new Error("Expected the field `project` to be a primitive type in the JSON string but got " + data['project']);
        }
        // ensure the json data is a string
        if (data['user'] && !(typeof data['user'] === 'string' || data['user'] instanceof String)) {
            throw new Error("Expected the field `user` to be a primitive type in the JSON string but got " + data['user']);
        }

        return true;
    }


}

Role.RequiredProperties = ["role", "project", "user"];

/**
 * 
 * @member {module:model/Role.RoleEnum} role
 */
Role.prototype['role'] = undefined;

/**
 * Project ID
 * @member {String} project
 */
Role.prototype['project'] = undefined;

/**
 * User ID
 * @member {String} user
 */
Role.prototype['user'] = undefined;





/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */
Role['RoleEnum'] = {

    /**
     * value: "admin"
     * @const
     */
    "admin": "admin",

    /**
     * value: "_member_"
     * @const
     */
    "_member_": "_member_"
};



export default Role;


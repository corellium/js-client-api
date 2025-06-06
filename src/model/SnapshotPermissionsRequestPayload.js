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
 * The SnapshotPermissionsRequestPayload model module.
 * @module model/SnapshotPermissionsRequestPayload
 * @version 0.4.1
 */
class SnapshotPermissionsRequestPayload {
    /**
     * Constructs a new <code>SnapshotPermissionsRequestPayload</code>.
     * 
     * @alias module:model/SnapshotPermissionsRequestPayload
     * @param members {Array.<String>} The email addresses or user ids of the members.
     */
    constructor(members) { 
        
        SnapshotPermissionsRequestPayload.initialize(this, members);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, members) { 
        obj['members'] = members;
    }

    /**
     * Constructs a <code>SnapshotPermissionsRequestPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SnapshotPermissionsRequestPayload} obj Optional instance to populate.
     * @return {module:model/SnapshotPermissionsRequestPayload} The populated <code>SnapshotPermissionsRequestPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SnapshotPermissionsRequestPayload();

            if (data.hasOwnProperty('members')) {
                obj['members'] = ApiClient.convertToType(data['members'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SnapshotPermissionsRequestPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SnapshotPermissionsRequestPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SnapshotPermissionsRequestPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['members'])) {
            throw new Error("Expected the field `members` to be an array in the JSON data but got " + data['members']);
        }

        return true;
    }


}

SnapshotPermissionsRequestPayload.RequiredProperties = ["members"];

/**
 * The email addresses or user ids of the members.
 * @member {Array.<String>} members
 */
SnapshotPermissionsRequestPayload.prototype['members'] = undefined;






export default SnapshotPermissionsRequestPayload;


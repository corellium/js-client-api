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
 * The SnapshotStatus model module.
 * @module model/SnapshotStatus
 * @version 0.4.0
 */
class SnapshotStatus {
    /**
     * Constructs a new <code>SnapshotStatus</code>.
     * 
     * @alias module:model/SnapshotStatus
     */
    constructor() { 
        
        SnapshotStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SnapshotStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SnapshotStatus} obj Optional instance to populate.
     * @return {module:model/SnapshotStatus} The populated <code>SnapshotStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SnapshotStatus();

            if (data.hasOwnProperty('task')) {
                obj['task'] = ApiClient.convertToType(data['task'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SnapshotStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SnapshotStatus</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['task'] && !(typeof data['task'] === 'string' || data['task'] instanceof String)) {
            throw new Error("Expected the field `task` to be a primitive type in the JSON string but got " + data['task']);
        }

        return true;
    }


}



/**
 * The current task being performed on the snapshot
 * @member {String} task
 */
SnapshotStatus.prototype['task'] = undefined;

/**
 * Indicates if the snapshot has been successfully created
 * @member {Boolean} created
 */
SnapshotStatus.prototype['created'] = undefined;






export default SnapshotStatus;


/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * The version of the OpenAPI document: 5.2.0-17368
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The VolumeOptions model module.
 * @module model/VolumeOptions
 * @version 0.3.3
 */
class VolumeOptions {
    /**
     * Constructs a new <code>VolumeOptions</code>.
     * 
     * @alias module:model/VolumeOptions
     */
    constructor() { 
        
        VolumeOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VolumeOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VolumeOptions} obj Optional instance to populate.
     * @return {module:model/VolumeOptions} The populated <code>VolumeOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VolumeOptions();

            if (data.hasOwnProperty('allocate')) {
                obj['allocate'] = ApiClient.convertToType(data['allocate'], 'Number');
            }
            if (data.hasOwnProperty('partitions')) {
                obj['partitions'] = ApiClient.convertToType(data['partitions'], [Object]);
            }
            if (data.hasOwnProperty('computeNode')) {
                obj['computeNode'] = ApiClient.convertToType(data['computeNode'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VolumeOptions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VolumeOptions</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['partitions'])) {
            throw new Error("Expected the field `partitions` to be an array in the JSON data but got " + data['partitions']);
        }
        // ensure the json data is a string
        if (data['computeNode'] && !(typeof data['computeNode'] === 'string' || data['computeNode'] instanceof String)) {
            throw new Error("Expected the field `computeNode` to be a primitive type in the JSON string but got " + data['computeNode']);
        }

        return true;
    }


}



/**
 * GB
 * @member {Number} allocate
 */
VolumeOptions.prototype['allocate'] = undefined;

/**
 * 
 * @member {Array.<Object>} partitions
 */
VolumeOptions.prototype['partitions'] = undefined;

/**
 * 
 * @member {String} computeNode
 */
VolumeOptions.prototype['computeNode'] = undefined;






export default VolumeOptions;


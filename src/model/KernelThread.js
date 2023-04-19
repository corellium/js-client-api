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

/**
 * The KernelThread model module.
 * @module model/KernelThread
 * @version 0.3.2
 */
class KernelThread {
    /**
     * Constructs a new <code>KernelThread</code>.
     * 
     * @alias module:model/KernelThread
     */
    constructor() { 
        
        KernelThread.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KernelThread</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KernelThread} obj Optional instance to populate.
     * @return {module:model/KernelThread} The populated <code>KernelThread</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KernelThread();

            if (data.hasOwnProperty('kernelId')) {
                obj['kernelId'] = ApiClient.convertToType(data['kernelId'], 'String');
            }
            if (data.hasOwnProperty('tid')) {
                obj['tid'] = ApiClient.convertToType(data['tid'], 'Number');
            }
            if (data.hasOwnProperty('stack')) {
                obj['stack'] = ApiClient.convertToType(data['stack'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>KernelThread</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>KernelThread</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['kernelId'] && !(typeof data['kernelId'] === 'string' || data['kernelId'] instanceof String)) {
            throw new Error("Expected the field `kernelId` to be a primitive type in the JSON string but got " + data['kernelId']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['stack'])) {
            throw new Error("Expected the field `stack` to be an array in the JSON data but got " + data['stack']);
        }

        return true;
    }


}



/**
 * Kernel Thread ID
 * @member {String} kernelId
 */
KernelThread.prototype['kernelId'] = undefined;

/**
 * Task ID
 * @member {Number} tid
 */
KernelThread.prototype['tid'] = undefined;

/**
 * Array of stack addresses
 * @member {Array.<String>} stack
 */
KernelThread.prototype['stack'] = undefined;






export default KernelThread;


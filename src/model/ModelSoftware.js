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
import Firmware from './Firmware';

/**
 * The ModelSoftware model module.
 * @module model/ModelSoftware
 * @version 0.4.1
 */
class ModelSoftware {
    /**
     * Constructs a new <code>ModelSoftware</code>.
     * 
     * @alias module:model/ModelSoftware
     */
    constructor() { 
        
        ModelSoftware.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModelSoftware</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelSoftware} obj Optional instance to populate.
     * @return {module:model/ModelSoftware} The populated <code>ModelSoftware</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelSoftware();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('boardConfig')) {
                obj['boardConfig'] = ApiClient.convertToType(data['boardConfig'], 'String');
            }
            if (data.hasOwnProperty('platform')) {
                obj['platform'] = ApiClient.convertToType(data['platform'], 'String');
            }
            if (data.hasOwnProperty('cpid')) {
                obj['cpid'] = ApiClient.convertToType(data['cpid'], 'Number');
            }
            if (data.hasOwnProperty('bdid')) {
                obj['bdid'] = ApiClient.convertToType(data['bdid'], 'Number');
            }
            if (data.hasOwnProperty('firmwares')) {
                obj['firmwares'] = ApiClient.convertToType(data['firmwares'], [Firmware]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ModelSoftware</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ModelSoftware</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['boardConfig'] && !(typeof data['boardConfig'] === 'string' || data['boardConfig'] instanceof String)) {
            throw new Error("Expected the field `boardConfig` to be a primitive type in the JSON string but got " + data['boardConfig']);
        }
        // ensure the json data is a string
        if (data['platform'] && !(typeof data['platform'] === 'string' || data['platform'] instanceof String)) {
            throw new Error("Expected the field `platform` to be a primitive type in the JSON string but got " + data['platform']);
        }
        if (data['firmwares']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['firmwares'])) {
                throw new Error("Expected the field `firmwares` to be an array in the JSON data but got " + data['firmwares']);
            }
            // validate the optional field `firmwares` (array)
            for (const item of data['firmwares']) {
                Firmware.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * 
 * @member {String} name
 */
ModelSoftware.prototype['name'] = undefined;

/**
 * 
 * @member {String} boardConfig
 */
ModelSoftware.prototype['boardConfig'] = undefined;

/**
 * 
 * @member {String} platform
 */
ModelSoftware.prototype['platform'] = undefined;

/**
 * 
 * @member {Number} cpid
 */
ModelSoftware.prototype['cpid'] = undefined;

/**
 * 
 * @member {Number} bdid
 */
ModelSoftware.prototype['bdid'] = undefined;

/**
 * 
 * @member {Array.<module:model/Firmware>} firmwares
 */
ModelSoftware.prototype['firmwares'] = undefined;






export default ModelSoftware;


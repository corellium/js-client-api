/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * The version of the OpenAPI document: 4.2.0-6a4b86f
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Kcrange model module.
 * @module model/Kcrange
 * @version 0.2.0
 */
class Kcrange {
    /**
     * Constructs a new <code>Kcrange</code>.
     * 
     * @alias module:model/Kcrange
     */
    constructor() { 
        
        Kcrange.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Kcrange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Kcrange} obj Optional instance to populate.
     * @return {module:model/Kcrange} The populated <code>Kcrange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Kcrange();

            if (data.hasOwnProperty('kext')) {
                obj['kext'] = ApiClient.convertToType(data['kext'], 'String');
            }
            if (data.hasOwnProperty('range')) {
                obj['range'] = ApiClient.convertToType(data['range'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Kcrange</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Kcrange</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['kext'] && !(typeof data['kext'] === 'string' || data['kext'] instanceof String)) {
            throw new Error("Expected the field `kext` to be a primitive type in the JSON string but got " + data['kext']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['range'])) {
            throw new Error("Expected the field `range` to be an array in the JSON data but got " + data['range']);
        }

        return true;
    }


}



/**
 * Kernel Extension
 * @member {String} kext
 */
Kcrange.prototype['kext'] = undefined;

/**
 * Range
 * @member {Array.<String>} range
 */
Kcrange.prototype['range'] = undefined;






export default Kcrange;


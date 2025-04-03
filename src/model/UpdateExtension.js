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
 * The UpdateExtension model module.
 * @module model/UpdateExtension
 * @version 0.4.0
 */
class UpdateExtension {
    /**
     * Constructs a new <code>UpdateExtension</code>.
     * 
     * @alias module:model/UpdateExtension
     */
    constructor() { 
        
        UpdateExtension.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateExtension</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateExtension} obj Optional instance to populate.
     * @return {module:model/UpdateExtension} The populated <code>UpdateExtension</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateExtension();

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateExtension</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateExtension</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * If true, instances requiring this extension can be created or started
 * @member {Boolean} enabled
 */
UpdateExtension.prototype['enabled'] = undefined;






export default UpdateExtension;


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
 * The ProjectUsage model module.
 * @module model/ProjectUsage
 * @version 0.4.0
 */
class ProjectUsage {
    /**
     * Constructs a new <code>ProjectUsage</code>.
     * 
     * @alias module:model/ProjectUsage
     */
    constructor() { 
        
        ProjectUsage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProjectUsage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectUsage} obj Optional instance to populate.
     * @return {module:model/ProjectUsage} The populated <code>ProjectUsage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectUsage();

            if (data.hasOwnProperty('cores')) {
                obj['cores'] = ApiClient.convertToType(data['cores'], 'Number');
            }
            if (data.hasOwnProperty('instances')) {
                obj['instances'] = ApiClient.convertToType(data['instances'], 'Number');
            }
            if (data.hasOwnProperty('ram')) {
                obj['ram'] = ApiClient.convertToType(data['ram'], 'Number');
            }
            if (data.hasOwnProperty('gpu')) {
                obj['gpu'] = ApiClient.convertToType(data['gpu'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProjectUsage</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProjectUsage</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * 
 * @member {Number} cores
 */
ProjectUsage.prototype['cores'] = undefined;

/**
 * 
 * @member {Number} instances
 */
ProjectUsage.prototype['instances'] = undefined;

/**
 * 
 * @member {Number} ram
 */
ProjectUsage.prototype['ram'] = undefined;

/**
 * 
 * @member {Number} gpu
 */
ProjectUsage.prototype['gpu'] = undefined;






export default ProjectUsage;


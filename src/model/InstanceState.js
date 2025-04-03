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
* Enum class InstanceState.
* @enum {}
* @readonly
*/
export default class InstanceState {
    
        /**
         * value: "on"
         * @const
         */
        "on" = "on";

    
        /**
         * value: "off"
         * @const
         */
        "off" = "off";

    
        /**
         * value: "booting"
         * @const
         */
        "booting" = "booting";

    
        /**
         * value: "deleting"
         * @const
         */
        "deleting" = "deleting";

    
        /**
         * value: "creating"
         * @const
         */
        "creating" = "creating";

    
        /**
         * value: "restoring"
         * @const
         */
        "restoring" = "restoring";

    
        /**
         * value: "paused"
         * @const
         */
        "paused" = "paused";

    
        /**
         * value: "rebooting"
         * @const
         */
        "rebooting" = "rebooting";

    
        /**
         * value: "error"
         * @const
         */
        "error" = "error";

    

    /**
    * Returns a <code>InstanceState</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/InstanceState} The enum <code>InstanceState</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}


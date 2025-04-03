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
import InstanceBootOptions from './InstanceBootOptions';
import ProxyConfig from './ProxyConfig';

/**
 * The PatchInstanceOptions model module.
 * @module model/PatchInstanceOptions
 * @version 0.4.0
 */
class PatchInstanceOptions {
    /**
     * Constructs a new <code>PatchInstanceOptions</code>.
     * 
     * @alias module:model/PatchInstanceOptions
     */
    constructor() { 
        
        PatchInstanceOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchInstanceOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchInstanceOptions} obj Optional instance to populate.
     * @return {module:model/PatchInstanceOptions} The populated <code>PatchInstanceOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchInstanceOptions();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('bootOptions')) {
                obj['bootOptions'] = InstanceBootOptions.constructFromObject(data['bootOptions']);
            }
            if (data.hasOwnProperty('proxy')) {
                obj['proxy'] = ApiClient.convertToType(data['proxy'], [ProxyConfig]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PatchInstanceOptions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PatchInstanceOptions</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }
        // validate the optional field `bootOptions`
        if (data['bootOptions']) { // data not null
          InstanceBootOptions.validateJSON(data['bootOptions']);
        }
        if (data['proxy']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['proxy'])) {
                throw new Error("Expected the field `proxy` to be an array in the JSON data but got " + data['proxy']);
            }
            // validate the optional field `proxy` (array)
            for (const item of data['proxy']) {
                ProxyConfig.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * the name of the device
 * @member {String} name
 */
PatchInstanceOptions.prototype['name'] = undefined;

/**
 * the desired state of the device
 * @member {module:model/PatchInstanceOptions.StateEnum} state
 */
PatchInstanceOptions.prototype['state'] = undefined;

/**
 * @member {module:model/InstanceBootOptions} bootOptions
 */
PatchInstanceOptions.prototype['bootOptions'] = undefined;

/**
 * 
 * @member {Array.<module:model/ProxyConfig>} proxy
 */
PatchInstanceOptions.prototype['proxy'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
PatchInstanceOptions['StateEnum'] = {

    /**
     * value: "on"
     * @const
     */
    "on": "on",

    /**
     * value: "off"
     * @const
     */
    "off": "off",

    /**
     * value: "paused"
     * @const
     */
    "paused": "paused",

    /**
     * value: "deleting"
     * @const
     */
    "deleting": "deleting"
};



export default PatchInstanceOptions;


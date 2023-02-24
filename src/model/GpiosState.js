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
import GpioStateDefinition from './GpioStateDefinition';

/**
 * The GpiosState model module.
 * @module model/GpiosState
 * @version 0.2.0
 */
class GpiosState {
    /**
     * Constructs a new <code>GpiosState</code>.
     * Current state of GPIOs
     * @alias module:model/GpiosState
     */
    constructor() { 
        
        GpiosState.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GpiosState</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GpiosState} obj Optional instance to populate.
     * @return {module:model/GpiosState} The populated <code>GpiosState</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GpiosState();

            if (data.hasOwnProperty('led')) {
                obj['led'] = GpioStateDefinition.constructFromObject(data['led']);
            }
            if (data.hasOwnProperty('button')) {
                obj['button'] = GpioStateDefinition.constructFromObject(data['button']);
            }
            if (data.hasOwnProperty('switch')) {
                obj['switch'] = GpioStateDefinition.constructFromObject(data['switch']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GpiosState</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GpiosState</code>.
     */
    static validateJSON(data) {
        // validate the optional field `led`
        if (data['led']) { // data not null
          GpioStateDefinition.validateJSON(data['led']);
        }
        // validate the optional field `button`
        if (data['button']) { // data not null
          GpioStateDefinition.validateJSON(data['button']);
        }
        // validate the optional field `switch`
        if (data['switch']) { // data not null
          GpioStateDefinition.validateJSON(data['switch']);
        }

        return true;
    }


}



/**
 * @member {module:model/GpioStateDefinition} led
 */
GpiosState.prototype['led'] = undefined;

/**
 * @member {module:model/GpioStateDefinition} button
 */
GpiosState.prototype['button'] = undefined;

/**
 * @member {module:model/GpioStateDefinition} switch
 */
GpiosState.prototype['switch'] = undefined;






export default GpiosState;

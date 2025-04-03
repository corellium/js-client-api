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
import TextInput from './TextInput';
import TouchCurveInput from './TouchCurveInput';
import TouchInput from './TouchInput';
import TouchInputButtonsInner from './TouchInputButtonsInner';

/**
 * The InstanceInput model module.
 * @module model/InstanceInput
 * @version 0.4.0
 */
class InstanceInput {
    /**
     * Constructs a new <code>InstanceInput</code>.
     * 
     * @alias module:model/InstanceInput
     * @param {(module:model/TextInput|module:model/TouchCurveInput|module:model/TouchInput)} instance The actual instance to initialize InstanceInput.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "TouchInput") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                TouchInput.validateJSON(instance); // throw an exception if no match
                // create TouchInput from JS object
                this.actualInstance = TouchInput.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into TouchInput
            errorMessages.push("Failed to construct TouchInput: " + err)
        }

        try {
            if (typeof instance === "TouchCurveInput") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                TouchCurveInput.validateJSON(instance); // throw an exception if no match
                // create TouchCurveInput from JS object
                this.actualInstance = TouchCurveInput.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into TouchCurveInput
            errorMessages.push("Failed to construct TouchCurveInput: " + err)
        }

        try {
            if (typeof instance === "TextInput") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                TextInput.validateJSON(instance); // throw an exception if no match
                // create TextInput from JS object
                this.actualInstance = TextInput.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into TextInput
            errorMessages.push("Failed to construct TextInput: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `InstanceInput` with oneOf schemas TextInput, TouchCurveInput, TouchInput. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `InstanceInput` with oneOf schemas TextInput, TouchCurveInput, TouchInput. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>InstanceInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceInput} obj Optional instance to populate.
     * @return {module:model/InstanceInput} The populated <code>InstanceInput</code> instance.
     */
    static constructFromObject(data, obj) {
        return new InstanceInput(data);
    }

    /**
     * Gets the actual instance, which can be <code>TextInput</code>, <code>TouchCurveInput</code>, <code>TouchInput</code>.
     * @return {(module:model/TextInput|module:model/TouchCurveInput|module:model/TouchInput)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>TextInput</code>, <code>TouchCurveInput</code>, <code>TouchInput</code>.
     * @param {(module:model/TextInput|module:model/TouchCurveInput|module:model/TouchInput)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = InstanceInput.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of InstanceInput from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/InstanceInput} An instance of InstanceInput.
     */
    static fromJSON = function(json_string){
        return InstanceInput.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * Finger Positions
 * @member {Object} position
 */
InstanceInput.prototype['position'] = undefined;

/**
 * Buttons to be held when this position is reached. Either a Button enum object or an ASCII character. No change if not defined.
 * @member {Array.<module:model/TouchInputButtonsInner>} buttons
 */
InstanceInput.prototype['buttons'] = undefined;

/**
 * true if you want to use normalized x,y coordinates from 0-10000 (eg 5000,5000 is always center of screen)
 * @member {Boolean} normalized
 */
InstanceInput.prototype['normalized'] = undefined;

/**
 * Duration to wait before this input is executed.  Instant if not defined.
 * @member {Number} wait
 */
InstanceInput.prototype['wait'] = undefined;

/**
 * Finger Positions
 * @member {Object} start
 */
InstanceInput.prototype['start'] = undefined;

/**
 * Finger Positions
 * @member {Object} end
 */
InstanceInput.prototype['end'] = undefined;

/**
 * array of per-finger intermediate touch positions, up to 10 depending on model.  Straight line if not defined.
 * @member {Array.<Object>} bezierPoints
 */
InstanceInput.prototype['bezierPoints'] = undefined;

/**
 * Buttons to be held during this curve.
 * @member {Array.<module:model/TouchInputButtonsInner>} startButtons
 */
InstanceInput.prototype['startButtons'] = undefined;

/**
 * Buttons to be left held after this curve.  Same as startButtons if not defined.
 * @member {Array.<module:model/TouchInputButtonsInner>} endButtons
 */
InstanceInput.prototype['endButtons'] = undefined;

/**
 * Duration to execute this curve over.
 * @member {Number} duration
 */
InstanceInput.prototype['duration'] = undefined;

/**
 * text to type
 * @member {String} required
 */
InstanceInput.prototype['required'] = undefined;

/**
 * How long to take to type each key.  150ms if not defined.
 * @member {Number} keyDuration
 */
InstanceInput.prototype['keyDuration'] = undefined;


InstanceInput.OneOf = ["TextInput", "TouchCurveInput", "TouchInput"];

export default InstanceInput;


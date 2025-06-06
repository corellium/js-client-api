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
 * The CouponOptions model module.
 * @module model/CouponOptions
 * @version 0.4.1
 */
class CouponOptions {
    /**
     * Constructs a new <code>CouponOptions</code>.
     * Coupon options
     * @alias module:model/CouponOptions
     * @param type {module:model/CouponOptions.TypeEnum} 
     * @param amount {Number} Amount
     * @param used {Boolean} Is Used. If true, this coupon has been used and cannot be used again
     */
    constructor(type, amount, used) { 
        
        CouponOptions.initialize(this, type, amount, used);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, amount, used) { 
        obj['type'] = type;
        obj['amount'] = amount;
        obj['used'] = used;
    }

    /**
     * Constructs a <code>CouponOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CouponOptions} obj Optional instance to populate.
     * @return {module:model/CouponOptions} The populated <code>CouponOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponOptions();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('used')) {
                obj['used'] = ApiClient.convertToType(data['used'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CouponOptions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CouponOptions</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CouponOptions.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}

CouponOptions.RequiredProperties = ["type", "amount", "used"];

/**
 * 
 * @member {module:model/CouponOptions.TypeEnum} type
 */
CouponOptions.prototype['type'] = undefined;

/**
 * Amount
 * @member {Number} amount
 */
CouponOptions.prototype['amount'] = undefined;

/**
 * Is Used. If true, this coupon has been used and cannot be used again
 * @member {Boolean} used
 */
CouponOptions.prototype['used'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CouponOptions['TypeEnum'] = {

    /**
     * value: "percent"
     * @const
     */
    "percent": "percent",

    /**
     * value: "discount"
     * @const
     */
    "discount": "discount",

    /**
     * value: "absolute"
     * @const
     */
    "absolute": "absolute"
};



export default CouponOptions;


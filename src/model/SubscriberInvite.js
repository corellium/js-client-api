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
import CouponOptions from './CouponOptions';
import Plan from './Plan';
import Trial from './Trial';

/**
 * The SubscriberInvite model module.
 * @module model/SubscriberInvite
 * @version 0.4.1
 */
class SubscriberInvite {
    /**
     * Constructs a new <code>SubscriberInvite</code>.
     * Subscriber Invite
     * @alias module:model/SubscriberInvite
     * @param couponCode {String} Coupon code
     * @param aggregate {String} Aggregate
     * @param active {Boolean} Is Active flag
     * @param reusable {Boolean} Is reusable flag
     * @param createdAt {String} Created Date in ISO-8601 format e.g. 2022-05-06T02:39:23.000Z
     * @param updatedAt {String} Updated Date in ISO-8601 format e.g. 2022-05-06T02:39:23.000Z
     */
    constructor(couponCode, aggregate, active, reusable, createdAt, updatedAt) { 
        
        SubscriberInvite.initialize(this, couponCode, aggregate, active, reusable, createdAt, updatedAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, couponCode, aggregate, active, reusable, createdAt, updatedAt) { 
        obj['coupon_code'] = couponCode;
        obj['aggregate'] = aggregate;
        obj['active'] = active;
        obj['reusable'] = reusable;
        obj['createdAt'] = createdAt;
        obj['updatedAt'] = updatedAt;
    }

    /**
     * Constructs a <code>SubscriberInvite</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubscriberInvite} obj Optional instance to populate.
     * @return {module:model/SubscriberInvite} The populated <code>SubscriberInvite</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubscriberInvite();

            if (data.hasOwnProperty('coupon_options')) {
                obj['coupon_options'] = CouponOptions.constructFromObject(data['coupon_options']);
            }
            if (data.hasOwnProperty('plan')) {
                obj['plan'] = Plan.constructFromObject(data['plan']);
            }
            if (data.hasOwnProperty('trial')) {
                obj['trial'] = Trial.constructFromObject(data['trial']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('coupon_code')) {
                obj['coupon_code'] = ApiClient.convertToType(data['coupon_code'], 'String');
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
            if (data.hasOwnProperty('aggregate')) {
                obj['aggregate'] = ApiClient.convertToType(data['aggregate'], 'String');
            }
            if (data.hasOwnProperty('use_by')) {
                obj['use_by'] = ApiClient.convertToType(data['use_by'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('reusable')) {
                obj['reusable'] = ApiClient.convertToType(data['reusable'], 'Boolean');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SubscriberInvite</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SubscriberInvite</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SubscriberInvite.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `coupon_options`
        if (data['coupon_options']) { // data not null
          CouponOptions.validateJSON(data['coupon_options']);
        }
        // validate the optional field `plan`
        if (data['plan']) { // data not null
          Plan.validateJSON(data['plan']);
        }
        // validate the optional field `trial`
        if (data['trial']) { // data not null
          Trial.validateJSON(data['trial']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['coupon_code'] && !(typeof data['coupon_code'] === 'string' || data['coupon_code'] instanceof String)) {
            throw new Error("Expected the field `coupon_code` to be a primitive type in the JSON string but got " + data['coupon_code']);
        }
        // ensure the json data is a string
        if (data['domain'] && !(typeof data['domain'] === 'string' || data['domain'] instanceof String)) {
            throw new Error("Expected the field `domain` to be a primitive type in the JSON string but got " + data['domain']);
        }
        // ensure the json data is a string
        if (data['aggregate'] && !(typeof data['aggregate'] === 'string' || data['aggregate'] instanceof String)) {
            throw new Error("Expected the field `aggregate` to be a primitive type in the JSON string but got " + data['aggregate']);
        }
        // ensure the json data is a string
        if (data['use_by'] && !(typeof data['use_by'] === 'string' || data['use_by'] instanceof String)) {
            throw new Error("Expected the field `use_by` to be a primitive type in the JSON string but got " + data['use_by']);
        }
        // ensure the json data is a string
        if (data['createdAt'] && !(typeof data['createdAt'] === 'string' || data['createdAt'] instanceof String)) {
            throw new Error("Expected the field `createdAt` to be a primitive type in the JSON string but got " + data['createdAt']);
        }
        // ensure the json data is a string
        if (data['updatedAt'] && !(typeof data['updatedAt'] === 'string' || data['updatedAt'] instanceof String)) {
            throw new Error("Expected the field `updatedAt` to be a primitive type in the JSON string but got " + data['updatedAt']);
        }

        return true;
    }


}

SubscriberInvite.RequiredProperties = ["coupon_code", "aggregate", "active", "reusable", "createdAt", "updatedAt"];

/**
 * @member {module:model/CouponOptions} coupon_options
 */
SubscriberInvite.prototype['coupon_options'] = undefined;

/**
 * @member {module:model/Plan} plan
 */
SubscriberInvite.prototype['plan'] = undefined;

/**
 * @member {module:model/Trial} trial
 */
SubscriberInvite.prototype['trial'] = undefined;

/**
 * Name
 * @member {String} name
 */
SubscriberInvite.prototype['name'] = undefined;

/**
 * Email
 * @member {String} email
 */
SubscriberInvite.prototype['email'] = undefined;

/**
 * Coupon code
 * @member {String} coupon_code
 */
SubscriberInvite.prototype['coupon_code'] = undefined;

/**
 * Domain
 * @member {String} domain
 */
SubscriberInvite.prototype['domain'] = undefined;

/**
 * Aggregate
 * @member {String} aggregate
 */
SubscriberInvite.prototype['aggregate'] = undefined;

/**
 * Used By
 * @member {String} use_by
 */
SubscriberInvite.prototype['use_by'] = undefined;

/**
 * Is Active flag
 * @member {Boolean} active
 */
SubscriberInvite.prototype['active'] = undefined;

/**
 * Is reusable flag
 * @member {Boolean} reusable
 */
SubscriberInvite.prototype['reusable'] = undefined;

/**
 * Created Date in ISO-8601 format e.g. 2022-05-06T02:39:23.000Z
 * @member {String} createdAt
 */
SubscriberInvite.prototype['createdAt'] = undefined;

/**
 * Updated Date in ISO-8601 format e.g. 2022-05-06T02:39:23.000Z
 * @member {String} updatedAt
 */
SubscriberInvite.prototype['updatedAt'] = undefined;






export default SubscriberInvite;


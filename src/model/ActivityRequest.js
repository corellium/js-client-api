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
 * The ActivityRequest model module.
 * @module model/ActivityRequest
 * @version 0.4.0
 */
class ActivityRequest {
    /**
     * Constructs a new <code>ActivityRequest</code>.
     * 
     * @alias module:model/ActivityRequest
     */
    constructor() { 
        
        ActivityRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActivityRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActivityRequest} obj Optional instance to populate.
     * @return {module:model/ActivityRequest} The populated <code>ActivityRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActivityRequest();

            if (data.hasOwnProperty('resource')) {
                obj['resource'] = ApiClient.convertToType(data['resource'], 'String');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('orderBy')) {
                obj['orderBy'] = ApiClient.convertToType(data['orderBy'], 'String');
            }
            if (data.hasOwnProperty('page')) {
                obj['page'] = ApiClient.convertToType(data['page'], 'Number');
            }
            if (data.hasOwnProperty('instance')) {
                obj['instance'] = ApiClient.convertToType(data['instance'], 'String');
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = ApiClient.convertToType(data['project'], 'String');
            }
            if (data.hasOwnProperty('actor')) {
                obj['actor'] = ApiClient.convertToType(data['actor'], 'String');
            }
            if (data.hasOwnProperty('search')) {
                obj['search'] = ApiClient.convertToType(data['search'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'String');
            }
            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ActivityRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ActivityRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['resource'] && !(typeof data['resource'] === 'string' || data['resource'] instanceof String)) {
            throw new Error("Expected the field `resource` to be a primitive type in the JSON string but got " + data['resource']);
        }
        // ensure the json data is a string
        if (data['orderBy'] && !(typeof data['orderBy'] === 'string' || data['orderBy'] instanceof String)) {
            throw new Error("Expected the field `orderBy` to be a primitive type in the JSON string but got " + data['orderBy']);
        }
        // ensure the json data is a string
        if (data['instance'] && !(typeof data['instance'] === 'string' || data['instance'] instanceof String)) {
            throw new Error("Expected the field `instance` to be a primitive type in the JSON string but got " + data['instance']);
        }
        // ensure the json data is a string
        if (data['project'] && !(typeof data['project'] === 'string' || data['project'] instanceof String)) {
            throw new Error("Expected the field `project` to be a primitive type in the JSON string but got " + data['project']);
        }
        // ensure the json data is a string
        if (data['actor'] && !(typeof data['actor'] === 'string' || data['actor'] instanceof String)) {
            throw new Error("Expected the field `actor` to be a primitive type in the JSON string but got " + data['actor']);
        }
        // ensure the json data is a string
        if (data['search'] && !(typeof data['search'] === 'string' || data['search'] instanceof String)) {
            throw new Error("Expected the field `search` to be a primitive type in the JSON string but got " + data['search']);
        }
        // ensure the json data is a string
        if (data['to'] && !(typeof data['to'] === 'string' || data['to'] instanceof String)) {
            throw new Error("Expected the field `to` to be a primitive type in the JSON string but got " + data['to']);
        }
        // ensure the json data is a string
        if (data['from'] && !(typeof data['from'] === 'string' || data['from'] instanceof String)) {
            throw new Error("Expected the field `from` to be a primitive type in the JSON string but got " + data['from']);
        }

        return true;
    }


}



/**
 * Resource filter
 * @member {String} resource
 */
ActivityRequest.prototype['resource'] = undefined;

/**
 * Number of entries to return, defaults to 10
 * @member {Number} limit
 */
ActivityRequest.prototype['limit'] = undefined;

/**
 * Sorting order ('-createdAt' or 'createdAt')
 * @member {String} orderBy
 */
ActivityRequest.prototype['orderBy'] = undefined;

/**
 * Paginated results. Must be a positive integer. If not provided, defaults to the first page.
 * @member {Number} page
 */
ActivityRequest.prototype['page'] = undefined;

/**
 * Instance identifier used to filter instance resources
 * @member {String} instance
 */
ActivityRequest.prototype['instance'] = undefined;

/**
 * Instance identifier used to filter instance resources
 * @member {String} project
 */
ActivityRequest.prototype['project'] = undefined;

/**
 * Actor identifier used to filter actor resources
 * @member {String} actor
 */
ActivityRequest.prototype['actor'] = undefined;

/**
 * Last filter applied and is a fuzzy match on results
 * @member {String} search
 */
ActivityRequest.prototype['search'] = undefined;

/**
 * Date to filter to, keyed off of createdAt, defaults to now
 * @member {String} to
 */
ActivityRequest.prototype['to'] = undefined;

/**
 * Date to filter from, keyed off of createdAt, defaults to 1 week ago
 * @member {String} from
 */
ActivityRequest.prototype['from'] = undefined;






export default ActivityRequest;


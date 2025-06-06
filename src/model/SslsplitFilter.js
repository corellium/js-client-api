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
 * The SslsplitFilter model module.
 * @module model/SslsplitFilter
 * @version 0.4.1
 */
class SslsplitFilter {
    /**
     * Constructs a new <code>SslsplitFilter</code>.
     * 
     * @alias module:model/SslsplitFilter
     */
    constructor() { 
        
        SslsplitFilter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SslsplitFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SslsplitFilter} obj Optional instance to populate.
     * @return {module:model/SslsplitFilter} The populated <code>SslsplitFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SslsplitFilter();

            if (data.hasOwnProperty('truncatePcap')) {
                obj['truncatePcap'] = ApiClient.convertToType(data['truncatePcap'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SslsplitFilter</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SslsplitFilter</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * 
 * @member {Boolean} truncatePcap
 */
SslsplitFilter.prototype['truncatePcap'] = undefined;






export default SslsplitFilter;


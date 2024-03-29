/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * The version of the OpenAPI document: 5.2.0-17368
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import TrialExtension from './TrialExtension';

/**
 * The DomainOptions model module.
 * @module model/DomainOptions
 * @version 0.3.3
 */
class DomainOptions {
    /**
     * Constructs a new <code>DomainOptions</code>.
     * 
     * @alias module:model/DomainOptions
     */
    constructor() { 
        
        DomainOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DomainOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DomainOptions} obj Optional instance to populate.
     * @return {module:model/DomainOptions} The populated <code>DomainOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DomainOptions();

            if (data.hasOwnProperty('totpRequired')) {
                obj['totpRequired'] = ApiClient.convertToType(data['totpRequired'], 'Boolean');
            }
            if (data.hasOwnProperty('trialExtension')) {
                obj['trialExtension'] = TrialExtension.constructFromObject(data['trialExtension']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DomainOptions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DomainOptions</code>.
     */
    static validateJSON(data) {
        // validate the optional field `trialExtension`
        if (data['trialExtension']) { // data not null
          TrialExtension.validateJSON(data['trialExtension']);
        }

        return true;
    }


}



/**
 * if true, totp is required
 * @member {Boolean} totpRequired
 */
DomainOptions.prototype['totpRequired'] = undefined;

/**
 * @member {module:model/TrialExtension} trialExtension
 */
DomainOptions.prototype['trialExtension'] = undefined;






export default DomainOptions;


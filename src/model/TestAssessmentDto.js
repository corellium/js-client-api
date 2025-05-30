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
 * The TestAssessmentDto model module.
 * @module model/TestAssessmentDto
 * @version 0.4.1
 */
class TestAssessmentDto {
    /**
     * Constructs a new <code>TestAssessmentDto</code>.
     * @alias module:model/TestAssessmentDto
     */
    constructor() { 
        
        TestAssessmentDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TestAssessmentDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestAssessmentDto} obj Optional instance to populate.
     * @return {module:model/TestAssessmentDto} The populated <code>TestAssessmentDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TestAssessmentDto();

            if (data.hasOwnProperty('invert')) {
                obj['invert'] = ApiClient.convertToType(data['invert'], 'Boolean');
            }
            if (data.hasOwnProperty('grep')) {
                obj['grep'] = ApiClient.convertToType(data['grep'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TestAssessmentDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestAssessmentDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['grep'] && !(typeof data['grep'] === 'string' || data['grep'] instanceof String)) {
            throw new Error("Expected the field `grep` to be a primitive type in the JSON string but got " + data['grep']);
        }

        return true;
    }


}



/**
 * @member {Boolean} invert
 */
TestAssessmentDto.prototype['invert'] = undefined;

/**
 * @member {String} grep
 */
TestAssessmentDto.prototype['grep'] = undefined;






export default TestAssessmentDto;


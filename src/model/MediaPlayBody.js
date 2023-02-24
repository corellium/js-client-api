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

/**
 * The MediaPlayBody model module.
 * @module model/MediaPlayBody
 * @version 0.2.0
 */
class MediaPlayBody {
    /**
     * Constructs a new <code>MediaPlayBody</code>.
     * 
     * @alias module:model/MediaPlayBody
     */
    constructor() { 
        
        MediaPlayBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MediaPlayBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MediaPlayBody} obj Optional instance to populate.
     * @return {module:model/MediaPlayBody} The populated <code>MediaPlayBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MediaPlayBody();

            if (data.hasOwnProperty('imageId')) {
                obj['imageId'] = ApiClient.convertToType(data['imageId'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MediaPlayBody</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MediaPlayBody</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['imageId'] && !(typeof data['imageId'] === 'string' || data['imageId'] instanceof String)) {
            throw new Error("Expected the field `imageId` to be a primitive type in the JSON string but got " + data['imageId']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}



/**
 * Image ID
 * @member {String} imageId
 */
MediaPlayBody.prototype['imageId'] = undefined;

/**
 * URL to a media file
 * @member {String} url
 */
MediaPlayBody.prototype['url'] = undefined;






export default MediaPlayBody;


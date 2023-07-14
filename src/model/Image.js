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

/**
 * The Image model module.
 * @module model/Image
 * @version 0.3.3
 */
class Image {
    /**
     * Constructs a new <code>Image</code>.
     * 
     * @alias module:model/Image
     * @param status {String} 
     */
    constructor(status) { 
        
        Image.initialize(this, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, status) { 
        obj['status'] = status;
    }

    /**
     * Constructs a <code>Image</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Image} obj Optional instance to populate.
     * @return {module:model/Image} The populated <code>Image</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Image();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('filename')) {
                obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
            }
            if (data.hasOwnProperty('uniqueid')) {
                obj['uniqueid'] = ApiClient.convertToType(data['uniqueid'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = ApiClient.convertToType(data['project'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Image</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Image</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Image.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['filename'] && !(typeof data['filename'] === 'string' || data['filename'] instanceof String)) {
            throw new Error("Expected the field `filename` to be a primitive type in the JSON string but got " + data['filename']);
        }
        // ensure the json data is a string
        if (data['uniqueid'] && !(typeof data['uniqueid'] === 'string' || data['uniqueid'] instanceof String)) {
            throw new Error("Expected the field `uniqueid` to be a primitive type in the JSON string but got " + data['uniqueid']);
        }
        // ensure the json data is a string
        if (data['project'] && !(typeof data['project'] === 'string' || data['project'] instanceof String)) {
            throw new Error("Expected the field `project` to be a primitive type in the JSON string but got " + data['project']);
        }

        return true;
    }


}

Image.RequiredProperties = ["status"];

/**
 * 
 * @member {String} status
 */
Image.prototype['status'] = undefined;

/**
 * Image ID
 * @member {String} id
 */
Image.prototype['id'] = undefined;

/**
 * 
 * @member {String} name
 */
Image.prototype['name'] = undefined;

/**
 * Type of image
 * @member {module:model/Image.TypeEnum} type
 */
Image.prototype['type'] = undefined;

/**
 * 
 * @member {String} filename
 */
Image.prototype['filename'] = undefined;

/**
 * 
 * @member {String} uniqueid
 */
Image.prototype['uniqueid'] = undefined;

/**
 * 
 * @member {Number} size
 */
Image.prototype['size'] = undefined;

/**
 * project ID
 * @member {String} project
 */
Image.prototype['project'] = undefined;

/**
 * When Image was created
 * @member {Date} created_at
 */
Image.prototype['created_at'] = undefined;

/**
 * When Image was last updated
 * @member {Date} updated_at
 */
Image.prototype['updated_at'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Image['TypeEnum'] = {

    /**
     * value: "fwbinary"
     * @const
     */
    "fwbinary": "fwbinary",

    /**
     * value: "kernel"
     * @const
     */
    "kernel": "kernel",

    /**
     * value: "devicetree"
     * @const
     */
    "devicetree": "devicetree",

    /**
     * value: "ramdisk"
     * @const
     */
    "ramdisk": "ramdisk",

    /**
     * value: "loaderfile"
     * @const
     */
    "loaderfile": "loaderfile",

    /**
     * value: "sepfw"
     * @const
     */
    "sepfw": "sepfw",

    /**
     * value: "seprom"
     * @const
     */
    "seprom": "seprom",

    /**
     * value: "bootrom"
     * @const
     */
    "bootrom": "bootrom",

    /**
     * value: "llb"
     * @const
     */
    "llb": "llb",

    /**
     * value: "iboot"
     * @const
     */
    "iboot": "iboot",

    /**
     * value: "ibootdata"
     * @const
     */
    "ibootdata": "ibootdata",

    /**
     * value: "fwpackage"
     * @const
     */
    "fwpackage": "fwpackage",

    /**
     * value: "partition"
     * @const
     */
    "partition": "partition",

    /**
     * value: "backup"
     * @const
     */
    "backup": "backup"
};



export default Image;


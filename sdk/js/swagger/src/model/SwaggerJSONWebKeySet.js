/**
 * ORY Oathkeeper
 * ORY Oathkeeper is a reverse proxy that checks the HTTP Authorization for validity against a set of rules. This service uses Hydra to validate access tokens and policies.
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/SwaggerJSONWebKey'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SwaggerJSONWebKey'));
  } else {
    // Browser globals (root is window)
    if (!root.OryOathkeeper) {
      root.OryOathkeeper = {};
    }
    root.OryOathkeeper.SwaggerJSONWebKeySet = factory(root.OryOathkeeper.ApiClient, root.OryOathkeeper.SwaggerJSONWebKey);
  }
}(this, function(ApiClient, SwaggerJSONWebKey) {
  'use strict';




  /**
   * The SwaggerJSONWebKeySet model module.
   * @module model/SwaggerJSONWebKeySet
   * @version Latest
   */

  /**
   * Constructs a new <code>SwaggerJSONWebKeySet</code>.
   * SwaggerJSONWebKeySet swagger JSON web key set
   * @alias module:model/SwaggerJSONWebKeySet
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SwaggerJSONWebKeySet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SwaggerJSONWebKeySet} obj Optional instance to populate.
   * @return {module:model/SwaggerJSONWebKeySet} The populated <code>SwaggerJSONWebKeySet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('keys')) {
        obj['keys'] = ApiClient.convertToType(data['keys'], [SwaggerJSONWebKey]);
      }
    }
    return obj;
  }

  /**
   * The value of the \"keys\" parameter is an array of JWK values.  By default, the order of the JWK values within the array does not imply an order of preference among them, although applications of JWK Sets can choose to assign a meaning to the order for their purposes, if desired.
   * @member {Array.<module:model/SwaggerJSONWebKey>} keys
   */
  exports.prototype['keys'] = undefined;



  return exports;
}));


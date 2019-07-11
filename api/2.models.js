/**
 * @api {get} /cars/models?make=:make
 * @apiVersion 1.0.0
 * @apiName GetModel
 * @apiGroup Model
 *
 * @apiHeader {String} Authorization  User basic auth token.
 * @apiHeader {String} Content-Type   Content type
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Basic XXXXXXXXXXXXXXXXXXXXXX"
 *       "Content-Type":  "application/vnd.api+json"
 *     }
 *
 * @apiParam {Number} make Make code.
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost/cars/models?make=460
 *
 *  @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "links": {
 *          "self": "http://localhost/cars/models?make=460"
 *        },
 *        "data": [
 *           { "type": "model", "attributes": { "name": "360" } },
 *           { "type": "model", "attributes": { "name": "550" } },
 *           { "type": "model", "attributes": { "name": "430" } },
 *           { "type": "model", "attributes": { "name": "599" } },
 *           { "type": "model", "attributes": { "name": "612" } },
 *           { "type": "model", "attributes": { "name": "California" } },
 *           { "type": "model", "attributes": { "name": "456" } },
 *           { "type": "model", "attributes": { "name": "458" } },
 *           { "type": "model", "attributes": { "name": "575" } },
 *           { "type": "model", "attributes": { "name": "FF" } },
 *           { "type": "model", "attributes": { "name": "F12 Berlinetta" } }
 *        ]
 *     }
 */
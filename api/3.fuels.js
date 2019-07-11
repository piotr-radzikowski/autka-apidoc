/**
 * @api {get} /cars/fuels?make=:make&model=:model
 * @apiVersion 1.0.0
 * @apiName GetFuel
 * @apiGroup Fuel
 *
 * @apiHeader {String} Authorization  User basic auth token.
 * @apiHeader {String} Content-Type   Content type
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Basic XXXXXXXXXXXXXXXXXXXXXX"
 *       "Content-Type":  "application/vnd.api+json"
 *     }
 *
 *
 * @apiParam {Number} make Make code.
 * @apiParam {Number} model Model code.
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost/cars/fuels?make=460&model=360
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "links": {
 *          "self": "http://localhost/cars/fuels?make=460&model=360"
 *        },
 *        "data": [
 *           { "type": "fuel", "attributes": { "code": "100001", "name": "Benzyna" } }
 *        ]
 *     }
 */

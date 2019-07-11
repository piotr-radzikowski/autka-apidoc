/**
 * @api {get} /cars/years?make=:make&model=:model&fuel=:fuel
 * @apiVersion 1.0.0
 * @apiName GetYear
 * @apiGroup Year
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
 * @apiParam {Number} fuel Year code.
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost/cars/fuels?make=460&model=360&fuels=100001
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "links": {
 *          "self": "http://localhost/cars/years?make=460&model=360&fuels=100001"
 *        },
 *        "data": [
 *           { "type": "year", "attributes": { "value": "2000" } }
 *           { "type": "year", "attributes": { "value": "2001" } }
 *        ]
 *     }
 */

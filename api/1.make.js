/**
 * @api {get} /cars/makes
 * @apiVersion 1.0.0
 * @apiName GetMake
 * @apiGroup Make
 *
 * @apiHeader {String} Authorization  User basic auth token.
 * @apiHeader {String} Content-Type   Content type
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Basic XXXXXXXXXXXXXXXXXXXXXX"
 *       "Content-Type":  "application/vnd.api+json"
 *     }
 *
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost/cars/makes
 *
 *  @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "links": {
 *          "self": "http://localhost/cars/makes"
 *        },
 *        "data": [
 *           { "type": "make", "attributes": { "code": "460", "name": "FERRARI" } },
 *           { "type": "make", "attributes": { "code": "370", "name": "FORD (USA)" } }
 *        ]
 *     }
 */
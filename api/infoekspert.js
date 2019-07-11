/**
 * @api {get} /cars/infoekspertList?make=:make&model=:model&fuel=:fuel&year=:year
 * @apiVersion 1.0.0
 * @apiName GetInfoekspert
 * @apiGroup Infoekspert
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
 * @apiParam {Number} fuel Fuel code.
 * @apiParam {Number} year car production year.
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost/cars/infoekspertList?make=460&model=360&fuels=100001&year=2001
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "links": {
 *          "self": "http://localhost/cars/infoekspertList?make=460&model=360&fuels=100001&year=2001"
 *        },
 *        "data": [
 *           { "type": "infoekspert",
 *             "attributes": { ... }
 *           },
 *           { "type": "infoekspert",
 *             "attributes": { ... }
 *           }
 *        ]
 *     }
 */


 /**
 * @api {get} /cars/infoekspertList?year=:year&eurotax=:eurotax
 * @apiVersion 1.0.0
 * @apiName GetEurotaxFromInfoekspert
 * @apiGroup Eurotax
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
 * @apiParam {Number} year car production year.
 * @apiParam {Number} eurotax car id in eurotax.
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost/cars/infoekspertList?year=2001&eurotax=123
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "links": {
 *          "self": "http://localhost/cars/infoekspertList?year=2001&eurotax=123"
 *        },
 *        "data": [ ]
 *     }
 */

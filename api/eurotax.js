/**
 * @api {get} /cars/eurotaxList?make=:make&model=:model&fuel=:fuel&year=:year
 * @apiVersion 1.0.0
 * @apiName GetEurotax
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
 * @apiParam {Number} make Make code.
 * @apiParam {Number} model Model code.
 * @apiParam {Number} fuel Fuel code.
 * @apiParam {Number} year car production year.
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost/cars/eurotaxList?make=460&model=360&fuels=100001
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "links": {
 *          "self": "http://localhost/cars/eurotaxList?make=460&model=360&fuels=100001"
 *        },
 *        "data": [
 *           {
 *             "type": "eurotax",
 *             "attributes": {
 *                "make_code": "460",
 *                "make_name": "FERRARI",
 *                "model_name": "360",
 *                "type_code": "93155",
 *                "type_name": "360 Spider F1",
 *                "begin_year": "2000",
 *                "end_year": "2005",
 *                "type_begin_year": "2000",
 *                "type_end_year": "2005",
 *                "body_code": "10004",
 *                "body_sort": "95",
 *                "body_name": "Kabriolet",
 *                "doors": "2",
 *                "engine_capacity": "3.6",
 *                "power_kw": "294",
 *                "power_hp": "400",
 *                "fuel_code": "100001",
 *                "fuel_name": "Benzyna",
 *                "info_symbol": "O"
 *              }
 *           },
 *           {
 *             "type": "eurotax",
 *             "attributes": {
 *                "make_code": "460",
 *                "make_name": "FERRARI",
 *                "model_name": "360",
 *                "type_code": "93153",
 *                "type_name": "360 Challenge Stradale F1",
 *                "begin_year": "1999",
 *                "end_year": "2005",
 *                "type_begin_year": "2003",
 *                "type_end_year": "2005",
 *                "body_code": "10003",
 *                "body_sort": "90",
 *                "body_name": "Coupe",
 *                "doors": "2",
 *                "engine_capacity": "3.6",
 *                "power_kw": "313",
 *                "power_hp": "425",
 *                "fuel_code": "100001",
 *                "fuel_name": "Benzyna",
 *                "info_symbol": "O"
 *              }
 *           }
 *        ]
 *     }
 */


 /**
 * @api {get} /cars/eurotaxList?year=:year&infoekspert=:infoekspert
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
 * @apiParam {Number} infoekspert car id in infoekspert.
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost/cars/eurotaxList?year=2001&infoekspert=123
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "links": {
 *          "self": "http://localhost/cars/eurotaxList?year=2001&infoekspert=123"
 *        },
 *        "data": [
 *           {
 *             "type": "eurotax",
 *             "attributes": {
 *                "make_code": "460",
 *                "make_name": "FERRARI",
 *                "model_name": "360",
 *                "type_code": "93155",
 *                "type_name": "360 Spider F1",
 *                "begin_year": "2000",
 *                "end_year": "2005",
 *                "type_begin_year": "2000",
 *                "type_end_year": "2005",
 *                "body_code": "10004",
 *                "body_sort": "95",
 *                "body_name": "Kabriolet",
 *                "doors": "2",
 *                "engine_capacity": "3.6",
 *                "power_kw": "294",
 *                "power_hp": "400",
 *                "fuel_code": "100001",
 *                "fuel_name": "Benzyna",
 *                "info_symbol": "O"
 *              }
 *           },
 *           {
 *             "type": "eurotax",
 *             "attributes": {
 *                "make_code": "460",
 *                "make_name": "FERRARI",
 *                "model_name": "360",
 *                "type_code": "93153",
 *                "type_name": "360 Challenge Stradale F1",
 *                "begin_year": "1999",
 *                "end_year": "2005",
 *                "type_begin_year": "2003",
 *                "type_end_year": "2005",
 *                "body_code": "10003",
 *                "body_sort": "90",
 *                "body_name": "Coupe",
 *                "doors": "2",
 *                "engine_capacity": "3.6",
 *                "power_kw": "313",
 *                "power_hp": "425",
 *                "fuel_code": "100001",
 *                "fuel_name": "Benzyna",
 *                "info_symbol": "O"
 *              }
 *           }
 *        ]
 *     }
 */

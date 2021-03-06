define({ "api": [
  {
    "type": "get",
    "url": "/cars/eurotaxList?make=:make&model=:model&fuel=:fuel&year=:year",
    "title": "",
    "version": "1.0.0",
    "name": "GetEurotax",
    "group": "Eurotax",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User basic auth token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Basic XXXXXXXXXXXXXXXXXXXXXX\"\n  \"Content-Type\":  \"application/vnd.api+json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "make",
            "description": "<p>Make code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "model",
            "description": "<p>Model code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fuel",
            "description": "<p>Fuel code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "year",
            "description": "<p>car production year.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/cars/eurotaxList?make=460&model=360&fuels=100001",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"links\": {\n     \"self\": \"http://localhost/cars/eurotaxList?make=460&model=360&fuels=100001\"\n   },\n   \"data\": [\n      {\n        \"type\": \"eurotax\",\n        \"attributes\": {\n           \"make_code\": \"460\",\n           \"make_name\": \"FERRARI\",\n           \"model_name\": \"360\",\n           \"type_code\": \"93155\",\n           \"type_name\": \"360 Spider F1\",\n           \"begin_year\": \"2000\",\n           \"end_year\": \"2005\",\n           \"type_begin_year\": \"2000\",\n           \"type_end_year\": \"2005\",\n           \"body_code\": \"10004\",\n           \"body_sort\": \"95\",\n           \"body_name\": \"Kabriolet\",\n           \"doors\": \"2\",\n           \"engine_capacity\": \"3.6\",\n           \"power_kw\": \"294\",\n           \"power_hp\": \"400\",\n           \"fuel_code\": \"100001\",\n           \"fuel_name\": \"Benzyna\",\n           \"info_symbol\": \"O\"\n         }\n      },\n      {\n        \"type\": \"eurotax\",\n        \"attributes\": {\n           \"make_code\": \"460\",\n           \"make_name\": \"FERRARI\",\n           \"model_name\": \"360\",\n           \"type_code\": \"93153\",\n           \"type_name\": \"360 Challenge Stradale F1\",\n           \"begin_year\": \"1999\",\n           \"end_year\": \"2005\",\n           \"type_begin_year\": \"2003\",\n           \"type_end_year\": \"2005\",\n           \"body_code\": \"10003\",\n           \"body_sort\": \"90\",\n           \"body_name\": \"Coupe\",\n           \"doors\": \"2\",\n           \"engine_capacity\": \"3.6\",\n           \"power_kw\": \"313\",\n           \"power_hp\": \"425\",\n           \"fuel_code\": \"100001\",\n           \"fuel_name\": \"Benzyna\",\n           \"info_symbol\": \"O\"\n         }\n      }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/eurotax.js",
    "groupTitle": "Eurotax"
  },
  {
    "type": "get",
    "url": "/cars/eurotaxList?year=:year&infoekspert=:infoekspert",
    "title": "",
    "version": "1.0.0",
    "name": "GetEurotaxFromInfoekspert",
    "group": "Eurotax",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User basic auth token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Basic XXXXXXXXXXXXXXXXXXXXXX\"\n  \"Content-Type\":  \"application/vnd.api+json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "year",
            "description": "<p>car production year.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "infoekspert",
            "description": "<p>car id in infoekspert.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/cars/eurotaxList?year=2001&infoekspert=123",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"links\": {\n     \"self\": \"http://localhost/cars/eurotaxList?year=2001&infoekspert=123\"\n   },\n   \"data\": [\n      {\n        \"type\": \"eurotax\",\n        \"attributes\": {\n           \"make_code\": \"460\",\n           \"make_name\": \"FERRARI\",\n           \"model_name\": \"360\",\n           \"type_code\": \"93155\",\n           \"type_name\": \"360 Spider F1\",\n           \"begin_year\": \"2000\",\n           \"end_year\": \"2005\",\n           \"type_begin_year\": \"2000\",\n           \"type_end_year\": \"2005\",\n           \"body_code\": \"10004\",\n           \"body_sort\": \"95\",\n           \"body_name\": \"Kabriolet\",\n           \"doors\": \"2\",\n           \"engine_capacity\": \"3.6\",\n           \"power_kw\": \"294\",\n           \"power_hp\": \"400\",\n           \"fuel_code\": \"100001\",\n           \"fuel_name\": \"Benzyna\",\n           \"info_symbol\": \"O\"\n         }\n      },\n      {\n        \"type\": \"eurotax\",\n        \"attributes\": {\n           \"make_code\": \"460\",\n           \"make_name\": \"FERRARI\",\n           \"model_name\": \"360\",\n           \"type_code\": \"93153\",\n           \"type_name\": \"360 Challenge Stradale F1\",\n           \"begin_year\": \"1999\",\n           \"end_year\": \"2005\",\n           \"type_begin_year\": \"2003\",\n           \"type_end_year\": \"2005\",\n           \"body_code\": \"10003\",\n           \"body_sort\": \"90\",\n           \"body_name\": \"Coupe\",\n           \"doors\": \"2\",\n           \"engine_capacity\": \"3.6\",\n           \"power_kw\": \"313\",\n           \"power_hp\": \"425\",\n           \"fuel_code\": \"100001\",\n           \"fuel_name\": \"Benzyna\",\n           \"info_symbol\": \"O\"\n         }\n      }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/eurotax.js",
    "groupTitle": "Eurotax"
  },
  {
    "type": "get",
    "url": "/cars/infoekspertList?year=:year&eurotax=:eurotax",
    "title": "",
    "version": "1.0.0",
    "name": "GetEurotaxFromInfoekspert",
    "group": "Eurotax",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User basic auth token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Basic XXXXXXXXXXXXXXXXXXXXXX\"\n  \"Content-Type\":  \"application/vnd.api+json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "year",
            "description": "<p>car production year.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "eurotax",
            "description": "<p>car id in eurotax.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/cars/infoekspertList?year=2001&eurotax=123",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"links\": {\n     \"self\": \"http://localhost/cars/infoekspertList?year=2001&eurotax=123\"\n   },\n   \"data\": [ ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/infoekspert.js",
    "groupTitle": "Eurotax"
  },
  {
    "type": "get",
    "url": "/cars/fuels?make=:make&model=:model",
    "title": "",
    "version": "1.0.0",
    "name": "GetFuel",
    "group": "Fuel",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User basic auth token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Basic XXXXXXXXXXXXXXXXXXXXXX\"\n  \"Content-Type\":  \"application/vnd.api+json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "make",
            "description": "<p>Make code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "model",
            "description": "<p>Model code.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/cars/fuels?make=460&model=360",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"links\": {\n     \"self\": \"http://localhost/cars/fuels?make=460&model=360\"\n   },\n   \"data\": [\n      { \"type\": \"fuel\", \"attributes\": { \"code\": \"100001\", \"name\": \"Benzyna\" } }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/3.fuels.js",
    "groupTitle": "Fuel"
  },
  {
    "type": "get",
    "url": "/cars/infoekspertList?make=:make&model=:model&fuel=:fuel&year=:year",
    "title": "",
    "version": "1.0.0",
    "name": "GetInfoekspert",
    "group": "Infoekspert",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User basic auth token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Basic XXXXXXXXXXXXXXXXXXXXXX\"\n  \"Content-Type\":  \"application/vnd.api+json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "make",
            "description": "<p>Make code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "model",
            "description": "<p>Model code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fuel",
            "description": "<p>Fuel code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "year",
            "description": "<p>car production year.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/cars/infoekspertList?make=460&model=360&fuels=100001&year=2001",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"links\": {\n     \"self\": \"http://localhost/cars/infoekspertList?make=460&model=360&fuels=100001&year=2001\"\n   },\n   \"data\": [\n      { \"type\": \"infoekspert\",\n        \"attributes\": { ... }\n      },\n      { \"type\": \"infoekspert\",\n        \"attributes\": { ... }\n      }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/infoekspert.js",
    "groupTitle": "Infoekspert"
  },
  {
    "type": "get",
    "url": "/cars/makes",
    "title": "",
    "version": "1.0.0",
    "name": "GetMake",
    "group": "Make",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User basic auth token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Basic XXXXXXXXXXXXXXXXXXXXXX\"\n  \"Content-Type\":  \"application/vnd.api+json\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/cars/makes",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"links\": {\n     \"self\": \"http://localhost/cars/makes\"\n   },\n   \"data\": [\n      { \"type\": \"make\", \"attributes\": { \"code\": \"460\", \"name\": \"FERRARI\" } },\n      { \"type\": \"make\", \"attributes\": { \"code\": \"370\", \"name\": \"FORD (USA)\" } }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/1.make.js",
    "groupTitle": "Make"
  },
  {
    "type": "get",
    "url": "/cars/models?make=:make",
    "title": "",
    "version": "1.0.0",
    "name": "GetModel",
    "group": "Model",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User basic auth token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Basic XXXXXXXXXXXXXXXXXXXXXX\"\n  \"Content-Type\":  \"application/vnd.api+json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "make",
            "description": "<p>Make code.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/cars/models?make=460",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"links\": {\n     \"self\": \"http://localhost/cars/models?make=460\"\n   },\n   \"data\": [\n      { \"type\": \"model\", \"attributes\": { \"name\": \"360\" } },\n      { \"type\": \"model\", \"attributes\": { \"name\": \"550\" } },\n      { \"type\": \"model\", \"attributes\": { \"name\": \"430\" } },\n      { \"type\": \"model\", \"attributes\": { \"name\": \"599\" } },\n      { \"type\": \"model\", \"attributes\": { \"name\": \"612\" } },\n      { \"type\": \"model\", \"attributes\": { \"name\": \"California\" } },\n      { \"type\": \"model\", \"attributes\": { \"name\": \"456\" } },\n      { \"type\": \"model\", \"attributes\": { \"name\": \"458\" } },\n      { \"type\": \"model\", \"attributes\": { \"name\": \"575\" } },\n      { \"type\": \"model\", \"attributes\": { \"name\": \"FF\" } },\n      { \"type\": \"model\", \"attributes\": { \"name\": \"F12 Berlinetta\" } }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/2.models.js",
    "groupTitle": "Model"
  },
  {
    "type": "get",
    "url": "/cars/years?make=:make&model=:model&fuel=:fuel",
    "title": "",
    "version": "1.0.0",
    "name": "GetYear",
    "group": "Year",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User basic auth token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Basic XXXXXXXXXXXXXXXXXXXXXX\"\n  \"Content-Type\":  \"application/vnd.api+json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "make",
            "description": "<p>Make code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "model",
            "description": "<p>Model code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fuel",
            "description": "<p>Year code.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/cars/fuels?make=460&model=360&fuels=100001",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"links\": {\n     \"self\": \"http://localhost/cars/years?make=460&model=360&fuels=100001\"\n   },\n   \"data\": [\n      { \"type\": \"year\", \"attributes\": { \"value\": \"2000\" } }\n      { \"type\": \"year\", \"attributes\": { \"value\": \"2001\" } }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/4.years.js",
    "groupTitle": "Year"
  }
] });

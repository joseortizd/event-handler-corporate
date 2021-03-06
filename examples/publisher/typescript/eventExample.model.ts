import {EventModel} from "../../../src/business/models/event.model";

let metadata ={
    "flow":"hola david",
    "branch":"1212",
    "executiveDocumentType":"RUT",
    "executiveId":"12121",
    "originIP":"1.1.1.1",
    "transactionId":"trxId",
    "timestamp":'1483272732000',
    "eventType":"saludos",
    "process":{
        "code":"123",
        "description":"hola holaa",
        "policyNumber":"213123123",
        "operation":{
            "id":"234 ",
            "type": "dadas"
        }
    },
    "insurance":{
        "id":"hola",
        "name":"hello",
        "product":{
            "code":"1",
            "description":"hi"
        },
        "subProduct":{
            "code":"VIBCI3",
            "description":"Subproduct Description"
        },
        "line":{
            "code":"1",
            "description":"Line Description"
        },
        "plan":{
            "code":"1",
            "description":"Plan Description"
        }
    },
    "customer":{
        "identificationDocument":{
            "type":"RUT",
            "number":"23456",
            "validator":"6"
        }
    },
    "authentication":{
        "id":"AABC000019241700",
        "method":{
            "code":"1",
            "description":"CIAM|Equifax"
        },
        "details":{
            "result":"ACEPTADO"
        }
    },
    "message":"message",
    "environment":"Test",
    "businessMetadata":{
        "sendDate": "2010-01-01T01:01:01",
        "openDate": "2010-01-01T01:01:01",
        "receptionDate": "2010-01-01T01:01:01",
        "mailTo": "Seguros@falabella.cl",
        "mailFrom": "Seguros@falabella.cl",
        "subject": "Gracias por contratar tu seguro de Auto",
        "template": {
            "id": ""
        }
    }
};

let fecha : any = new Date();
fecha = fecha.toISOString();

export const ExampleEvent : EventModel = new EventModel('fif.seg.corp.prdttrnfeventnotification.domain.events.BusinessEventCreated', '234', fecha, '1.0', 'CL', 'Seguros', 'Web', 'venta', 'sells', 'Prueba', "testType", JSON.stringify(metadata));

console.log(ExampleEvent);
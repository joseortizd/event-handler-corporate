import {EventModel} from "./src/business/models/event.model";
import { publish } from "./src/business/event-publisher/event-publisher";
process.env.EVENT_HANDLER_DEBUG = "false";
//process.env.EVENT_HANDLER_PUBLISHER_ABS_CONNECTION_STRING =  "Endpoint=sb://testloggerjg2021.servicebus.windows.net/;SharedAccessKeyName=jggg;SharedAccessKey=mc7lFaXPiedMUhb7olUElaclSULaRe/RV6uhwLU3iYw=;EntityPath=testjg";
process.env.EVENT_HANDLER_PUBLISHER_ABS_CONNECTION_STRING =  "Endpoint=sb://sfservicebusdev.servicebus.windows.net/;SharedAccessKeyName=auditCreatedEventNotification_cl_sas;SharedAccessKey=FfJiISpZduKtP4QHzGv/dmfyDn0RVuaqFAlZB3SF9zE=;EntityPath=auditcreatedeventnotification_cl";
//process.env.EVENT_HANDLER_PUBLISHER_ABS_TOPIC_NAME = "testjg";
process.env.EVENT_HANDLER_PUBLISHER_ABS_TOPIC_NAME = "auditcreatedeventnotification_cl";
process.env.EVENT_HANDLER_PUBLISHER_CONSOLE_LOG_ACTIVATE = "true";
process.env.EVENT_HANDLER_PUBLISHER_PROVIDER = "AZURE";


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

const ExampleEvent : EventModel = new EventModel('fif.seg.corp.prdttrnfeventnotification.domain.events.BusinessEventCreated', '234', fecha, '1.0', 'CL', 'Seguros', 'Web', 'venta', 'sells', 'Prueba', "testType", JSON.stringify(metadata));
publish(ExampleEvent);



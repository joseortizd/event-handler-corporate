const { publishEvent } = require('./lib/index')
process.env.EVENT_HANDLER_DEBUG = "false";
process.env.EVENT_HANDLER_PUBLISHER_ABS_CONNECTION_STRING =  "CONNECTION_STRING";
process.env.EVENT_HANDLER_PUBLISHER_ABS_TOPIC_NAME = "TOPIC";
process.env.EVENT_HANDLER_PUBLISHER_CONSOLE_LOG_ACTIVATE = "true";
process.env.EVENT_HANDLER_PUBLISHER_PROVIDER = "AZURE";
let metadata = {"detail":{"body":{"customer":{"identificationDocument":{"type":"DNI","number":"72625854"},"birthdate":"1992-01-14","names":"MARIELLA LISBETH","paternal":"GIRON","maternal":"ALVA","address":{"street":"CALLE Avenida 23 ASENTAMIENTO HUMANO Las capullanas D 23 0 VEINTISEIS DE OCTUBRE PIURA PIURA","number":"23","area":{"level1":{"code":"PE"},"level4":{"code":"200115"}}},"gender":"F","primaryContact":{"email":"may_ga14@hotmail.com"}},"proposal":{"customerIdentificationDocument":{"type":"DNI","number":"72625854"},"insurance":{"line":"4","product":"40023","subProduct":"OCATP9","plan":"1","name":"Seg Tarjeta protegida"},"payment":{"paymentMethod":{"id":"5","idDescription":"CMR","accountNumber":"447409******5864","type":"M","expirationDate":"26","bank":"falabella","validator":"N"},"installments":{"value":12}}}},"url":"http://rector-subscription-common-pe-adapter_api:2900/fixed-premium"},"metadata":{"channel":"Banco","flow":"MIS_SEGUROS","source":"OM2","country":"PE","executiveId":"jhidalgop@bancofalabella.com.pe","branchId":"303","transactionId":"749b0348-7a8c-4a41-82f0-65f7d0c892c7","executiveDocumentType":"EMAIL","originIp":"10.255.0.6","category":"Venta"}};


const ExampleEvent = {country: 'Event', datetime: new Date(), capability: 'string', metadata: 'string', domain: 'string', channel: 'string', entityId: 'string', eventType: 'string', mimeType: 'string', commerce: 'string', version: 'string'}
publishEvent( ExampleEvent);

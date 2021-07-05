# Event handler corporate

## Getting started

### Install the package
- Run `npm install event-handler-corporate`

### Configure 
For its usage you need to set a list of environment variables, as follows: 

*Event Publisher*

| Provider          | Environment variable name                          | expected value                                              |
| ----------------- | -------------------------------------------------- | ----------------------------------------------------------- |
|                   | EVENT\_HANDLER\_PUBLISHER\_ASB\_CONNECTION\_STRING | A valid azure service bus connection string                 |
| Azure service Bus | EVENT\_HANDLER\_PUBLISHER\_ASB\_TOPIC\_NAME        | Topic name                                                  |
|                   | EVENT\_HANDLER\_PUBLISHER\_CONSOLE\_LOG\_ACTIVATE  | Boolean Value, it's true if you want to log sended messages |

*Event Subscriber*

| Provider          | Environment variable name                           | expected value                                              |
| ----------------- | --------------------------------------------------- | ----------------------------------------------------------- |
|                   | EVENT\_HANDLER\_SUBSCRIBER\_ASB\_CONNECTION\_STRING | A valid azure service bus connection string                 |
| Azure service Bus | EVENT\_HANDLER\_SUBSCRIBER\_ASB\_TOPIC\_NAME        | Topic name                                                  |
|                   | EVENT\_HANDLER\_SUBSCRIBER\_ASB\_SUBSCRIPTION\_NAME | A valid subscription name                                   |
|                   | EVENT\_HANDLER\_SUBSCRIBER\_CONSOLE\_LOG\_ACTIVATE  | Boolean Value, it's true if you want to log sended messages |

### Usage
To publish an event you should require publishEvent function and to call it you have to pass a corporate event as a parameter.

A structure for a corporate event is this:

```
eventId : string;
eventType : string;
datetime : string;
version : string;
country : string;
commerce : string;
channel : string;
domain : string;
capability : string;
mimeType : string;
metadata : string;
entityId : string;
entityType : string;
timestamp : string;
```

So first you need to make an import and then pass the event into publishEvent function

```
import {publish} from 'library location'
publish(publishEventModel);
```


Now to process an event you should pass to a subscribeEvent function an inteface including process method that should handle a corporate event


For example:
```

export class logEventHandler implements eventHandler {
process(event : ASBReceivedEvent) {
console.log("Application properties:");
console.log(event.applicationProperties);
console.log("Body");
console.log(event.body);
}
}
```

Which is passed to a function as follows:

```
import {subscribeEvent} from 'library location'
subscribeEvent(new logEventHandler());
```

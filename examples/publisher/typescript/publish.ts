import {publish} from "../../../src/business/event-publisher/event-publisher";
import {ExampleEvent} from "./eventExample.model";

/** These environment variables must have been set to use a real provider, if they aren't DEBUG_MODE is activated by
 * default
 //If true the module won't publish to provider even if it is defined
 process.env.EVENT_HANDLER_DEBUG = "false";
 //A valid connection string is required
 process.env.EVENT_HANDLER_PUBLISHER_ASB_CONNECTION_STRING =  "A Valid connection string";
 //A valid topic name is required
 process.env.EVENT_HANDLER_PUBLISHER_ASB_TOPIC_NAME = "A valid topic name";
 //True if you want to output in console sent messages
 process.env.EVENT_HANDLER_PUBLISHER_CONSOLE_LOG_ACTIVATE = "true";
 //Must provide a valid provider name, example: AZURE
 process.env.EVENT_HANDLER_PUBLISHER_PROVIDER = "AZURE";
 **/


publish(ExampleEvent);
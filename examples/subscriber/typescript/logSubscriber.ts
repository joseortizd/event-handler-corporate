import {logEventHandler} from "../../../src/business/event-subscriber/log-event-handler";
import {subscribeEvent} from "../../../lib";

/** These environment variables must have been set to use a real provider, if they aren't DEBUG_MODE is activated by
 * default
 //A valid connection string is required
 process.env.EVENT_HANDLER_SUBSCRIBER_ASB_CONNECTION_STRING   =  "A Valid connection string";
 //A valid topic name is required
 process.env.EVENT_HANDLER_PUBLISHER_ASB_TOPIC_NAME = "A valid topic name";
 //True if you want to output in console sent messages
 process.env.EVENT_HANDLER_SUBSCRIBER_CONSOLE_LOG_ACTIVATE = "true";
 //Must provide a valid provider name, example: AZURE
 process.env.EVENT_HANDLER_PUBLISHER_PROVIDER = "AZURE";
// Must provide a valid subscirption name
 EVENT_HANDLER_SUBSCRIBER_ASB_SUBSCRIPTION_NAME
 **/

subscribeEvent(new logEventHandler());
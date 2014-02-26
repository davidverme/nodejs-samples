/**
 * Created by wdverme on 2/25/14.
 */

var mqtt = require('mqtt');

var args = process.argv.slice(2);

var host = args[0];
var port = args[1];
var topic = args[2];
var message = args[3];

if(!host || !port || !topic || !message){
    console.log('invalid params! valid format is=>   node publisher [host] [port] [topic] [message]');
    process.exit();
}
console.log('host: ' + host);
console.log('port: ' + port);
console.log('topic: ' + topic);
console.log('message: ' + message);

var client = mqtt.createClient(port, host);
client.publish(topic, message);
client.end();

/**
 * Created by wdverme on 2/25/14.
 */

var mqtt = require('mqtt');

var args = process.argv.slice(2);

var host = args[0];
var port = args[1];
var topic = args[2];

if(!host || !port || !topic){
    console.log('invalid params! valid format is=>   node publisher [host] [port] [topic]');
    process.exit();
}
console.log('host: ' + host);
console.log('port: ' + port);
console.log('topic: ' + topic);

var client = mqtt.createClient(port, host);
client.subscribe(topic);

client.on('message', function(topic, message){
   console.log('new message: topic: ' + topic + ' message: ' + message);
});

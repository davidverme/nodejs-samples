/**
 * Created by wdverme on 2/25/14.
 */

var mqtt = require('mqtt');

console.log('starting server...');

mqtt.createServer(function(client) {
    var self = this;

    if (!self.clients) self.clients = {};

    client.on('connect', function(packet) {
        client.connack({returnCode: 0});
        client.id = packet.clientId;

        self.clients[client.id] = client;

        console.log('New client connected: ' + client.id);
    });

    client.on('publish', function(packet) {
        console.log('New message: TOPIC: ' + packet.topic + ' PAYLOAD: ' + packet.payload);

        for (var k in self.clients) {
            self.clients[k].publish({topic: packet.topic, payload: packet.payload});
        }
    });

    client.on('subscribe', function(packet) {
        console.log('Subscription event: ' + packet.messageId);

        var granted = [];
        for (var i = 0; i < packet.subscriptions.length; i++) {
            granted.push(packet.subscriptions[i].qos);
        }

        client.suback({granted: granted, messageId: packet.messageId});
    });

    client.on('pingreq', function(packet) {
        client.pingresp();
    });

    client.on('disconnect', function(packet) {
        client.stream.end();
    });

    client.on('close', function(err) {
        delete self.clients[client.id];
    });

    client.on('error', function(err) {
        client.stream.end();
        console.log('error!');
    });

}).listen(1883);
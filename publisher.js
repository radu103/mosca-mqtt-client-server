var mqtt = require('mqtt');

var client  = mqtt.connect('mqtt://mosca-mqtt-server.cfapps.eu10.hana.ondemand.com:80');

client.on('connect', function () {
    setInterval(function() {
        client.publish('myTopic', 'Hello mqtt');
        console.log('Message Sent');
    }, 5000);
});

var mqtt = require('mqtt');

var client  = mqtt.connect('mqtt://localhost:3000');

client.on('connect', function () {
    client.subscribe('myTopic');
});

client.on('message', function (topic, message) {
    context = message.toString();
    console.log(context);
})
var mosca = require('mosca');

var mqttPort = process.env.PORT | 3000;

var settings = {
    port: mqttPort
}

var server = new mosca.Server(settings);

server.on('ready', function(){
    console.log("Broker started on port " + mqttPort);
});
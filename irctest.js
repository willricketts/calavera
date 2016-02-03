var irc = require('irc');

var client = new irc.Client('funhole.lol', 'Calavera', {
    channels: ['#funhole', '#losalamos'],
});

client.addListener('error', function(message) {
    console.log('error: ', message);
});
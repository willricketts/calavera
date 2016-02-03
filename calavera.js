var Calavera = require('./lib/calavera');
var calavera = new Calavera();


calavera.start(function(err) {
  console.log('Calavera has started.');
});


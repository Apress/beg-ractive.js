var Ractive = require('ractive');
var ractive = new Ractive({
    template: 'Hello, {{name}} - you are now using Ractive for the first time!'
});
ractive.set('name', 'reader');
console.log(ractive.toHTML());
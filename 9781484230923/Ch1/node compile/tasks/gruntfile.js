var Ractive = require('ractive'),
    path = require('path');

module.exports = function(grunt){

    var desc = 'Compile ractive.js templates';
    grunt.registerMultiTask('compile', desc, make);

    function make(){
        this.files.forEach(function(file){
            var templates = file.src.map(parse);
            grunt.file.write(file.dest, 'var templates = {\n' + templates.join(',\n') + '\n}');
        });
    }

    function parse(template){
        var name = path.basename(template, '.mustache'),
            html = grunt.file.read(template),
            parsed = Ractive.parse(html);

        return  '\t' + name + ': ' + JSON.stringify(parsed);
    }

};
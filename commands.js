var fs = require('fs');
var files = fs.readdirSync('.');
var chalk = require('chalk');

module.exports = {
    pwd: function(actualArgs) {
        
            process.stdout.write(chalk.green('Current directory: ' + process.cwd()));
            process.stdout.write('\nprompt > ');
    
    },
    date: function(actualArgs) {
        process.stdout.write(chalk.green('Current date & time: ' + new Date()));
        process.stdout.write('\nprompt > ');

    },
    ls: function(actualArgs) {
        process.stdout.write(chalk.green(files.toString().split(",").join('\n')));
        process.stdout.write('\nprompt > ');
    },
    echo: function(actualArgs) {
        //if it's an environment variable, print it
        if (actualArgs[0][0] === "$") {    
            process.stdout.write(chalk.green(process.env[actualArgs[0].slice(1)]));
        }
        //otherwise, just echo what the user said
        else {
            process.stdout.write(chalk.green(actualArgs.toString()));
        } 
        process.stdout.write('\nprompt > ');
    },
    cat: function(actualArgs) {
        process.stdout.write(chalk.green(fs.readFile('./' + actualArgs[0])));
        console.log(actualArgs[0]);
    }
}
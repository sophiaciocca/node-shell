var commands = require('./commands');
var chalk = require('chalk');


//gives a prompt
process.stdout.write(chalk.yellow('prompt > '));

//the stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data) {

    var allArgs = [].slice.call(arguments).toString().trim().split(" ");
    var actualArgs = allArgs.slice(1);
    var cmd = allArgs[0];

    if (commands[cmd]) {
        commands[cmd](actualArgs);
    }
        
    else {
        //otherwise, just write "you typed: ____"
        process.stdout.write(chalk.green('you typed: ' + cmd));
        process.stdout.write(chalk.yellow('\nprompt > '));
    }

});

//import commands
var commands = require('./karensReviewCommands');

process.stdout.write('prompt > ');

process.stdin.on('data', function(data) {
    var cmd = data.toString().trim();
    cmd = cmd.split(" ")[0];

    //if cmd exists in commands object, call it
    if (commands[myCmd]) {
        commands[cmd](arg, done);
    }
    else {
        process.stdout.write('\prompt: ');
    }

});

function done(output) {
    //if there's length in the command list
    if (cmdList.length) {
    var nextCmd = cmdList.shift();
    nextCmd = nextCmd.split(' ');
    myCmd = cmd[0];
    var arg = nextCmd.slice(1).join(' ');

    commands[myCmd](output, arg, done);
    }
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
}
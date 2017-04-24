//require fs, for ls function
require('fs');

function pwd(stdin, arg, done) {
    var wd = process.cwd();
    process.stdout.write(wd);
    process.stdout.write('\nprompt > ');
}

function date(stdin, arg, done) {
    process.stdout.write(new Date);
    process.stdout.write('\nprompt > ');
}

function ls(stdin, arg, done) {
    //implement error-first callback [err is an object, so it has a message property]
    fs.readdir('', function(err, files) {
        if(err) process.stdout.write(err.message);
        else {
            done(files.join(" "));
        }
        process.stdout.write('\nprompt > ');
    })
}

function echo(stdin, arg, done) {
    if(arg[0] === '$') {
        var envVar = arg.slice(1) //w/o dollar sign
        if (process.env[envVar.toUpperCase()]) {
            output = process.env[envVar.toUpperCase()]
        }
        else { //not found in environment object
            output = 'That is not an environment variable.'
        }     
    }
    else {
        //if it's not an env command (i.e. just a message)
        process.stdout.write(output);
    }
}

function cat(files, done) {
    //make files args into an array
    var files = files.split(" ");

    //we'll put the contents of the files into an array, then join it into a string
    var contents = [];

    files.forEach(function(file, index){
        fs.readFile(file, function(err, fileContents) {
        //if error,
        if(err) process.stdout.write(err.message);
        //otherwise, print the whole file
        else{
            //we're putting it in at the specific index, rather than just pushing,
            //because of asynchronicity - don't want them out of order
            contents[index] = fileContents.toString());
            //when it's done:
            if (contents.length === files.length) {
                done(contents.join("\n"));
                process.stdout.write("\nprompt > ");
            }
        }
    });
}

//export these functions to karensReviewBash.js
module.export = {
    pwd: pwd,
    date: date,
    ls: ls,
    echo: echo,
    cat: cat
}
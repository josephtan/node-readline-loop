/**
 * Created by Joseph Tan on 22/05/2016.
 */
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var recursiveAsyncReadLine = function () {
    rl.question("Please Choose an option:\n"
        + "1) Option 1\n"
        + "2) Option 2\n"
        + "3) Exit\n"
        , function (line) {

            switch (line){
                case "1":
                    console.log("this is option 1");
                    break;
                case "2":
                    console.log("this is option 2");
                    break;
                case "3":
                    return rl.close();
                    break;
                default:
                    console.log("No such option. Please enter another: ");
            }
    recursiveAsyncReadLine(); //Calling this function again to ask new question
    });
};

recursiveAsyncReadLine();

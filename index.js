// Create an object
var rect = require('./reactangle');

function solveRect(l, b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    // We call rectangle node module and we pass in
    // the length, breadth of the first two parameters and
    // the third parameter is the callback function
    // NOTE: This statement will not be executed after two second delay!
    rect(l, b, (err, rectangle) => {
        // Inside the callback function, we will handle the return value:
        // If error value is returned, we will simply log out the error message
        // recall that in the rectangle module, we has created a new error object
        // then passed a string inside this error object, this string will be
        // attached to the error object to the message property of the error object.
        if (err) {
            console.log("ERROR: ", err.message);
        } else {
            console.log("The area of the rectangle of dimensions = "
            + l + " and b = " + b + " is " + rectangle.area());
            console.log("The perimeter of the rectangle of dimensions l = "
            + l + " and b = " + b + " is " + rectangle.perimeter());
        }
    });

    console.log("This statement is after the call to rect()");

}

// Testing
solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);
module.exports = (x, y, callback) => {
    // Using setTimeout function of Javascript to delay before
    // the callback function is called
    if ( x <= 0 || y <= 0 ) {
        setTimeout(() =>
            // This callback is the callback function that going to
            // be passed in as the third parameter.
            // The callback function takes 2 parameters:
            //  - The first one is the : Error
            //  - The second one is the : Return_Value
            callback(new Error("Rectangle dimensions should be greater than zero: l = "
                        + x + ", and b = " + y),
                    null),
            2000);
    } else {
        setTimeout(() =>
            // This callback is the callback function that going to
            // be passed in as the third parameter.
            // since there's no error in this else, the error parameter will
            // be set to null, and return value will be a javascript object
            // containing the two function as the two values inside this
            // Javascript object.
            callback(null,
                {
                    // We don't even need to pass x and y value since it already available
                    perimeter : () => (2*(x + y)),
                    area : () => (x*y)
                }),
            2000);
    }

}








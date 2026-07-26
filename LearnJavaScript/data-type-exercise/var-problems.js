// var allows to initialize variable before decalartion and provides output as unndefined
/** 
console.log("Status before declaration: " + testStatus);
var testStatus = "PASSED";
console.log("Status after declaration: " + testStatus);
*/


// let does not allow initalization of variable before declaration and throws error as cannot access before initialization
/** 
console.log("Status before declaration: " + testStatus);
let testStatus = "PASSED";
console.log("Status after declaration: " + testStatus);
*/

// var leaks varaible and does not scope variable for block
/** 
if (true) {
    var tempUser = "admin@test.com";
    console.log("Inside block: " + tempUser);
}
console.log("Outside block: " + tempUser);  // Does this crash or print?

*/
//let does not leak variable outside of block and keep it within block scope.
/** 
if (true) {
    let tempUser = "admin@test.com";
    console.log("Inside block: " + tempUser);
}
console.log("Outside block: " + tempUser);  // Does this crash or print?
*/

/** 
// var leaks outside for loop block it does not scope variable within block
for (var i = 0; i < 3; i++) {
    console.log("Running test step " + i);
}
console.log("After loop, i = " + i);   // What is i here?
*/

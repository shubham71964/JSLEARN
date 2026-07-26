
const TEST_CASE_TITLE = "Verify Teams Meeting Creation.";
const TEST_ASSIGNED_TO = "Shubham";

let status = "In Progress";
let step = "STEP 1";

console.log (`test case Title: ${TEST_CASE_TITLE}`);
console.log (`Test Case Assigned To: ${TEST_ASSIGNED_TO}`);

console.log(`${step} : Launch Teams APP\n status ${status}`)

step = "step 2";
console.log (`${step} :Clcik on Calandar\n status: ${status}`);

step = "step 3";
console.log(`${step} : Create team Meeting\n status: ${status}`);

step = "step 4";
status = "completed";
console.log(`${step}: Team Meeting Created with Time Slot\n status: ${status}`);



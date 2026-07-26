
// const -> variable value is fixed and will not change.
const APPLICATION_NAME = "PropertyTech";
const APPLICATION_URL = "https://proptech.ai/";

// let -> varaible value be changed dynamically as per reuiremnet and new value updated to same variable.
let environment = "UAT";
let testAssigned = "Shubham";
let testExecutionDate = "23-07-2026";
let testAutomation = "Enabled";

// '\n' starts text with new line
console.log("===========================================\n"+"Test Configuration\n"+"===========================================");

console.log (`Application Name: ${APPLICATION_NAME}`);
console.log (`Application URL: ${APPLICATION_URL}`);
console.log ("Environment: ",environment);
console.log ("test Assigned To: "+testAssigned);
console.log (`test Execution Date: ${testExecutionDate}`);
console.log ("TestAutomate:"+testAutomation);


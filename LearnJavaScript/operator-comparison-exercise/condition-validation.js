/** 
function validEmail(email){
    if (email !== "" && email.includes('@') && email.includes('.')){
        console.log(`valid Email: ${email}`);
    }
    else{
        console.log(`invalid email: ${email}`);
        return false
    }
    if(true){
        console.log("Login Test With Email ID Pass")
    }
    return true
}

validEmail("shubhgmail.com");
*/


function testStatus(testResult){

    console.log("Test Status:", testResult);

    if(testResult === "Passed"){
        console.log("Test Passed Successfully");
    }
    else if( testResult === "Failed"){
        console.log("Test Failed");
    }
    else if (testResult === "Skipped"){
        console.log("Test Skipped");
    }
    else {
        console.log("Test Result Unknown");
    }
    
}

// testStatus("Passed");

function validPassword(password){

    if(password.length >= 10 ){
        console.log("Strong password");
    }
    else if(password.length < 10 && password.length > 6){
            console.log("Weak Password");
    }
    else {
        console.log("Password should be strong with minimum 10 char and special char  ")        
    }
   
}


validPassword("Tes5");


function scoreCheck(score){

    if(score==90 && score >90){
        console.log("Grade A: Excellent Score", score);
    }
    else if (score <90 && score>=80){
        console.log("Grade B: Good Score", score);
    }
    else if (score <80 && score >=70){
        console.log("Grade C: Average Score", score);
    }
    else if (score <70 && score >=60){
        console.log("Grade D: Pass Score", score);
    }
    else{
        console.log("Grade E: Fail Score", score);
    }
    
}

scoreCheck(0);

function checkTestData(result, duration){

    if (result !== null && result !==""){
        if(duration >=0){
            if(duration <=10){
                return "Valid result"+result+" and valid Duration in "+duration;
            }
            else{
                return "Error: Duration to Long"+ duration;
            }           
        }
        else{
            return "Valid result"+result+" and Negative Duration in "+duration;    
        }       
    }
    else{
         return "Invalid result "+result+" and Skipped to check duration in "+duration;
    }
}

console.log(checkTestData("", 0));

let testResult = "";

switch(testResult){

    case "Pass": console.log("Test result:",testResult); break;
    case "Fail": console.log("test result: ",testResult); break;
    default: console.log("Default Test Status");
}

let statusCode = 402;

switch(statusCode){

    case 200: console.log("Statuscode is ok ",statusCode); break;
    case 201: console.log("Statuscode is created ",statusCode); break;
    case 400: console.log("Statuscode is Bad Request ",statusCode); break;
    case 500: console.log("Statuscode is server error ",statusCode); break;
    default: console.log("No statuscode");
}

let duration = 1;

switch(true){

    case duration <= 1: console.log("Fast Duration: ", duration); break;

    case (duration >= 3 && duration <=5): console.log("Average Duration: ", duration); break;

    case duration >5: console.log("Slow Duration: ", duration); break;
}


function validateUserName(username, password, email){

    if(username.length >0){  
        console.log("Username: ", username);    
        }
    else{
        return "Username is invalid" + false;
    }
     
    if(password !== null && password !=""){
       if(password.length >= 8){
            console.log("Password: ", password);
       }
    }
    else{
        return "Password is invalid" + false;
    }
     
    if(email.includes('.') && email.includes('@')){
        console.log("Emaild is Valid: ", email);
    }
    else {
        return "email is invalid"+ false;
    }

    return true;

}

console.log(validateUserName("Shubh", "Password@", "shubh@hotmail.com"));
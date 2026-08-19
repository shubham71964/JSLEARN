/** 
let age = 18;

if(age>=18 && age <=60){
    console.log("User have Valid Age Range between 18 to 60: ",age);

}
else{
    console.log("User have invalid age rage does not fit betwenn 18 to 65: ", age);
}
*/

/** 
let username = "";
let password = "pass";
let email = "Shub@gmail.com";

if((username!== "" && username !== null && password!== "" & password !== null) || (email !== "" && email !== null)){
    console.log("Checking Credentials");
    console.log(`Username: ${username} \nPassword: ${password}  \nEmail Id: ${email}`);
    console.log ("Logged in with credentials ");

}
else{
    console.log("Failed to Log in as sufficient log in credentials not present");
}

*/
/** 
let testStatus = "Failed";
let errorCount = 0;

if((testStatus === "Passed" || testStatus === "Skipped")&&(errorCount ===0 )){
    console.log(`Test Execution Completed Successfully with \nTest Status :${testStatus} \nError count: ${errorCount}`);
}
else{
    console.log(`Test Execution Failed with \nTest Status: ${testStatus} \nError Count: ${errorCount}`)
}
*/

let responseTime = 1.22;
let threshold = 1;

if(responseTime <= threshold && responseTime !== 0 && responseTime !== null){
    console.log(`Response Time is within Threshold Limit \nResponse time: ${responseTime}`);
}
else{
    console.log(`Response Time is outside Threshold Limit \nResponse Time: ${responseTime}`);
}



function validateCompleteUser (username, password, emailId, agelimit){

    let usernameCount = username.length;
    if (usernameCount > 0 && usernameCount >=3 && usernameCount<=20){
        console.log(`Valid Username: ${username}`);
    }
    
    else{
        console.log(`Username is outside valid Range: ${username}`);
        return false;
    }

    let passwordCount = password.length;
    if(passwordCount > 0 && passwordCount <= 8){
        console.log(`Valid Password: ${password}`);
        
    }
    else{
        console.log (`password it outside valid limitation: ${password}`)
        return false;
    }

    if(emailId.length > 0 && emailId.includes('@') && emailId.includes('.') ){
        console.log (`Valid Email ID : ${emailId}`);
    }
    else{
        console.log("Emaild ID is not valid");
        return false;
    }

    if(agelimit>=18 && agelimit <= 60){
        console.log(`Valid Age Limit: ${agelimit}`);
        
    }
    else{
        console.log("Age is outside Valid Limit");
        return false;
    }
    if(true){
        console.log("User Details Provider are Valid");

    }
    return true 
    
}


// validateCompleteUser("testuser","Test#12", "Test@gmail.com", 22);

let testResult = validateCompleteUser("testuser","Test#12", "Test@gmail.com", 2)
console.log(testResult);
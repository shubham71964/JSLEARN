
function personDetails (age, gender){

    return (age, gender);
}

console.log(personDetails(23, "Male"));

function add(a,b){
    return a+b;
}
console.log(add(4,5));

function personProfile(role, profession){

    return {role:role, profession:profession};

}

console.log(personProfile("QA", "Testing Team"));

class TestPatient {

    constructor(){
        console.log("Hi")

    }

    testPatientGender(){
        console.log("Test Patient Gender");
    }
}

let uiTest = new TestPatient();
//console.log(uiTest);
uiTest.testPatientGender();
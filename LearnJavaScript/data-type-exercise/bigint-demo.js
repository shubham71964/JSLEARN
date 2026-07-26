
// Number has limit to store data upto 16 digit only but big int allows user to store and represent value bigger than16digit with n as suffix
/** 
let max = Number.MAX_SAFE_INTEGER;
console.log(max + 1);  // ?
console.log(max + 2);  // ?
console.log(max + 3);  // ?
*/


let bigMax = 900719925474099100000000000000n;
console.log(bigMax + 1n);  // ?
console.log(bigMax + 2n);  // ?
console.log(bigMax + 3n);  // ?

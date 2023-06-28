//is truthy

/*const input= prompt(`Input value`);
if (input === ""){
    console.log(`the empty string is falsy`)
}else if(input === `false`){
    console.log(`the input false is falsy`)
}else if(input === `null`){
    console.log(`the value is undefined`)
}else if(input === `undefined`){
    console.log(`the value is undefined`)
}else if(input === 0){
    console.log(`the number 0 is falsy`)
}else{
    console.log(`true`)
}*/

//number line

/*const num1 = 5;   
const num2 = 30; 

const sum = num1 + num2;

if (sum < -1000) {
  console.log(sum + " is less than -1000");
} else if (sum < 0) {
  console.log(sum + " is a negative number");
} else if (sum === 0) {
  console.log(sum + " is equal to 0");
} else if (sum > 0 && sum <= 100) {
  console.log(sum + " is larger than 0");
} else if (sum > 100) {
  console.log(sum + " is greater than 100");
}*/

//Greater than 5

/*const param1 = 3;   
const param2 = 5;   

if (param1 >= 5 && param2 >= 5) {
  console.log("true");
} else {
  console.log("false");
}*/

//pair and compare

const param1A = `twelve`;    
const param1B = `eleven`;      

const param2A = `for`;   
const param2B = `for`; 

const pair1Truthy = param1A === param1B;
const pair2Truthy = param2A === param2B;

if (pair1Truthy === true || pair2Truthy === true) {
  console.log("true");
} else {
  console.log("false");
}

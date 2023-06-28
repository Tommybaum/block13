//Psuedo code
//create a prompt input 
//convert input to a number
//if else statement
//if number is % then even
//if remainder then odd 
const input= prompt(`input a number:`);
const inputNum= Number(input);
if (inputNum % 2 === 0) {
    console.log(`even`)
}else if(inputNum %2 === 1){
    console.log(`odd`)
}else{
    console.log(`input was not a number`)
}
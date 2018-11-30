// Declaring Functions - the functions are hoisted

function hi() {

}

//with variables

let x;

//write a fucntion that adds two numbers
function addAnyTwoNumbers(x, y) {
    console.log(x + y);

addAnyTwoNumbers(6, 11); 



//Write a function that subtracts two numbers. 
//Call the function subtractTwoNumbers. 
//It should have two parameters: firstNum and secondNum.
//Print the difference of when the firstNum is subtracted from the secondNum to the console.
//Call the function once, with arguments of 5 and 7.

function subtractTwoNumbers(firstNum, secondNum){
    console.log(secondNum - firstNum);
}
subtractTwoNumbers(5,7)}

function myTaxes(a, x, y, z) {
    let myInc = a * x;
    let myTaxes = myInc - y;
    let total = myTaxes + z;
    return total;
}

myTaxes(10000, 5, 50000, 0);

//Write a function that returns the value of two numbers added together.
//Write a function that takes in a first and last name. It returns a whole name.
//Write a function that returns your pet's name and breed.

function sumOfTwo(x, y) {
    let sum = x + y;
    console.log(sum);
    return sum;
}

sumOfTwo(2,2); 

function fullName(first, last) {
    let name = first + " " + last;
    console.log("Hello" + ", " + name);
    return name;
}
fullName("Ashley", "Quarles");

function petIdentity(name, breed) {
    let petName = name + " , " + breed;
    console.log(petName);
    return petName;
}

petIdentity("Charis", "Pitbull");

//Write a function that calculates the the totalPrice after tax on any quantity of any price on a product.

function enterAWordToSeeIfItIsAPalindrome(word) {    
    let w = word.length;
    for (let i = 0; i < w / 2; i++) {
        if (word.charAt(i) !== word.charAt(w - 1 - i)) {
            return false;
        }
    }
    return true;
}

if (enterAWordToSeeIfItIsAPalindrome("112211")) {
    console.log("The word is a palindrome");
} else {
    console.log("The word is NOT a palindrome");
}

//Write a function with two parameters(a, b). The function should subtract number b from number a and return the value. You should also log the value to the console.

function subtractTwoNumbers(a, b) {
    let number = b - a; 
    console.log(number);
    return(number);
}
subtractTwoNumbers(9,10);

//Write a function with two parameters(first, last). The function should take the two parameters and say hello to a user by their full name. For instance, "Hello, Kenn Pascascio".

//Write a function that has one parameter(minutesLeft). The message should print, "You have 5 minutes left in the show."


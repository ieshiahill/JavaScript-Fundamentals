//If Else Statements

let weather = 90;

if (weather < 80 && weather > 40) {
    console.log("go outside")
} else {
    console.log("stay inside")
}
 
let myName = "Ieshia"

if (myName === "Ieshia") { 
    console.log('Hello my name is ' + myName + '.')
} else {
    console.log("Hello, what is your name?") 
}
//Challenge: Capitalize the first letter of a name

let name = "carOlyn"

if (name[0] == name[0].toUpperCase()) {
    let firstLetter = name[0] + name.slice(1).toLowerCase();
    console.log(firstLetter)
} else {
    let otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    console.log(otherLetters)
}

// Else If Statements

if (coffee == "hot") {
    console.log("do something")
} else if (coffee == "luke warm") {
    console.log("do something else")
} else {
    console.log("do something else again")

}


let age = 30;

if (age >= 25) {
console.log("You can rent a car, drink, and vote")
} else if (age >=21) {
console.log("You can drink and vote")
} else if (age >= 18) {
console.log("You can vote")
} else { 
console.log("You can't do anything")
}


let cleanRoom = true; 

if(cleanRoom != true) { 
} else {
    console.log("You will be grounded for eternity")
}

var iStudy = true;

if(iStudy =  true) { 
    console.log("I will get a nice paying job in tech.");
} else {
    console.log("I'll be stucking working in CS forever.") 
} 

var myInsecurities = true;
if(myInsecurities =! true) {
    console.log("I will get a boyfriend.")
} else {
    console.log("I will never get a boyfriend.")
}

var bankAccount = 500;
var debt = 4200;
var difference = bankAccount-debt;

if(bankAccount - debt >= 700) { 
    console.log("I have $" + bankAccount + "in my bank account, and I am $" + debt + "in my debt.")   
} else {
    console.log("It probably isn't a good time to pay off my debt.")
}
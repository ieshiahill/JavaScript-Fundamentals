// Does the same thing a conditional does
// shorthand for a conditional statement - very concise code
// kind of flattens the if/else statements

let x = 6;

if (x > 0) {
    console.log("yes")
} else {
    console.log("no")
}

(x > 0) ? console.log("yes") : (x < 0) ? console.log("maybe?") : console.log("no");

// the ? is equal to if and : is equal to else 

let age = 

(age >=25) ? console.log("Yay! You can rent a car") : (age >= 21) ? console.log("Yay! You can drink") : (age >= 18) ? console.log("Yay! You can vote!") : console.log("Sorry, you're too young to fo anything fun.");

//you must have a default at the end of each ternary 
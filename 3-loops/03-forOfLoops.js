// They need "iterable" properties 

let student = {name: "Peter", awesome: true, degree: "JavaScript", week: 1} 

for (key of student){
    console.log(key);
}

let catArray = ["tabby" , "british shorthair" , "burmese" , "maine coon" , "rag doll"]

for (cat of caArray){
    console.log(cat, "says meow");
}

for (cat in catArray){
    console.log(cat);
}


function checkPalindrome(word) {    
    var l = word.length;
    for (var i = 0; i < l / 2; i++) {
        if (word.charAt(i) !== word.charAt(l - 1 - i)) {
            return false;
        }
    }
    return true;
}

if (checkPalindrome("Ieshia")) {
    console.log("The word is a palindrome");
} else {
    console.log("The word is NOT a palindrome");
}


//A challenge -create a while loop that prints 10-100 by 10s. AT 50
// print "Halfway there!"



var count = 0;
while (count < 100) { 
    count+=10;
    if (count === 50){
        console.log("Halfway there!");
    } else { 
        console.log(count);
    }
} 


var cars = ['BMW', 'Volvo', 'Saab', 'Ford'];
var i = 0;
var text = '';
​
for (;cars[i];) {
  text += cars[i] + '<br>';
  i++;
}

(cars);
​
// while loop
​
var cars = ['BMW', 'Volvo', 'Saab', 'Ford'];
var i = 0;
var text = '';
​
while (cars[i]) {
  text += cars[i] + '<br>';
  i++;
}




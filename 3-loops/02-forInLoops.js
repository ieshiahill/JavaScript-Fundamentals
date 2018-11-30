/* For-in loops - great for iterating (going through multiple times) over values in an object - they work in the properties are 
"enumerable"   
*/

let student = {name: "Peter", awesome: true, degree: "JavaScript", week: 1} 

for (item in student){
    console.log(item); //prints just the keys (item = is before the semicolon) (key=what is after the semicolon)
    console.log(student[item]);
}

// Challenge: write a for in loop that capitalizes the first letter of a student's name, otherwise it's lower case

let name = "iEshia"
let capName;
for (let n in name){
    if (n == 0){
        capName = name[n].toUpperCase();
    } else {
        capName += name[n].toLowerCase();
    }
}
console.log(capName);



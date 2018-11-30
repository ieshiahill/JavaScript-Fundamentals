//the parameter always goes inside of the ()in the function - you can have as many parameters you want 
// think of a parameters as an empty container 
// 

function pet(animal, car, house, bike){
    // let animal = "cat"
console.log(`I have a ${animal} as a pet.`);
}
pet("cat"); //you have to list the values in order by parameter. ex: cat/animal, honda,car, etc.)

//write a function that takes 2 parameters, one for a first name, the other for a last name. Have them come together in a variable inside of the function console.log 
function identify (first, last){
    let name = (first + " " + last);
    console.log(`Hello, my name is ${name}.`)
}
identify("Ieshia, Hill");
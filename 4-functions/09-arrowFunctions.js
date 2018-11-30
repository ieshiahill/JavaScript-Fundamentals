// Arrow functions /fat arrow functions 
// fat arrow functios are declarations and are always on the right side of the equal sign

//example of a normal function
function coffee() {
    console.log("coffee is tasty")
}
coffee();


//example of a fat arrow function - the function is now a function (the arrow replaces "function")
let coffee = () => {
    console.log("coffee is really tasty")
}

coffee();

//fat arrow functions can also bring in parameters

let cats = (kitten, puppy) => { console.log(`I have ${kitten} cats(s) and ${puppy} dog(s).`)}

cats(1, 14);

//concise or body blocks
//example below
let apples = (x) => { console.log(x, "apples for dinner") } //body block example

let apples = x => console.log(x, "apples for dinner")     //concise example -  only works when I have 1 parameter and 1 actions

apples(10); 


//if you have no parameters, you still have to have empty parenthesis ()

//line breaks are bad 
let funct = () => console.log("good"); // good




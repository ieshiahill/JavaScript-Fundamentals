// What is scope?
// JS has local and global scopes 
var x = 12    //global scope - available anywhere

function scope(){    //local scope to function - everything inside of the function is specific to the function's scope
    x = 33
    console.log(x)
}
scope()
console.log(x) 

// if x = 33 in the function - when you print the code the values will be 33 because the function console.log was run first because the scope function was called first 



function varTest(){
    var scope = 1 
    if (true) {
        var scope = 2
        console.log(scope)
    }
    console.log(scope)
}
varTest()

function letTest(){ //let is better to use than var - let is a block scope
    let scope = 1
    if (true) {
        let scope = 2
        console.log(scope)
    }
    console.log(scope)
}
letTest() 
 


// let and const are block scope, var is not a block scope 

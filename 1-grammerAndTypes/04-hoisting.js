// console.log(scissors)
// var scissors = "pink scissors"

// // console.log(cats)
// let cats = "the best"

// console.log(dogs)
// const dogs = "pretty good" 

/*
Let and const do not get hoisted - you can only use them after you delcare them. It's good practice to declare all of your variables at the top of your file
*/

hiTom()
//function
function hiTom(){
    console.log("hi tom")
}
tom()
//function expression
 let tom = function hi(){
     console.log("hiii tom")
 }
 /*Functions are hoisted and can be used before they are declared. Function expressions can only be used after they are declared, they are not hoisted.
 Remember JS reads the left side (declaration) first, then the right. Regular function only have a lief side, expressions have both.
 */


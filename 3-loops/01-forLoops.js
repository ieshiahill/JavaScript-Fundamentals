// Good anytime you want to add repeated code
/* Loops offer a quick and easy way to do something repeatedly. There are many different kinds of loops but they all do roughly the same thing

1. for statement
2. do while 
3. while 
4. labeled 
5. break
6. continue
7. for in 
8. for of 
*/

// for loop

//don't go past 10 counting by 1s
for (let i = 0; i < 10; i++){
    console.log(i);
}

//count to 20 by 2s
for (let i = 0; i <= 20; i+=2){
    console.log(i);
}

//count down from 10 by 1s
for (let i = 10; i >= 10; i--){
    console.log(i);
}

//count up to 24 by 2s
for (let i = 0; i >= -24; i-=2){
    console.log(i); 
} 

//Make a loop where you add up all the numbers from 1 to 50 (should equal 1275)

let sum = 0;
for (let i = 0; i <= 50; i++){
    // sum+=;//0 1 3 6...
    sum = sum + i;
}
console.log(sum); 


for (var i = 0; i <= 50; i+=5){
    console.log(i);
} 

for(var i = 0; i <= 50; i+=5){
    console.log(i);
}
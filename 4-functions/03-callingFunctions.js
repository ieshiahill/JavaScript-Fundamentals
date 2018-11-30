//Calling Functions

function hi() {
    console.log("hi");
}

//a function is a self contained machine that has to be triggered

hi() // to call a function, you have to add the () at the end of the name to immediately run that function 

// you can't console.log the function name

//create a function that when invoked, lists out the numbers 1-10
function digits() {
    for (let i = 1; i <= 10; i++){
        console.log(i);
    }
}
digits();

// given the array below, create a function that lists out the values individually


function list(){
let arr = ["This", "is", "really", "cool"];
for (words in arr) {
    console.log(arr[words]);
    }   
}
list();
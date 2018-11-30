// Arrays 

let arr = [];

console.log(typeof arr) 


    // console.log(students[3]);

// Challenge: Go into the nested array and get "Amira" - print out "Hello Amira, you look nice today"

// let students = [23, true, false, "Evan", "Parker", ["Amira", "Mohamed"]]
// let names = students[5][0]
//     console.log(`Hello ${names}, you look nice today`)

// let food = ["pizza", "tacos", "bbq", "ramen", "fillet", "brussel sprouts"]
// //print the values of the arrays listed above
// for (f in food){
//     console.log(food[f]);
// }
   
let food = ["pizza", "tacos", "bbq", "ramen", "fillet", "brussel sprouts"]
//method
food.push("cheese cake");

food.splice(3, 1, "spaghetti"); //.splice (position, how many to delete, what to put in)

for (let f in food){
    console.log(food[f])
}

//for each method - prints only the values
food.forEach(f => console.log(f));

// for each method - printing the values and the index
food.forEach((value, number) => {console.log(number); console.log(value)})

//Challenge: Create a list (with an array) of movies 
//Use .forEach() to list your movies 
//Add another movie at the end
//And replace one of your existing movies with another one

let movies = ["Batman", "Remember the Titans", "Iron Man", "Scream"]
movies.forEach((value) => {console.log(value) })
movies.push("Finding Nemo");
movies.splice(2, 1, "Wonder Woman");

//You can count what's in your array but using the .length (as an object)

//.length

let newArr = [1,2,3,4,5,6,7,8,9,10]
    console.log(newArr.length);

let colors = ["blue", "green", "yellow", "black"]
    
    console.log(typeof colors.toString());

    console.log(colors.length);
let nbaTeams = ["Pacers", "Cavs", "Celtics", "Lakers"]
    console.log(nbaTeams.length);
    console.log(typeof nbaTeams.toString());
    nbaTeams.forEach((value) => {console.log(value) }) 

//Challenge: First check if you are working with an array
//Then flip the values within the array (what was the index 4 is now in 0, 3 to 1, etc.)
//Using a method only, print the value of the newly arrnged array

let indianaHighSchools = ["North Central", "Warren", "Ben Davis", "Pike", "Tech"]
    console.log(indianaHighSchools instanceof Array);
    console.log(indianaHighSchools.reverse());
    indianaHighSchools.forEach((value) => {console.log(value) });



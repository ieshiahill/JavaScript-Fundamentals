// A switch statement is another way to write a conditional

let friend = "Paul";

switch (friend) {
    case "Kenn":
        console.log("Wanna play Catan?");
        break;
    case "Carolyn":
        console.log("Wanna go rock climing?");
        break;
    case "Tyler":
        console.log("Can I ask a question?");
        break;
    case "David":
        console.log("I remember doing this...");
        break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`);
}

let dessert = "Cake";

switch (dessert) {
    case "Pie":
        console.log("Pie, pie, me oh my!");
        break;
    case "Cake":
        console.log("Cake is great!");
        break;
    case "Ice Cream":
        console.log("I scream for ice cream!");
        break;
    default: 
        console.log("Not on the menu.");
}

var friend = "Ieshia"

switch (friend) {
    case "Fred":
    console.log("Hey Fred, let's go golfing.");
    break;
    case "Karl":
    console.log("Let's hang.");
    break;
    case "John":
    console.log("Sorry, I'm busy right now.")
    break;
    default:
    console.log("Hey " + friend + "can I call you back in a minute?");
}

var weather = "50"
switch (weather) {
    case "-20":
    console.log("Stay inside. It's freezing!");
    break;
    case "30":
    console.log("Please put on your hat and gloves.");
    break;
    case "80":
    console.log("Put on some shorts and flip flops.");
    break;
    default:
    console.log("Could you check the weather please?")
}

var problem =  "old car"
switch (problem){
    case "high mileague": 
    console.log("Change you oil.");
    break;
    case "don't know":
    console.log("Send your oil to the lab to be analyzed.");
    break;
    case "won't start":
    console.log("Get your car towed.");
    break;
    case "smoking":
    console.log("Take your car to a mechanic.");
    break;
    case "old car": 
    console.log("Sell your car.");
    break;
    default: 
    console.log("Take it to the junk yard to get scrapped.")
}

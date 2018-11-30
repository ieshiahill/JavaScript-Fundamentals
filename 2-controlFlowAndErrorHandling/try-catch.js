//contains one of more statements. You want the the block to pas
//if it doesn't, you want control to pass to the catch block 

function tryCatchDemo(a){
    try {
        var upperCaseWord = a.toUpperCase();
        console.log(upperCaseWord);
    }
    catch(err){
        console.log(err);
    }
}

tryCatchDemo("Hello"); 
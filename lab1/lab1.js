// Question 1:
// x y z are of type Integers
function sumOfSquares(x, y, z) {
    try {
        if (typeof x === "number" && typeof x === "number" && typeof x === "number")
        //Returns the square and summation of numbers
            return(((x * x) + (y * y) + (z * z)));
        else
            throw   "No Valid Input ";

    }
    catch (err) {
        console.log(err)
    }
}
//Prints the output on terminal window
console.log(sumOfSquares(5, 3, 10))

//---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*
// Question 2:
//function sayHelloTo takes 3 arguments of type String
function sayHelloTo(arg, arg1, arg2) {
    try {
//If all three arguments are undefined
        if (arg == undefined && arg1 == undefined && arg2 == undefined)
            return("No Valid Input ");
//If arg1 and arg2  are undefined
        else if (arg1 == undefined && arg2 == undefined)
            return("Hello " + arg + "!");
//If arg2  is undefined
        else if (arg2 == undefined)
            return("Hello " + arg + " " + arg1 + ". I hope you are having a good day!");
        else
            return("Hello " + arg2 + " " + arg + " " + arg1 + "! Have a good evening!");
    }
    catch (err) {
        console.log(err);

    }
}
console.log(sayHelloTo()); // throws
console.log(sayHelloTo("Phil")); // logs: Hello, Phil!
console.log(sayHelloTo("Phil", "Barresi")); //logs: Hello, Phil Barresi. I hope you are having a good day!
console.log(sayHelloTo("Phil", "Barresi", "Mr.")); // logs: Hello, Mr. Phil Barresi! Have a good evening!
//---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*
// Question 3:
//function cupsOfCoffee takes a single argument of type Integer
function cupsOfCoffee(x) {
    try {
        if (typeof x === "string" || x == 0)
            throw "Invalid"
        while (x > 1) {
            console.log(x + " cups of coffee on the desk! " + x + " cups of coffee!\n" +
                "Pick one up, drink the cup," + (x - 1) + " cups of coffee on the desk!")
            x--;
        }
      
        if (x == 1) {
        return(x + " cup of coffee on the desk! " + x + " cup of coffee!\n" +
                "Pick one up, drink the cup, no more coffee left on the desk!")
        }
    }

    catch (err) {
        console.log(err);
    }
}
console.log(cupsOfCoffee(5));


//---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*
// Question 4:
/*
 function countOccurrencesOfSubstring takes two arguments of type String
 where the former is the Primary String and the second is the string which
 is to be located in the primary string
 */
function countOccurrencesOfSubstring(str, word) {
    try {
        // console.log(str.length)
        if (typeof str === 'number' || str.length < 1){
            throw "Invalid input";
        }
        var count = 0;
        var pos = str.indexOf(word);
        while (pos !== -1) {
            count++;
            pos = str.indexOf(word, pos + 1);
        }
        return count;
    }
    catch (err) {
        console.log(err)
    }

}
//Prints the output on terminal window
console.log(countOccurrencesOfSubstring("Helllllllo, class!", "ll"));


//---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*
// Question 5:
var paragraph = "Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations.";
//function randomizeSentences takes input as a String and shuffles the paragraph
function randomizeSentences(paragraph) {
    try {

        var result = paragraph.match(/\(?[^\.\?\!]+[\.!\?]\)?/g);
        if (result.length == 1) throw "cannot shuffle"
        for (var i = 0; i < result.length; i++) {
//Use of Random function to shuffle the array indices
            var j = Math.floor(Math.random() * i);
            var temp = result[i];
            result[i] = result[j];
            result[j] = temp;
        }
        return result.join(" ");
    }
    catch (err) {
        console.log(err)
    }
}
//Prints the output on terminal window
console.log(randomizeSentences(paragraph));
//---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*


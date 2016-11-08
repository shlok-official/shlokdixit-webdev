"use strict"; 
exports.createMetrics = function (text) {
    if(!text){
        console.log("No string provided");
    }
    else if (typeof text === "undefined" ||typeof text === null ){
        console.log("No data provided");
    }
    else if (text.length <= 0){
        console.log("Please provide a bigger string")
    }
    var obj = {
        totalLetters: totalLetters(text),
        totalWords: totalWords(text),
        uniqueWords: uniqueWords(text),
        longWords: longWords(text),
        averageWordLength: averageWordLength(text),
        numberOfSentences: numberOfSentences(text),
        textComplexity: textComplexity(text),
        wordOccurrences: wordOccurrences(text)
    }
    //------------------------------------------------------------------------------
    //longWords() => number of words in the text that are 6 or more letters long
    function longWords(text) {
        var counter = 0;
        var x = text.split()
        x.forEach(function (s) {
            if (s.length >= 6)
                counter++
        })
        return counter;
    }
    //------------------------------------------------------------------------------
    //totalLetters() => total number of letters in the text
    function totalLetters(text) {
        return (text.replace(/[^A-Z]/gi, "").length)
    }
    //------------------------------------------------------------------------------
    //totalWords() =>total number of words in the text,
    function totalWords(text) {
        return (text.split(' ').length)
    }
  
    //------------------------------------------------------------------------------
    //averageWordLength() => the average number of letters in a word in the text,
    function averageWordLength(text) {
        return ((totalLetters(text)/totalWords(text)).toFixed(2))
    }
    //------------------------------------------------------------------------------
    //numberOfSentences() => total number of sentences in the text
    function numberOfSentences(text) {
        return (text.match(/[^\.!\?]+[\.!\?]+/g).length)
    }
    //------------------------------------------------------------------------------
    //textComplexity() => Derived by the formula: totalWords/numberOfSentences + (longWords x 100)/totalWords
    function textComplexity(text) {
        return (((totalWords(text) / numberOfSentences(text)) + ((longWords(text) * 100) / totalWords(text))).toFixed(2))
    }
    //------------------------------------------------------------------------------
    //wordOccurrences() => occurence of every word in the sentence
    function wordOccurrences(text) {
        var total = 0;
        var index = {},
            words = text.replace(/[.,?!;()"'-]/g, "")
                .replace(/\s+/g, " ")
                .toLowerCase()
                .split(" ");
//console.log(words)
        words.forEach(function (word) {
            if (!(index.hasOwnProperty(word))) {
                index[word] = 0;
            }
            index[word]++;
            total++;
        });
        return index;
    }

  //------------------------------------------------------------------------------
    //uniqueWords() =>total number of unique words that appear in the text
    function uniqueWords(text) {
         var total = 0;
        var index = {},
        words = text.replace(/[.,?!;()"'-]/g, "")
                .replace(/\s+/g, " ")
                .toLowerCase()
                .split(" ");
             words.forEach(function (word) {
            if (!(index.hasOwnProperty(word))) {
                index[word] = 0;
            }
            index[word]++;
            total++;
        });
        return(Object.keys(index).length)  
    }
    return obj;
}
 //------------------------------------------------------------------------------


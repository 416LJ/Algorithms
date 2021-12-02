var letters = [];
var word = "racecar";
var reversedWord = "";

for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
    }



for (let j = letters.length-1; j >= 0; j--) {
    reversedWord += letters.pop();
    }

if (word === reversedWord) {
    console.log("This word is a palindrome");
}else{
    console.log("This word is not a palindrome");
}

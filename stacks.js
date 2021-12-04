
palindrome("racecar");

function palindrome(theWord) {
    var letters = [];
    var word = "racecar";
    var reversedWord = "";

    for (let i = 0; i < word.length; i++) {
        letters.push(word[i]);
    }



    for (let j = letters.length - 1; j >= 0; j--) {
        reversedWord += letters.pop();
    }

    if (word === reversedWord) {
        console.log("This word is a palindrome");
    } else {
        console.log("This word is not a palindrome");
    }
}



var Stack = function(){

    this.count = 0;
    this.storage = {};

    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    }

    this.pop = function(){
        if (this.count == 0) {
            return "stack is empty";
        }else{
            this.count--;
            var result = this.storage[this.count];
            delete this.storage[this.count];
            return "popping off stack : " + result;
        }
    }

    this.size = function(){
        return this.count;
    }

    this.peek = function(){
        return this.storage[this.count-1];
    }
    
}

var newStack = new Stack;
console.log(newStack.pop());
newStack.push(1);
newStack.push("world");
newStack.push("hello");
console.log(newStack.pop());
console.log(newStack.peek());
console.log(newStack.size());
console.log(newStack.storage);

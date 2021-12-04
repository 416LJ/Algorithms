function Queue() {
    collection = [];
    this.print = function(){
        console.log(collection);
    };

    this.enqueue = function(element){
        collection.push(element);
    };

    this.dequeue = function(){
        return collection.shift();
    };

    this.front = function(){
        return collection[0];
    }

    this.size = function(){
        return collection.length;
    }

    this.isEmpty = function(){
        if(collection.length === 0){
            return true;
        }else{
            return false;
        }
    }

}

var a = new Queue();

console.log(a.isEmpty());
a.enqueue("B");
a.enqueue("A");
console.log("after addition")
console.log(a.isEmpty());
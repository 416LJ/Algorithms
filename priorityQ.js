function priorityQueue(){

    var collection = [];
    
    this.printCollection = function(){
        console.log(collection);
    };

    this.enqueue = function(element){
        if (this.isEmpty) {
            collection.push(element)
        }else{
            var added = false;
            for (let i = 0; i < collection.length; i++) {
                if(element[1] < collection[i][1]){
                    collection.splice(i,0,element);
                    added = true;
                    break;
                }
            }
            if(!added){
                collection.push(element);
            }
        }
    };

    this.dequeue = function (){
        var value = collection.shift();
        return value[0];
    };

    this.front = function () {
        return collection[0];
    };

    this.size = function (){
        return collection.length;
    };

    this.isEmpty = function (){
        if (collection.length === 0) {
            return "collection is empty"
        }
    };
}

var pq = new priorityQueue();

pq.enqueue(["laxsan", 5]);
pq.enqueue(["kobe", 4]);
pq.enqueue(["karl", 4]);
pq.enqueue(["Mike", 3]);

pq.printCollection();
console.log(pq.size());
console.log(pq.front());
console.log("just removed : "+pq.dequeue());
pq.printCollection();
function mySet(){
    var collection = [];
    
    this.has = function(element){
        return (collection.indexOf(element) !== -1);
    };

    this.values = function(){
        return collection;
    };

    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return "item has been added";
        }else{
            return "item already exists";
        }
    };
    
    this.remove = function (element){
        if(this.has(element)){
            index = collection.indexOf(element);
            console.log(index);
            collection.splice(index,1);
            return "removed";
        }else{
            return "item doesnt exist";
        }
    };

    this.size = function(){
        return collection.length;
    };

    this.intersection = function(otherset){
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherset.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    }

    this.difference = function(otherset){
        var differenceSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(!otherset.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
    }


    this.subset = function(otherset){
        var firstSet = this.values();
        return firstSet.every(function(value){
            return otherset.has(value);
        });
    };

}

var setA = new mySet();
var setB = new mySet();

setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");

console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

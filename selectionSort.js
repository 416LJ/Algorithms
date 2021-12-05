array = [6,33,124,76,2345,702,24,68,0,86,221,321,555,3,5,1,9,1]

// Selection sort

console.log("array before : " + array)
for (var i = 0; i < array.length-1; i++) {
    var min = i;
    for (var j = i +1; j < array.length; j++) {
        console.log(`comparing ${array[min]} and ${array[j]}`)
        if (array[j] < array[min]) {
            min = j;
            console.log(`set new min number from ${array[i]} to ${array[j]}`)
        
        }
    }
    swap(i,j);
    console.log(`swapping ${array[i]} and ${array[min]}`);
    
}
console.log(array)
function swap(i,j){
    temp = array[i];
    array[i] = array[min];
    array[min] = temp;
}


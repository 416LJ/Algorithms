array = [6,33,124,76,2345,702,24,68,0,86,221,321,555,3,5,1,9,1]

// Bubble sort

console.log("array before : " + array)
for (let i = 0; i < array.length-1; i++) {
    for (let j = i+1; j < array.length; j++) {
        if(array[j] < array[i]){
            console.log(`swapping ${array[i]} and ${array[j]}`);
            swap(i,j);
        }
        
    }    
}
console.log(array)
function swap(i,j){
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}


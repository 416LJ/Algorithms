array = [6,33,124,76,2345,702,24,68,0,86,221,321,555,3,5,1,9,1]

// Insertion sort

console.log("array before : " + array)
for (var i = 1; i < array.length; i++) {
    for (var j = i; j > 0; j--) {
        if(array[j] < array[j-1]){
            console.log(`swapping : ${array[j]} and ${array[j-1]}`)
            swap(j);
            
        }else{
            break;
        }
    }   
}

console.log(array);
function swap(j){
    temp = array[j];
    array[j] = array[j-1];
    array[j-1] = temp;
}
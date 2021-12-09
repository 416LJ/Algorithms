var count = 0;

for(let i = 1; i<=100; i++){
    isPrime(i);
    if(isPrime(i)){
        console.log("this number " + i + " is prime");
        count ++;
    }

    if(count >= 10){
        break;
    }
}


function isPrime(num){
    if(num == 1){
        return false;
    }

    for(let i = 2; i<=(Math.sqrt(num)); i++){
        if(num % i == 0){
            return false;
        }else{
            return true;
        }
    }
}


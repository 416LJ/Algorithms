
function convertToRoman(num) {
    const symbols = {
      M : 1000,
      CM: 900,
      D : 500,
      CD : 400,
      C : 100,
      XC : 90,
      L : 50,
      XL : 40,
      X : 10,
      IX : 9,
      V : 5,
      IV : 4,
      I : 1
    }
    var newNum = num;
    var str = "";
  
    for(let i in symbols){
      let value = symbols[i];
      

      
      while(value <= newNum){
        newNum = newNum - value;
        console.log("Adding the symbol " + i);
        str = str + i;
      }
    }
  
  
   return "the number " + num + " converted to Roman Numeral is " + str;
  }
  
console.log(convertToRoman(35));

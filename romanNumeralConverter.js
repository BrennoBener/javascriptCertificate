function convertToRoman(num) {
    let convert = {
      M:1000, 
      CM:900, 
      D:500, 
      CD:400, 
      C:100, 
      XC:90, 
      L:50, 
      XL:40, 
      X:10, 
      IX:9, 
      V:5, 
      IV:4, 
      I:1
      }, 
      number = '',valor;
    for (valor in convert){
      while (num >= convert[valor]) {
        number += valor;
        num -= convert[valor]
      }
    }
   return number;
  }
  
  convertToRoman(num);
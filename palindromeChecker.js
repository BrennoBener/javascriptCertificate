function palindrome(str) {
    str = str.replace(/[\W_]/g, '').toLowerCase();
    
    return str === str.split("").reverse().join("");
  }
  
  palindrome("eye");
  
  //.split vai transformar a string em array ex: Eye vai ser [E, Y, E]//
  //.reverse vai inverter a Ordem do array//
  //.join vai tranformar meu array em string//
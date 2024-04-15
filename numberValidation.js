function telephoneCheck(str) {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    // Usei regex para resolver o problema de checagem//
    //(\d{3}\) vai checar exatamente 3 digitos//
    //(1\s)? checa o numero 1 mas opcional, também checa espaço em branco//
    //\d{4} vai checar os ultimos números.//
    return regex.test(str);
  }
  
  telephoneCheck("555-555-5555");
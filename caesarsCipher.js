function rot13(str) {
    return str.replace(/[A-Z]/g, c => String.fromCharCode((c.charCodeAt(0)- 65+ 13) %26 +65));
  }
  
  rot13("SERR PBQR PNZC");
  
  //OBS.: /[A-Z]/g, c é regex para avaliar todas as letras globalmente.//
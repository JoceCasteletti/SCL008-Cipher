window.cipher = {
  encode: (offset, message)=> {
    let resultencode ='';

    for (let i=0; i < message.length; i++) {
      let asciiCode = message.charCodeAt(i);

      if (asciiCode >= 65 && asciiCode <=90){
        asciiCode = ((asciiCode - 65 + offset) % 26) + 65;
      }

      if (asciiCode >= 97 && asciiCode <=122){
        asciiCode = ((asciiCode - 97 + offset) % 26) + 97;
      }

      if (asciiCode >= 48 && asciiCode <=57){
        asciiCode = ((asciiCode - 48 + offset) % 10) + 48;
      }

      if (asciiCode == 32) {
        asciiCode = ((asciiCode - 32 + offset) % 1) + 32;
      }
      
      resultencode = resultencode + String.fromCharCode(asciiCode);
    } 
    
    return resultencode;

  },
  
  decode: (offset, message) => {
    let resultdecode ='';

    offset =  26 - offset;
  
    for (let i=0; i < message.length; i++) {
      let asciiCode = message.charCodeAt(i);
    
    
        if (asciiCode >= 65 && asciiCode <=90) {
          asciiCode = ((asciiCode - 65 + offset) % 26) + 65;
        }

        if (asciiCode >= 97 && asciiCode <=122) {
          asciiCode = ((asciiCode - 97 + offset) % 26) + 97;
        }

        if (asciiCode == 32) {
          asciiCode = ((asciiCode - 32 + offset) % 1) + 32;
        }

        if (asciiCode == 32) {
          asciiCode = ((asciiCode - 32 + offset) % 1) + 32;
        }

        resultdecode = resultdecode + String.fromCharCode(asciiCode);
      } 
      
      return resultdecode;

    }
  }
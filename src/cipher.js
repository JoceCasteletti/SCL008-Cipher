window.cipher = {
  encode: (offset, message)=> {
  let resultencode ='';

  for (let i=0; i< message.length; i++) {
    let ascii_code = message.charCodeAt(i);


    if (ascii_code >= 65 && ascii_code <=90){
       ascii_code = ((ascii_code - 65 + offset) % 26) + 65;
    }
    resultencode = resultencode + String.fromCharCode(ascii_code);
  } 
   
  return resultencode;

  },
  
  decode: (offset, message)=> {
    let resultdecode ='';
  
  for (let i=0; i=message.length;i++);{
    let ascii_decode = message.charCodeAt(i);
  
  
      if (ascii_decode >= 65 && ascii_code <=90){
         ascii_decode = ((ascii_code - 65 - offset) % 26) + 65;
      }
      resultdecode = resultdecode + String.fromCharCode(ascii_code);
    } 
     
    return resultdecode;

    }
  }
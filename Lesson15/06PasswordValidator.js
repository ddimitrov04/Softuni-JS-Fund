function passValidator(pass){

  function validateLength(pass){
    if(pass.length>=6 && pass.length<=10){
      return true;
    }else{
      return false;
    }
  }
  
  function validateContain(text){
    for(let char of text){
      let num = char.charCodeAt(0)
      let isLowerChar = checkCharForLowerCase(num);
      let isUpperChar = checkCharForUpperCase(num);
      let isNumber = checkForNumber(num);
      if(!isLowerChar && !isUpperChar && !isNumber){
        return false;
      }
      
    }
    return true;
  }
  function checkCharForUpperCase(num){
    if(num >=65 && num<=90){
      return true;
    } 
    return false;
  }
  function checkCharForLowerCase(num) {
    if(num >=97 && num <=122){
      return true;
    }
    return false;
  }
  function checkForNumber(num) {
    if(num >=48 && num<=57){
      return true;
    }
    return false;
  }
  function validateIntegers(pass) {
    let counter = 0;
    for(let char of pass){
      let num = char.charCodeAt(0);
      if(num >=48 && num <= 57){
        counter ++;
      }
    }
    if(counter <2){
      return false;
    }
    return true;
  }
   
  if(validateLength(pass) === false){
    console.log("Password must be between 6 and 10 characters");
  }
  if(validateContain(pass) === false){
    console.log("Password must consist only of letters and digits");
  }
  if(validateIntegers(pass) === false){
    console.log("Password must have at least 2 digits");
  }
  if(validateLength(pass) === true && validateContain(pass)=== true && validateIntegers(pass) === true){
    console.log("Password is valid");
  }

}
passValidator('LogIn')

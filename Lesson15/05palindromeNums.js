function palindrome(input){
  for (let i = 0; i < input.length; i++) {
    let number = input[i];
    result = Number(String(number).split('').reverse().join(''));  
    
    if (number === result) {
      console.log(`true`);
    }else{
      console.log(`false`);
    }
  }
  
  

}
palindrome([123,323,421,121])

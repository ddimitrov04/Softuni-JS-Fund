function oddEvenSum(a){
    let strNum = a.toString();
    let chars = Array.from(strNum)
    let oddSum =0;
    let evenSum = 0;    
    for (let i = 0; i < chars.length; i++) {
      let num = parseInt(chars[i])
      if(num %2 === 0){
        evenSum += num;  
      }else{
        oddSum += num;
      }
      
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
} 
oddEvenSum(1000435)

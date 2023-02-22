function addNsubstract(a,b,c){
  let sumOfTwoNumbers = (a,b) => a+b;
  let substractTwoNunmbers = (s,c) => s-c;
  
  let sum = sumOfTwoNumbers(a,b)
  let final = substractTwoNunmbers(sum,c)
  return final;
}



console.log(addNsubstract(10,5,2)); 

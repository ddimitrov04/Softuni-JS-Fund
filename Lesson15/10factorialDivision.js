function factorialDivision(num1,num2){
   function factorial(n){
    let numOfReturn = 1;
      if (n === 0){
      return 1;
      }else if(n<0){
        return -1;
      }else{
      return (n*factorial(n-1));
    }
    }
let divisedNum = factorial(num1)/factorial(num2);
console.log(divisedNum.toFixed(2)); 
}
 
factorialDivision(5,2);

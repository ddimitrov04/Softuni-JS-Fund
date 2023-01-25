function sumNumber(num){
    let digits = String(num).split('').map(Number);
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        sum += digits[i];
        
    }
    console.log(sum);
 
}
sumNumber(245678);    

function maxSequenceOfNumbers(arr){
    let result = [];
    let longestcount= 0;
    
    for (let i = 0; i < arr.length; i++) {
      let count = 0;
      let currentresult = [];
      currentresult.push(arr[i]);
      for (let j = i+1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          count++;
          currentresult.push(arr[j]);
        }else{
          break;
        }

        
      } 
      if (count>longestcount) {
        longestcount = count;
        result = currentresult;
      }     
    }
    console.log(result.join(" "));
}

      
  maxSequenceOfNumbers([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])

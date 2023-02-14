function equalSums(arr){
    if(arr.length=== 0){
      return '0';
    }
    let sumLeft = 0;
    
    for (let i = 0; i < arr.length; i++) {
      let sumRight = 0; 
      for (let j = i+1; j < arr.length; j++) {
          sumRight+=arr[j];
        }
       if(sumRight===sumLeft){
        return i;
        
       }else{
        sumLeft += arr[i];
       }
    }
    console.log("no");
    
  }
console.log(equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]));

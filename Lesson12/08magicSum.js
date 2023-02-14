function magicSum(array,number){
  let answer = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if(array[i]+array[j]===number){
        //answer.push([array[i],array[j]])
        console.log(`${array[i]} ${array[j]}`);
      }
      
    }
    
  }

  // for (const el of answer) {
  //   console.log(`${el[0]} ${el[1]}`);
    
  // }
  
  
}

      
magicSum([1, 7, 6, 2, 19, 23],
8)

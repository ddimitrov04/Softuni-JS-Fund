function arrayRotation(arr,rotations){
    
    let answer = ``;
      for (let i = 0; i < rotations; i++) {
      arr.push(arr.shift());
  }
    for (let i = 0; i< arr.length; i++) {
      if(i == arr.length-1){
        answer += `${arr[i]}`
      }else{
        answer += `${arr[i]} `
      }
    }
    console.log(answer);
    
}
arrayRotation([51, 47, 32, 61, 21], 2);

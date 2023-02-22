function charInRange(a,b){
  let first = a.charCodeAt(0);
  let second = b.charCodeAt(0);
  // console.log(first);
  // console.log(second);
  let higherNum = 0;
  let lowerNum = 0;
  
  if(first>second){
    higherNum = first;
    lowerNum = second;
  }else if(second>first){
    higherNum = second;
    lowerNum = first;
  }
  let answer = '';
  for(let i= lowerNum+1; i<higherNum; i++){
    let symbol = String.fromCharCode(i)
     answer += symbol;
  }
  console.log(answer.split('').join(' '));
} 

charInRange('C','#'); 

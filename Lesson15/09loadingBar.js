function loadingBar(number){
  let percents = number/10;
  let arr = [];
  for (let i = 1; i <= 10; i++) {
    if(i<=percents){
      arr += '%'
    }else{
      arr +='.'
    }
    
  }
  if(number<100){
    console.log(`${number}% [${arr}]`);
    console.log(`Still loading...`);
  }else{
    console.log(`${number}% Complete!`);
    console.log(`[${arr}]`);
  }

 } 

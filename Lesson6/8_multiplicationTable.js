function multiplicationTable(num){
   for (let i = 1; i <= 10; i++) {
      let answer = num*i;
      console.log(`${num} X ${i} = ${answer}`);
   }
   
}

multiplicationTable(5)

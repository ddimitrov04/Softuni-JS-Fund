function printAndSum(start, end){
   let sum = 0;
   let arr = [];
   for (let i = start; i <= end; i++) {
      process.stdout.write(`${i} `);
      sum += i;
   }
   
   console.log(`\nSum: ${sum}`);
}

printAndSum(50,60)

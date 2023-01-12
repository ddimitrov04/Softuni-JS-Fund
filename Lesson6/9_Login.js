function login(input){
   let username = input[0];
   let pass = "";
   for(let i= username.length-1; i>=0; i--){
      pass += username[i];
   }
   let index=1;
   while(input[index]!=pass){
      
      if(index >=4){
         return `User ${username} blocked!`;
      }
      console.log("Incorrect password. Try again.");
      index++;
   }
   console.log(`User ${username} logged in.`);
}

login(['sunny','rainy','cloudy','sunny','not sunny'])

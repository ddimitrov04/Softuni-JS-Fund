function commonElements(input1,input2){
    let arr3=[];
    for (let i = 0; i < input1.length; i++) {
        if(i%2==0){
           let number = parseInt(input1[i])+parseInt(input2[i]);
           arr3[i] =number; 
        }else{
            let numberConcat = input1[i]+input2[i]
            arr3[i] = numberConcat;
        }
        
    }
    // arr3.forEach(element => {
    //     process.stdout.write(element + " - ")
    // });
    let finalPrint =``;
    for (let i = 0; i < arr3.length; i++) {
        if(i == arr3.length-1){
            finalPrint+= arr3[i]
        }else{
            finalPrint+= `${arr3[i]} - `
        }
        
    }
    console.log(finalPrint);
    
}
commonElements(['5', '15', '23', '56', '35'],['17', '22', '87', '36', '11']);
//80/100 Mistake somewhere? :(

function excavation(input){
    let sumOfOriginal = 0;
    let sumOfModified = 0;
    let modifiedArray = [];
    for (let i = 0; i < input.length; i++) {
        let currentNum = input[i];
        sumOfOriginal += currentNum;
        if(currentNum%2===0){
            let modifiedNum =currentNum+i; 
            sumOfModified += modifiedNum;
            modifiedArray[i]=modifiedNum;
        }else{
            let modifiedNum =currentNum-i;
            sumOfModified +=modifiedNum;
            modifiedArray[i]=modifiedNum;
        }
    }
    console.log(modifiedArray);
    console.log(sumOfOriginal);
    console.log(sumOfModified);
}


excavation([5,15,23,56,35]);

function sumNumber(num1,operator,num2){
    let answer = 0;
    if(operator == '+'){
        answer = num1+num2;
    }else if(operator == '-'){
        answer = num1-num2;
    }else if(operator == '/'){
        answer = num1/num2;
    }else if(operator == '*'){
        answer = num1*num2;
    }
    console.log(answer.toFixed(2));
}
sumNumber(5,'+',10);    

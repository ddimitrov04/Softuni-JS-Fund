function excavation(excavatedSpices){
    let savedSpices = 0;    
    let days = 0;
    while(excavatedSpices>=100){
        days++;
        savedSpices+=excavatedSpices;
        excavatedSpices-=10
        savedSpices-=26;
        if(savedSpices<26){
            break;
        }
    }
    if(savedSpices>=26){
       savedSpices-=26;
    }
   console.log(days);
   console.log(savedSpices);
}

excavation(450)

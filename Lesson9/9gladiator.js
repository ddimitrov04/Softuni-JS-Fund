function gladiator(lostFights,helmetPrice,swordPrice,shieldPrice,armorPrice){
    let moneySpend = 0;
    let shieldBreaks = 0;
    for (let i = 1; i <= lostFights; i++) {
        if(i%2 === 0 && i%3===0){
            moneySpend += helmetPrice;
            moneySpend += swordPrice;
            shieldBreaks++;
            moneySpend += shieldPrice;
            if(shieldBreaks%2==0){
                moneySpend +=armorPrice
            }
        }else if(i%2 ===0){
            moneySpend +=helmetPrice;
        }else if(i%3 ===0){
            moneySpend +=swordPrice
        }
        
    }
    console.log(`Gladiator expenses: ${moneySpend.toFixed(2)} aureus`);
}

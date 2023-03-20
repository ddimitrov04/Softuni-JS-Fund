function train(arr){
    let wagons = arr.shift().split(' ').map(el => Number(el));
    // for (let i = 0; i < wagons.length; i++) {
    //     wagons[i] = Number(wagons[i]);
    // }
    let maxCapacity = Number(arr.shift());
    
    for(let el of arr){
        let command = el.split(' ');
        if(command[0] === "Add"){
            wagons.push(Number(command[1]))
        }else{
            let passagers = Number(command[0])
            for(let i = 0; i < wagons.length; i++){
                if(wagons[i] + passagers <= maxCapacity){
                    wagons[i] += passagers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(" "));
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);

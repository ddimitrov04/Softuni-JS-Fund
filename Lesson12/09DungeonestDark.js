function DungeonestDark(dungeoRooms){
  let health =100;
  let coins = 0;
  let filteredDungeon = dungeoRooms[0].split('|')
  let filteredDungeon1 = filteredDungeon.join(' ').split(' ')
  
  let bestRoomCounter = 1;
  let isDead = false;
  for (let i = 0; i < filteredDungeon1.length; i+=2) {
      if(isDead){
        break;
      }
      if(i%2===0){
      switch (filteredDungeon1[i]) {
        case 'potion':
          bestRoomCounter++;
          if(Number(filteredDungeon1[i+1])+health >=100){
            let healedHP = 100- health;
            health += healedHP;
            console.log(`You healed for ${healedHP} hp.`);
            console.log(`Current health: ${health} hp.`);
            break;
          }else{
            console.log(`You healed for ${filteredDungeon1[i+1]} hp.`);
            health+=Number(filteredDungeon1[i+1]);
            if (health > 100) {
              health = 100;
            }
            console.log(`Current health: ${health} hp.`);
            
            break;
          }
        case 'chest':
          bestRoomCounter++;
          console.log(`You found ${filteredDungeon1[i+1]} coins.`);
          coins += Number(filteredDungeon1[i+1])
          break;
            
      
        default:
          health-=Number(filteredDungeon1[i+1])
          if (health>0) {
            console.log(`You slayed ${filteredDungeon1[i]}.`);
          }else{
            console.log(`You died! Killed by ${filteredDungeon1[i]}.`);
            console.log(`Best room: ${bestRoomCounter}`);
            isDead = true;
            break;
          }
          bestRoomCounter++;
          break;
      }
      }

  }
  if(!isDead){
  console.log(`You've made it!`);
  console.log(`Coins: ${coins}`);
  console.log(`Health: ${health}`);  
  }
}

      
DungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])

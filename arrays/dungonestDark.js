

function dungonestDark(arr){
    let rooms = arr[0].split("|");

    let health = 100;
    let coins = 0;
    let madeIt = true;

    for (let i = 0; i < rooms.length; i++){
        let room = rooms[i];
        let splitRoom = room.split(" ");
        let thing = splitRoom[0];
        let number = Number(splitRoom[1]);

        if (thing == "potion"){
            health += number;
            healingAmount = number;
            if (health > 100){
                healingAmount = healingAmount + 100 - health;
                health = 100;
            }
            console.log(`You healed for ${healingAmount} hp.`);
            console.log(`Current health: ${health} hp.`);
    
            
        }
        else if (thing == "chest"){
            coins += number;
            console.log(`You found ${number} coins.`)
        }
        else{
            health -= number;
            if (health > 0){
                console.log(`You slayed ${thing}.`);
            }
            else{
                console.log(`You died! Killed by ${thing}.` );
                console.log(`Best room: ${i + 1}`);
                madeIt = false;
                break;
            }
        }
    }

    if (madeIt == true){
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dungonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])

dungonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])
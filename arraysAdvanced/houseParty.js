

function houseParty(arr){
    let guestList = [];

    for (let i =0; i < arr.length; i++){
        let currentCommand = arr[i].split(" ");
        let name = currentCommand[0];
        let deter = currentCommand[2];

        if (deter != "not"){
            if (guestList.includes(name) == true){
                console.log(`${name} is already in the list!`);

            }
            else{
                guestList.push(name);
            }
        }
        else{
            let isIn = false;

            for (let c = 0; c < guestList.length; c++){
                if (guestList[c] == name){
                    guestList.splice(c,1);
                    isIn = true;
                    break;
            
                }
            }
            if (isIn == false){
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(guestList.join("\n"));

}

houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
)

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)
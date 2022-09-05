

function gladiatorInventory(arr){

    let equipment = arr.shift().split(" ");

    for (let i =0; i < arr.length; i++){
        let splitCOmmand = arr[i].split(" ");
        let currentCommand = splitCOmmand[0];

        if (currentCommand == "Buy"){
            let element = splitCOmmand[1];
            let check = equipment.indexOf(element);

            if (check == -1){
                equipment.push(element);
            }
        }
        else if (currentCommand == "Trash"){
            let element = splitCOmmand[1];
            let check = equipment.indexOf(element);

            if (check != -1){
                equipment.splice(check,1);
            }

        }
        else if (currentCommand == "Repair"){
            let element = splitCOmmand[1];
            let check = equipment.indexOf(element);

            if (check != -1){
                equipment.push(equipment.splice(check,1));
            }

        }

        else if (currentCommand == "Upgrade"){
            let [oldElement, newElement] = splitCOmmand[1].split("-");
            let check = equipment.indexOf(oldElement);
            
            if (check != -1){
                let PRINTeLEMENT = `${oldElement}:${newElement}`;
                equipment.splice(check + 1,0,PRINTeLEMENT);
            }

        }

    }

    console.log(equipment.join(" "));
}


gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']
)

gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']
)
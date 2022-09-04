

function arrayManipulations(commands){
    
    let arr = commands
        .shift()
        .split(" ")
        .map(Number)

        // console.log(commands)
    for (let i =0; i < commands.length; i++){
        
        let [command, firstNum, secondNum] = commands[i].split(" ");
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        if (command == "Add"){
            arr.push(firstNum);
        }
        else if (command == "Remove"){
            arr = arr.filter(function(item){
                return item != firstNum;
            })
        }
        else if (command == "RemoveAt"){
            arr.splice(firstNum,1);
        }
        else if (command == "Insert"){
            arr.splice(secondNum, 0 ,firstNum);
        }
        // console.log(`${command} - ${arr}`)
    }

    console.log(arr.join(" "))
}

arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)

arrayManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']
)
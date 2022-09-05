

function arrayManipulator(arr, commands){

    for ( let i = 0; i < commands.length; i++){
        let splitCommand = commands[i].split(" ");
        let currentCommand = splitCommand[0];

        if (currentCommand == "add"){
            let index = splitCommand[1];
            let num = Number(splitCommand[2]);

            arr.splice(index,0,num);

        }
        else if (currentCommand == "addMany"){
            let index = splitCommand[1];

            for (let c = splitCommand.length - 1; c > 1; c--){
                arr.splice(index, 0, Number(splitCommand[c]));
            }

        }

        else if (currentCommand == "contains"){
            let element = Number(splitCommand[1]);

            console.log(arr.indexOf(element));
             
        }

        else if (currentCommand == "remove"){
            let index = splitCommand[1];
            arr.splice(index,1);
        }
        else if (currentCommand == "shift"){
            let rotations = splitCommand[1];

            for (let n = 0; n < rotations; n++){
                arr.push(arr.shift());
            }

        }
        else if (currentCommand == "sumPairs"){
            let arrLength = arr.length;
            let newArray = [];
            for (s = 0; s < Math.floor(arrLength / 2); s += 1){
                let first = arr.shift();
                let second = arr.shift();
                let newNum = first + second;
                newArray.push(newNum);
            }
            if (arr.length == 1){
                newArray.push(arr[0]);
            }
            arr = newArray;
        }
        else if (currentCommand == "print"){
            console.log(`[ ${arr.join(", ")} ]`);
            break;

        }

    }
}


// arrayManipulator([1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'addMany 3 68 69 70', "contains 66","remove 0", "shift 2", "sumPairs"])

arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
    )
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
    )
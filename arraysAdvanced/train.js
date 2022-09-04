

function train(arr){
    let wagons = arr
        .shift()
        .split(" ")
        .map(Number)

    let capacity = Number(arr.shift());

    for (let i =0; i < arr.length; i++){
        let currentCommand = arr[i];
        
        if (currentCommand.includes(" ")){
            let newWagon = Number(currentCommand.split(" ")[1]);
            wagons.push(newWagon);
        }
        else{
            let currentPassengers = Number(currentCommand);
            for (let i =0; i < wagons.length; i++){
                if (wagons[i] + currentPassengers <= capacity){
                    wagons[i] += currentPassengers;
                    break;
                }
            } 
        }
    }
    console.log(wagons.join(" "))

}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
)
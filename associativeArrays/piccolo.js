

function piccolo(arr){
    let parkingLot = [];

    function extractNumbers(word){
        let numbers = [];
        for (let char of word){
            if (!isNaN(char)){
                numbers.push(char);
            }
        }
        return Number(numbers.join(""));
    }

    for (let i = 0; i < arr.length; i ++){
        let currentCommand = arr[i].split(", ")[0];
        let currentPlate = arr[i].split((", "))[1]

        if (currentCommand == "IN"){
            if (parkingLot.includes(currentPlate) == false){
                parkingLot.push(currentPlate);
            }
        }
        else{
            for (let n = 0; n < parkingLot.length; n++){
                if (parkingLot[n] == currentPlate){
                    parkingLot.splice(n,1);
                    break;
                }
            }
        }
    }
    parkingLot.sort();

    if (parkingLot.length == 0){
        console.log("Parking Lot is Empty")
    }
    else{
        for (let plate of parkingLot){
            // console.log(`${plate} - ${extractNumbers(plate)}`);
            console.log(plate)
        }
    }
    
}


piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA7822UU']
)

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)
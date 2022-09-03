

function carWash(arr){

    let value = 0;

    for (let i = 0; i < arr.length; i++){
        let currectCommand = arr[i];

        if (currectCommand == "soap"){
            value += 10;
        }
        else if (currectCommand == "water"){
            value *= 1.2;
        }
        else if (currectCommand == "vacuum cleaner"){
            value = value *1.25;
        }
        else if (currectCommand == "mud"){
            value *= 0.9;
        }
    }

    console.log(`The car is ${(value).toFixed(2)}% clean.`);

}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])
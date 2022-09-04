

function bombNumbers(arr1, arr2){

    let specialBombNumber = arr2[0];
    let detonationPower = arr2[1];

    for (let i =0; i < arr1.length; i++){
        let currentNum = arr1[i];

        if (currentNum == specialBombNumber){
            arr1.splice(Math.max(0, i - detonationPower), detonationPower * 2 +1);
            // arr1.splice(i, Math.min(arr1.length - 1, i + detonationPower +1));
        }

    }
    function calculateSum(someArr){
        let sum = 0;
        for (let c = 0; c < someArr.length; c++){
            sum += someArr[c];
        }
        return sum
    }

    console.log(calculateSum(arr1));
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
    )

bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3]
    )


function bombNumbers(arr1, arr2){

    let specialBombNumber = arr2[0];
    let detonationPower = arr2[1];
    let index = 0

    while (arr1.includes(specialBombNumber) == true){
        let currentNum = arr1[index];
        // console.log(currentNum)

        if (currentNum == specialBombNumber){
            let finale = Math.min(detonationPower * 2 + 1, arr1.length)
            arr1.splice(Math.max(0, index - detonationPower), finale);
            // arr1.splice(i, Math.min(arr1.length - 1, i + detonationPower +1));
        }
        // console.log(arr1)
        // console.log(index)
        index += 1;

        if(index >= arr1.length){
            index = 0
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

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 2],
    [2, 1]
    )
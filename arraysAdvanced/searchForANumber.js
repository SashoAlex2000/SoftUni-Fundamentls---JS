

function searchForANumber(firstArr, secondArr){
    let newArray = []

    for (let i =0; i < secondArr[0]; i++){
        newArray.push(firstArr[i]);
    }

    for (let c =0; c < secondArr[1]; c++){
        newArray.shift();
    }

    let occurances = 0;
    let magicNum = secondArr[2];

    for (let n =0; n < newArray.length; n++){
        if (newArray[n] == magicNum){
            occurances += 1;
        }
    }

    console.log(`Number ${magicNum} occurs ${occurances} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )

searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
    )
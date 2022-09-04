

function sorting(arr){
    let result = [];

    arr.sort((a,b) => a-b);

    let arrLength = arr.length

    for (let i =0; i< arrLength/2; i++){
        let first = arr.pop();
        let second = arr.shift();

        result.push(first);
        result.push(second);

    }

    console.log(result.join(" "))
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])

sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])


function maxNumber(arr){
    let topIntegers = [];

    for (let i =0; i < arr.length; i++){
        let currElement = arr[i];
        let isTop = true;
        for (let n = i + 1; n < arr.length; n++){
            if (currElement <= arr[n]){
                isTop = false;
            }
        }
        if (isTop == true){
            topIntegers.push(currElement);
        }
    }
    console.log(topIntegers.join(" "));
}

maxNumber([1, 4, 3, 2])
maxNumber([27, 19, 42, 2, 13, 45, 48])
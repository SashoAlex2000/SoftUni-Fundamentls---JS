

function lastKNumberSequence(n, k){
    let arr = [];

    while (arr.length < n){
        if (arr.length == 0){
            arr.push(1);
        }
        else{
            let currentSum = 0;
            let start = Math.max(0, arr.length - k);
            for (let i = start; i <arr.length;i++){
                currentSum += arr[i];
            }
            arr.push(currentSum);
        }
    }
    console.log(arr.join(" "))
}

lastKNumberSequence(6, 3)
lastKNumberSequence(8,2 )

lastKNumberSequence(113,20)
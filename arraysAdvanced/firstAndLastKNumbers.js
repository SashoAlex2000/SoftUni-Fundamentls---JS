

function firstAndLastKNumbers(arr){
    let k = arr.shift();

    let first = arr.slice(0, k);
    let second = arr.slice(arr.length - k, arr.length);

    console.log(first.join(" "));
    console.log(second.join(" "))

}

firstAndLastKNumbers([2, 
    7, 8, 9]
    )
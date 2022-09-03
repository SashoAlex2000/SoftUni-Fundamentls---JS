

function sumFirstAndLast(arr){
    arr = arr.map(Number);

    console.log(arr.pop() + arr.shift());
}

sumFirstAndLast(['20', '30', '40'])
sumFirstAndLast(['5', '10'])
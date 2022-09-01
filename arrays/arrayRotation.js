

function arrayRotation(arr, numberOfRotations){
    for (let i = 1; i <= numberOfRotations; i++){
        arr.push(arr.shift());
    }
    console.log(arr.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2)
arrayRotation([2, 4, 15, 31], 5)
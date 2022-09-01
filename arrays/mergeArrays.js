

function mergeArrays(firstArray, secondArray){
    let arrLength = firstArray.length;
    let newArray = [];

    for (let i =0; i < arrLength; i++){
        if (i % 2 ==0){
            newArray.push(Number(firstArray[i]) + Number(secondArray[i]));
        }
        else{
            newArray.push(firstArray[i] + secondArray[i]);
        }
    }
    console.log(newArray.join(" - "))
}

mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)
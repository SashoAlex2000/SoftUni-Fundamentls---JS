

function negativeOrPositiveNumbers(arr){
    arr = arr.map(Number);

    let result = [];

    for (let i = 0; i < arr. length; i++){
        let currentNum = arr[i];

        if(currentNum < 0){
            result.unshift(currentNum);
        }
        else{
            result.push(currentNum);
        }
    }

    console.log(result.join("\n"))

}

negativeOrPositiveNumbers(['7', '-2', '8', '9'])
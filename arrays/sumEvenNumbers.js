

function sumEvenNumbers(arr){
    let sum = 0;

    for (let i =0; i < arr.length; i++){
        let currNumber = Number(arr[i]);
        if (currNumber % 2 == 0){
            sum += currNumber;
        }
    }
    console.log(sum);
}

sumEvenNumbers(['1','2','3','4','5','6'])
sumEvenNumbers(['2','4','6','8','10'])
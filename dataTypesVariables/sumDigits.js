

function sumDigits(number){
    let totalSum = 0;

    let stringNumber = number.toString();

    for (let i =0; i < stringNumber.length; i++){
        totalSum += Number(stringNumber[i]);
    }

    console.log(totalSum)
}

sumDigits(245678)


function aliquotSumNumber(number){
    let sum = 0;

    for (let i = 1; i < number; i++){
        if (number % i == 0){
            sum += i;
        }
    }

    let cond = number == sum ? "We have a perfect number!" : "It's not so perfect.";

    console.log(cond);
}

aliquotSumNumber(28)
aliquotSumNumber(100)
aliquotSumNumber(165612)
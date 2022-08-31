

function amazingNumbers(number){
    number = number.toString()
    let arrayOfNum = number.split("");
    let totalSum = 0;

    for (let i = 0; i < arrayOfNum.length; i++){
        totalSum += Number(arrayOfNum[i]);
    }

    totalSum = totalSum.toString();
    let amazing = totalSum.includes("9");

    if (amazing){
        console.log(`${number} Amazing? True`);
    }
    else{
        console.log(`${number} Amazing? False`)
    }
}

amazingNumbers(999)
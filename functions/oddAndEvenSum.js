

function oddAndEvenSum(number){
    let stringNumber = number.toString();
    let oddSUm = 0;
    let evenSum = 0;

    for (let i = 0; i < stringNumber.length; i++){
        let currentChar = Number(stringNumber[i]);

        if (currentChar % 2 == 0){
            evenSum += currentChar;
        }
        else{
            oddSUm += currentChar;
        }
    }

    console.log(`Odd sum = ${oddSUm}, Even sum = ${evenSum}`);

}

oddAndEvenSum(3495892137259234)
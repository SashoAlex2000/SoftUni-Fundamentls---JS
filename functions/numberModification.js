

function numberModification(number){
    let stringNumber = number.toString();

    function calculateAverage(someNume){
        let totalSUmOfDigits = 0;
        for (let i =0; i < someNume.length; i++){
            totalSUmOfDigits += Number(someNume[i]);
        }
        return totalSUmOfDigits / someNume.length
    }

    let numberAverage = calculateAverage(stringNumber);

    while(numberAverage < 5){
        stringNumber += "9";
        numberAverage = calculateAverage(stringNumber);
    }
    console.log(stringNumber);
}

numberModification(101)
numberModification(5853)


function specialNumbers(number){
    let specialNumsArray = [11,5,7];

    for (let num = 1; num <= number; num++){
        let currentsSum = 0;
        let numToString = num.toString();

        
        for (let i =0; i < numToString.length; i++){
            currentsSum += Number(numToString[i]);
        }

        let cond = specialNumsArray.includes(currentsSum) ? "True" : "False";
        console.log(`${num} -> ${cond}`);
    }
}

specialNumbers(15)
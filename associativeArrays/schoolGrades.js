

function schoolGrades(arr){
    let scores = {};

    function calculateAverage(numArray){
        let totalScore = 0;
        for (let k =0; k < numArray.length; k++){
            totalScore += numArray[k];
        }

        return totalScore / numArray.length;
    }

    for (let i = 0; i < arr.length; i++){
        let splitCommand = arr[i].split(" ");
        let name = splitCommand[0];

        if (!scores.hasOwnProperty(name)){
            scores[name] = [];

        }

        for (let n = 1; n < splitCommand.length; n++){
            scores[name].push(Number(splitCommand[n]));
        }

    }

    let entries = Object.entries(scores);

    entries.sort((a,b) => a[0].localeCompare(b[0]));

    for (let pair of entries){
        console.log(`${pair[0]}: ${(calculateAverage(pair[1])).toFixed(2)}`);
    }
}


schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)

schoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']
)
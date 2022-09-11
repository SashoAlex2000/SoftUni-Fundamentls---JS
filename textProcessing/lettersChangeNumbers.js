

function lettersChangeNumbers(someString){
    let parts = someString.split(" ");
    let totalScore = 0;

    function calculatePosition(letter){
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        let position = -1;
        letter = letter.toLowerCase();

        for (let i = 0; i < alphabet.length; i++){
            if  (alphabet[i] == letter){
                position = i;
                break;

            }
        }
        return position + 1;
    }
    for (let part of parts){
        if (part.trim() == ""){
            continue
        }
        part = part.trim();
        let splitPart = part.split("");
        let firstLetter = splitPart.shift();
        let lastLetter = splitPart.pop();
        let number = Number(splitPart.join(""));
        let firstLetterPosition = calculatePosition(firstLetter);
        let secondLetterPosition = calculatePosition(lastLetter);


        if (firstLetter == firstLetter.toLowerCase()){
            number *= firstLetterPosition;
        }
        else{
            number /= firstLetterPosition;
        }
        
        if(lastLetter == lastLetter.toLowerCase()){
            number += secondLetterPosition;
        }
        else{
            number -= secondLetterPosition;
            
        }
        totalScore += number;
        // console.log(number)
    }
    console.log(totalScore.toFixed(2))
}

// lettersChangeNumbers('A12b s17G')

lettersChangeNumbers('P34562Z q2576f   H456z')
lettersChangeNumbers('a1A')
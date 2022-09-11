

function pascalCaseSplitter(initialString){
    let words = [];

    let splitString = Array.from(initialString);
    let temp = '';

    for (let i = 0; i < splitString.length; i++){
        let currentChar = splitString[i];

        if (/[A-Z]/.test(currentChar) == true){
            words.push(temp);
            temp = "";
            temp += currentChar;
        }
        else{
            temp += currentChar;
        }

    }

    words.shift();
    words.push(temp)

    console.log(words.join(", "))

}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
pascalCaseSplitter('HoldTheDoor')


function modernTimes(sentence){
    let shreddedSentence = sentence.split(" ");
    let specialCharacters = [];
    for (let word of shreddedSentence){
        if (word[0] == "#"){
            specialCharacters.push(word);
        }
    }

    function testIfValid(word){
        let isValid = true;

        // let splitWord = word.split("");
        let splitWord = Array.from(word)
        for (let char of splitWord){
            if (/[a-zA-Z]/.test(char) == false){
                isValid = false;
                break;
            }
        }
        return isValid;
    }
    
    let formattedWords = []

    for (let word of specialCharacters){
        let parts = Array.from(word);
        parts.shift();
        let newWord = parts.join("");
        if (newWord.length > 0){
            formattedWords.push(newWord);
        }

    }


    for (let word of formattedWords){
        if (testIfValid(word) == true){
            console.log(word);
        }
    }

}


modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')
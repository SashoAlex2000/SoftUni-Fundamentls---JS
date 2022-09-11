

function stringSubstring(searchedWord, sentence){
    searchedWord = searchedWord.toLowerCase();

    let parts = sentence.split(" ");
    let isFound = false;

    for (let word of parts){
        word = word.toLowerCase();
        if (word == searchedWord){
            console.log(searchedWord);
            isFound = true;
            break;

        }
    }

    if (!isFound){
        console.log(`${searchedWord} not found!`)
    }
}

stringSubstring('javascript',
'JavaScript is the best programming language'
)
stringSubstring('python',
'JavaScript is the best programming language'
)
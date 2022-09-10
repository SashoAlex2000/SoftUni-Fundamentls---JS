

function revealWord(searchedWords, sentence){
    let parts = searchedWords.split(", ");

    for (let part of parts){
        let splitSentence = sentence.split(" ");

        for (let i =0; i < splitSentence.length; i++){
            let currentWord = splitSentence[i];
            if (currentWord.includes("*") && currentWord.length == part.length){
                splitSentence.splice(i, 1, part);
                break;
            }
        }
        sentence = splitSentence.join(" ");
    }
    console.log(sentence)
}

revealWord('great, learning',
'softuni is ***** place for ******** new programming languages'
)

revealWord('great',
'softuni is ***** place for learning new programming languages'
)
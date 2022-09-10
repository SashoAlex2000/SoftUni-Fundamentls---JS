

function censoredWords(sentence, bannedWord){
    let replacement = "*".repeat(bannedWord.length);

    let result = sentence.replace(bannedWord, replacement);

    while (result.includes(bannedWord)){
        result = result.replace(bannedWord, replacement);
    }

    console.log(result);

}

censoredWords('A small sentence with some words', 'small')
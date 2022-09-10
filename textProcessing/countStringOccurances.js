

function countStringOccurances(sentence, searchedWord){
    let occurances = 0;

    let parts = sentence.split(" ");

    for (let word of parts){
        if (word == searchedWord){
            occurances += 1;
        }
    }
    console.log(occurances)
}

countStringOccurances('This is a word and it also is a sentence',
'is'
)

countStringOccurances('softuni is great place for learning new programming languages',
'softuni'
)


function wordOccurances(arr){

    let dictWords = {};

    for (let i = 0; i < arr.length; i++){
        let currentWord = arr[i];

        if (!dictWords.hasOwnProperty(currentWord)){
            dictWords[currentWord] = 0;
        }
        dictWords[currentWord] += 1;
    }

    let entries = Object.entries(dictWords);

    entries.sort((a,b) => b[1] - a[1]);

    for (let kvp of entries){
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    }

}


wordOccurances(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])
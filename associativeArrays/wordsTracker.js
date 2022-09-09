

function wordsTracker(arr){

    let splitSearch = arr.shift().split(" ");

    let searchedWords = {

    }

    for (let word of splitSearch){
        searchedWords[word] = 0;
    }


    for (let word of arr){
        if (splitSearch.includes(word)){
            searchedWords[word] += 1;
            
        }
    }


    let entries = Object.entries(searchedWords);

    entries.sort((a,b) => b[1] - a[1]);

 
    for (let kvp of entries){
        console.log(`${kvp[0]} - ${kvp[1]}`)
    }
    
}

wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    )

wordsTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    )
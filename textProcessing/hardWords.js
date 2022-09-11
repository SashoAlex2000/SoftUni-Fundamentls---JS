

function hardWordsSolce(arr){
    let initialString = arr[0];
    let hardWords = arr[1];

    let sentence = initialString.split(" ");

    // console.log(sentence)
    // console.log(hardWords);

    
    for (let diffWord of hardWords){
        // console.log(diffWord)
        for (let i = 0; i < sentence.length; i++){
            let currentWord = sentence[i];
            // console.log(currentWord.length)
            if (currentWord.includes("_")){
                let specialSign = "";
                if (/[,.?!]/.test(currentWord)){
                    specialSign = currentWord[currentWord.length - 1];
                    currentWord = currentWord.replace(specialSign,"");
                    
                }
                if (currentWord.length == diffWord.length){
                    diffWord = diffWord + specialSign;
                    sentence.splice(i, 1, diffWord);
                    // console.log(diffWord)
                    break;
                }
            }
        }
    }
    console.log(sentence.join(" "))
}

hardWordsSolce(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)
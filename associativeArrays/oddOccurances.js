

function oddOccurances(arr){
    let occurancesPerWord = {};
    let splitArr = arr.split(" ")
    for (let word of splitArr){
        let newWord = word.toLowerCase();
        if (!occurancesPerWord.hasOwnProperty(newWord)){
            occurancesPerWord[newWord] =0;
        }
        // console.log(occurancesPerWord)
        occurancesPerWord[newWord] += 1;
    }
    let temp = ""
    for (let key in occurancesPerWord){
        if (occurancesPerWord[key] % 2 != 0){
            temp += `${key} `;
        }
    }
    console.log(temp)
}


oddOccurances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')

oddOccurances('Cake IS SWEET is Soft CAKE sweet Food')
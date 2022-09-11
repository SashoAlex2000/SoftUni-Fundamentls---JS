

function valueOfString(arr){
    let totalScore = 0;
    let command = arr[1];
    let chars = Array.from(arr[0]);

    for (let char of chars){
        if (command == "UPPERCASE"){
            if (char == char.toUpperCase() && char.match(/[a-zA-Z]/i)){
                totalScore += char.charCodeAt();
            }
        }
        else{
            if (char == char.toLowerCase() && char.match(/[a-zA-Z]/i)){
                totalScore += char.charCodeAt();
            }
        }
    }
    console.log(`The total sum is: ${totalScore}`)
}

valueOfString(['HelloFromMyAwesomePROGRAM',
'LOWERCASE']
)

valueOfString(['AC/DC',
'UPPERCASE']
)
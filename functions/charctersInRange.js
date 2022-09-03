

function charctersInRange(firstChar, secondChar){
    let firstIndex = firstChar.charCodeAt();
    let secondIndex = secondChar.charCodeAt();
    let temp = [];

    if (secondIndex > firstIndex){
        for (let i = firstIndex + 1; i < secondIndex; i++){
            let currentChar = String.fromCharCode(i);
            temp.push(currentChar);
        }
    }
    else{
        for (let i = secondIndex + 1; i < firstIndex; i++){
            let currentChar = String.fromCharCode(i);
            temp.push(currentChar);
        }
    }

    console.log(temp.join(" "));
}

charctersInRange('a',
'd'
)
charctersInRange('#',
':'
)

charctersInRange('C',
'#'
)
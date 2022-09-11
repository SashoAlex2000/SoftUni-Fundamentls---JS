

function replacerepeatingChars(string){
    let stringArr = Array.from(string);
    let uniqueChars = [];
    let checkChar = "";

    for (let i = 0; i < stringArr.length; i++){
        let currentChar = stringArr[i];
        if (currentChar != checkChar){
            checkChar = currentChar;
            uniqueChars.push(currentChar);
        }
    }

    console.log(uniqueChars.join(""));

}

replacerepeatingChars('aaaaabbbbbcdddeeeedssaa')
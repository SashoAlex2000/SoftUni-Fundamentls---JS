

function triplesOfLetters(n){
    for (let i = 0; i <n; i++){
        for (let k = 0; k < n; k++){
            for (let l = 0; l <n; l++){
                let firstLetter = String.fromCharCode(97 + i);
                let secondLetter = String.fromCharCode(97 + k);
                let thirdLetter = String.fromCharCode(97 + l);
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
            }
        }
    }
}

triplesOfLetters(2)


function repeatString(word, count){
    let temp = "";

    for (let i = 1; i <= count; i++){
        temp += word;
    }

    console.log(temp)

}

repeatString("abc", 3)
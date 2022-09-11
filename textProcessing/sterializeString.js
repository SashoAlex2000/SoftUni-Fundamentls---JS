

function sterializeString(arr){
    let string = arr[0];
    let foundLetters = {

    }

    for (let i = 0; i < string.length; i++){
        if (!foundLetters.hasOwnProperty(string[i])){
            foundLetters[string[i]] = [];
        }

        foundLetters[string[i]].push(i);

    }

    for (let key in foundLetters){
        console.log(`${key}:${foundLetters[key].join("/")}`)
    }
}

sterializeString(["abababa"])

sterializeString(["avjavamsdmcalsdm"])


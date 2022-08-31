

function rightPlace(firstString, char, secondString){
    let result = firstString.replace("_", char);

    let output = result == secondString? "Matched": "Not Matched";
    console.log(output);
}

rightPlace('Str_ng', 'i', 'String')
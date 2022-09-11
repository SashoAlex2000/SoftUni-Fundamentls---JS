

function passWordGenerator(arr){
    let password = arr[0] + arr[1];
    let specialWord = arr[2]
    let replacementLength = specialWord.length;
    let currReplacement = 0;

    let splitPass = Array.from(password);

    for (let i = 0; i < splitPass.length; i++){
        let currentChar = splitPass[i];
        if (/[aioue]/.test(currentChar) == true){
            splitPass.splice(i,1,(specialWord[currReplacement]).toUpperCase());
            currReplacement += 1;
            if (currReplacement == replacementLength){
                currReplacement = 0;
            }
        }
    }
    let newPass = [];

    for (let n = splitPass.length - 1; n >= 0; n--){
        newPass.push(splitPass[n]);
    }

    console.log(`Your generated password is ${newPass.join("")}`)


}


passWordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ]
    )
passWordGenerator(
    [
        'easymoneyeazylife', 'atleasttencharacters', 'absolute'
        ]
        
        
)
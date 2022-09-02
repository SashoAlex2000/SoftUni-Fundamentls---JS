

function maxSequenceOfEqualElements(arr){

    let magicIndex = 0;
    let magicLength = 0;

    for (let i =0; i < arr.length; i++){
        let currentNum = arr[i];
        let currentMagicLength = 1
        for (let n = i + 1; n < arr.length; n++){
            if (arr[n] == currentNum){
                currentMagicLength += 1;
            }
            else{
                break;
            }
        }
        if (currentMagicLength > magicLength){
            magicLength = currentMagicLength;
            magicIndex = i;
        }
    }
    let temp = []
    for (z = magicIndex; z < (magicIndex + magicLength); z++){
        temp.push(arr[z]);
    }

    console.log(temp.join(" "));

}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3])
maxSequenceOfEqualElements([4, 4, 4, 4])
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3])
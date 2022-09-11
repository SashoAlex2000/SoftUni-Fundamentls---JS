

function desterializeString(arr){

    let result = [];
    let maxNum = findMaxNumber(arr);
    
    for (let n =0; n < maxNum; n++){
        result.push("!");
    }

    function findMaxNumber(someArr){
        let maxNumber = -100;
        for (let seq of arr){
            if (seq == "end"){
                break;
            }
            let parts = seq.split(":");
            let numbers = parts[1].split("/");
            numbers = numbers.map(x => Number(x));

            for (let num of numbers){
                if (num > maxNumber){
                    maxNumber = num;
                }
            }
        }
        return maxNumber
    }

    for (let seq of arr){

        if (seq == "end"){
            break;
        }
        let parts = seq.split(":");
        let currentLetter = parts[0];
        let indeces = parts[1].split("/");
        indeces = indeces.map(x => Number(x));

        for (let index of indeces){
            result.splice(index,1,currentLetter);
        }

    }

    console.log(result.join(""))
}

// desterializeString(['a:0/2/4/6',
// 'b:1/3/5',
// 'end']
// )
desterializeString(['a:0/3/5/11',
'v:1/4',
'j:2',
'm:6/9/15',
's:7/13',
'd:8/14',
'c:10',
'l:12',
'end']
)
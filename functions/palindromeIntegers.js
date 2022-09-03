

function palindromeIntegers(arr){

    for (let i = 0; i < arr.length; i++){
        let currentNum = arr[i].toString();
        let currentReversedNum = reverseString(currentNum);

        let cond = currentNum == currentReversedNum;
        console.log(cond);
    }

    function reverseString(string){
        return string.split("").reverse().join("");
    }

}

palindromeIntegers([123,323,421,121])


function cutAndReverse(initialString){
    let n = initialString.length / 2;
    let strinArr = Array.from(initialString);
    let secondPart = strinArr.splice(n, n);

    let newFirst = [];
    let newSecond = [];

    for (let n = strinArr.length - 1; n >= 0; n--){
        newFirst.push(strinArr[n]);
        newSecond.push(secondPart[n]);
    }

    console.log(newFirst.join(""));
    console.log(newSecond.join(""));


}


cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')
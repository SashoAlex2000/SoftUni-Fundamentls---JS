

function sortOddNumber(arr){
    let result = arr
        .filter((num, i) => i % 2== 1)
        .map(x => x*2)
        .reverse();
    return result.join(" ");
}

console.log(sortOddNumber([10, 15, 20, 25]))
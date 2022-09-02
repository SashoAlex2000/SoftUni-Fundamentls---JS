

function printNthElement(arr){
    let step = Number(arr[arr.length - 1]);
    let temp = [];

    for (let i = 0; i < arr.length - 1; i+= step){
        temp.push(arr[i]);
    }
    console.log(temp.join(" "))
}

printNthElement(['5', '20', '31', '4', '20', '2'])
printNthElement(['dsa', 'asd', 'test', 'test', '2'])

printNthElement(['1', '2', '3', '4', '5', '6'])
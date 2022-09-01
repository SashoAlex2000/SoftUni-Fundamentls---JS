

function commonElements(firstArray, secondArray){
    for (let el of firstArray){
        if (secondArray.includes(el) == true){
            console.log(el);
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)
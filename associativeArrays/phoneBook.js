

function phoneBook(arr){
    let associativeArr = {
    }

    for (let element of arr){
        let splitLine = element.split(" ");
        let name = splitLine[0];
        let number = splitLine[1];

        associativeArr[name] = number;
    }

    for (let key in associativeArr){
        console.log(`${key} -> ${associativeArr[key]}`)
    }

}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)


function storage(arr){
    let map = new Map();

    for (string of arr){
        let splitString = string.split(" ")
        let [product, quantity] = [splitString[0], Number(splitString[1])];

        if (!map.has(product)){
            map.set(product, quantity);
        }
        else{
            let currentQuant = map.get(product);
            let newQuant = currentQuant + quantity;
            map.set(product, newQuant);
        }
    }

    for (let [key, value] of map){
        console.log(`${key} -> ${value}`)
    }

}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)
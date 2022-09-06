

function storeProvison(firstArr, secondArr){
    let storeInventory = [];

    for (let i = 0; i < firstArr.length - 1; i+= 2){
        let currentProduct = firstArr[i];
        let currentQuant = Number(firstArr[i+1]);

        let currentObject = {
            name: currentProduct,
            quantity: currentQuant
        }
        storeInventory.push(currentObject);
    }

    for (let c = 0; c < secondArr.length - 1; c+= 2){
        let newProduct = secondArr[c];
        let newQuantity = Number(secondArr[c+1]);
        let exists = false;

        for (let n =0; n < storeInventory.length; n++){
            let oldProduct = storeInventory[n];
            if (oldProduct.name == newProduct){
                storeInventory[n].quantity += newQuantity;
                exists = true;
                break;
            }
        }

        if (exists == false){
            storeInventory.push({
                name: newProduct,
                quantity: newQuantity
            })
        }

    }

    for (let k = 0; k < storeInventory.length; k++){
        let currentObj = storeInventory[k];

        console.log(`${currentObj.name} -> ${currentObj.quantity}`);
    }
}

storeProvison([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )

storeProvison([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
    )
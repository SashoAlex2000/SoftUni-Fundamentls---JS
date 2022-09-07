

function catalogueSorter(arr){

    let products = [];

    for (let i = 0; i < arr.length; i++){
        let currentProduct = arr[i].split(" : ");

        let [currentName, currentPrice] = [currentProduct[0], currentProduct[1]];

        let currentOBJ = {
            name: currentName,
            price: currentPrice
        }
        products.push(currentOBJ);
    }
    let letter = "";
    products.sort((a,b) => a.name.localeCompare(b.name));
    for (let n = 0; n < products.length; n++){
        let currentLetter = products[n].name[0];

        if (currentLetter != letter){
            console.log(`${currentLetter}`);
            letter = currentLetter;
        }

        console.log(`  ${products[n].name}: ${products[n].price}`);

    }

}

catalogueSorter([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]
)

catalogueSorter([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
    ]
    )
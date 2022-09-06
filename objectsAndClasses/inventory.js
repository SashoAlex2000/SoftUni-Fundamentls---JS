

function inventory(arr){
    let heroes = [];

    function compare(a, b){
        if (a.level < b.level){
            return -1;
        }
        if (a.level > b.level){
            return 1;
        }
        return 0;
    }

    for (let i = 0; i < arr.length; i++){
        let splitData = arr[i].split(" / ");

        let hero = splitData[0];
        let levele = Number(splitData[1]);
        let itemsArray = splitData[2].split(", ");

        heroes.push({
            name: hero,
            level: levele,
            items: itemsArray
        })
    }

    heroes.sort(compare);

    for (let c =0; c < heroes.length; c++){
        console.log(`Hero: ${heroes[c].name}`);
        console.log(`level => ${heroes[c].level}`);
        console.log(`items => ${heroes[c].items.join(", ")}`);
    }

}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )

inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]
    )
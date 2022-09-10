

function aMinerTask(arr){
    let resources = {

    }

    for (let i = 0; i < arr.length - 1; i+=2){
        let currentResource = arr[i];
        let currentQuant = Number(arr[i+1]);

        if (resources.hasOwnProperty(currentResource)){
            resources[currentResource] += currentQuant;
        }
        else{
            resources[currentResource] = currentQuant;
        }

    }

    for (let key in resources){
        console.log(`${key} -> ${resources[key]}`);
    }

}

aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    )

aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    )
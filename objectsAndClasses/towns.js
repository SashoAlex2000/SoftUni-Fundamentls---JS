

function townFactory(arr){
    
    function townConstructor(townName, latt, longitute){
        let cTown = {
            town: townName,
            latitude: latt,
            longitude: longitute
        };
        return cTown
    }

    for (let i =0; i < arr.length; i++){
        let splitData = arr[i].split(" | ");
        let [tName, latt, long] = [splitData[0], Number(splitData[1]).toFixed(2), Number(splitData[2]).toFixed(2)];

        let currentTown = townConstructor(tName, latt, long);

        console.log(currentTown);

    }

}

townFactory(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)
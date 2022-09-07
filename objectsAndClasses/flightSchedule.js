

function flightSchedule(metaArr){
    let flights = [];
    let arr = metaArr[0];

    for (let i = 0; i < arr.length; i++){
        let currentSplit = arr[i].split(" ");
        // let [currFlightNum, currDest] = [currentSplit[0], currentSplit[currentSplit.length - 1]];
        let currFlightNum = currentSplit[0];
        let currDest = ""

        for (let l = 1; l < currentSplit.length; l++){
            currDest += `${currentSplit[l]} `;
        }
        
        currDest = currDest.trim();

        let currentObj = {
            flightNumber: currFlightNum,
            destination: currDest,
            status: undefined
        }
        flights.push(currentObj);
    }

    let changedArr = metaArr[1];

    for (let n =0; n < changedArr.length; n++){
        let currentCommand = changedArr[n].split(" ");
        let [fNumber, newStatus] = [currentCommand[0], currentCommand[1]];

        for (let c = 0; c < flights.length; c++){
            if (flights[c].flightNumber == fNumber){
                flights[c].status = newStatus;
                break;
            }
        }
    }

    let finalCommand = metaArr[2][0];

    if (finalCommand == "Ready to fly"){
        for (let k = 0; k < flights.length; k++){
            let currentFlight = flights[k];
            if (currentFlight.status == undefined){
                flights[k].status = "Ready to fly";
                console.log(`{ Destination: '${flights[k].destination}', Status: '${flights[k].status}' }`);
            }
        }
    }
    else{
        for (let k = 0; k < flights.length; k++){
            let currentFlight = flights[k];
            if (currentFlight.status == finalCommand){
                console.log(`{ Destination: '${flights[k].destination}', Status: '${flights[k].status}' }`);
            }
        }
    }

}

flightSchedule([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']
]
)

flightSchedule([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],
 ['Ready to fly']
]
)


function buildAWall(arr){
    let concreteUsed = 0;
    const concreteUsagePerFoot = 195;
    let wall = arr.map(Number);
    let usagesPerDay = [];
    const pesoPerCubicYardOfConcrete = 1900;


    function checkIfComplete(someArr){
        let flag = true;

        for (let c = 0; c < someArr.length; c++){
            if (someArr[c] < 30){
                flag = false;
                break;
            }
        }
        if (flag == false){
            return false;
        }
        return true;
    }

    function countCurrentWallsBuilt(someArr){
        let total = 0;

        for (let c = 0; c < someArr.length; c++){
            if (someArr[c] < 30){
                total += 1;
                someArr[c] += 1
                
            }
        }
        return total;
    }

    let check = false;

    while (check == false){

        let currentBuildings = countCurrentWallsBuilt(wall);
        concreteUsed += currentBuildings * concreteUsagePerFoot;
        usagesPerDay.push(currentBuildings * concreteUsagePerFoot);
        check = checkIfComplete(wall);

    } 
    console.log(usagesPerDay.join(", "));
    console.log(`${concreteUsed * pesoPerCubicYardOfConcrete} pesos`);
}

buildAWall([21, 25, 28])
buildAWall([17, 22, 17, 19, 17])
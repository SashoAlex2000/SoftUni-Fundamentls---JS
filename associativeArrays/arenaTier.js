

function arenaTier(arr){
    let gladiators = []

    let index = 0;
    let currentCommand = arr[index];

    while(currentCommand != "Ave Cesar"){

        if (currentCommand.includes("vs")){
            let parts = currentCommand.split(" vs ");
            let [firstGladiator, secondGladiator] = [parts[0], parts[1]];
            
            let firstExists = false;
            let secondExists = false;

            let objGladOne;
            let objGladTwo;

            let firstSkills = [];
            let secondSkills = [];

            let firstIndex = -1;
            let secondIndex = -1;

            for (let glad of gladiators){
                if (glad.name == firstGladiator){
                    firstExists = true;
                    firstIndex = gladiators.indexOf(glad);
                    objGladOne = glad;
                    for (let key in glad.skills){
                        firstSkills.push(key);
                    }
                    
                }
                if (glad.name == secondGladiator){
                    secondExists = true;
                    secondIndex = gladiators.indexOf(glad);
                    objGladTwo = glad;

                    for (let key in glad.skills){
                        secondSkills.push(key);
                    }
                    
                }
            }

            if (firstExists == true && secondExists == true){
                let setOne = new Set(firstSkills);
                let setTwo = new Set(secondSkills);
                let combinedNumberSkills = setOne.size + setTwo.size;

                let newSet = new Set([...setOne, ...setTwo])

                if (newSet.size < combinedNumberSkills){
                    let firstOneStrength = calculateTotalStrength(objGladOne.skills);
                    let secondOneStrength = calculateTotalStrength(objGladTwo.skills);
                    // console.log(`${objGladOne.name} - ${firstOneStrength}`)
                    // console.log(`${objGladTwo.name} ${secondOneStrength}`)

                    if (firstOneStrength < secondOneStrength){
                        // console.log(`ELIMINATED ${objGladOne.name}`)
                        gladiators.splice(firstIndex, 1);
                    }
                    else if (secondOneStrength < firstOneStrength){
                        // console.log(`ELIMINATED ${objGladTwo.name}`)
                        gladiators.splice(secondIndex, 1);
                    }
                }

            }

        }
        else{
            let parts = currentCommand.split(" -> ");
            let [gladiatorName, abilityName, currstrength] = [parts[0], parts[1], Number(parts[2])];

            let gladiatorExists = false;

            for (let gladiator of gladiators){

                if (gladiator.name == gladiatorName){
                    gladiatorExists = true;
                    let skillExists = false;

                    for (let key in gladiator.skills){
                        if (gladiator.skills[key] == abilityName){
                            skillExists = true;
                            if(gladiator.skills[key] < currstrength){
                                gladiator.skills[key] = currstrength;
                            }
                            break;
                        }
                    }

                    if (!skillExists){
                        gladiator.skills[abilityName] = currstrength;
                    }
                    break;
                }

            }

            if (!gladiatorExists){
                let currGladOBJ = {
                    name: gladiatorName,
                    skills: {

                    }
                }
                currGladOBJ.skills[abilityName] = currstrength;
                // console.log(currGladOBJ)
                // console.log(currGladOBJ.skills)
                gladiators.push(currGladOBJ);
            }

        }

        index += 1;
        currentCommand = arr[index];
    }

    function calculateTotalStrength(someObj){
        let totalPower = 0;
        for (let key in someObj){
            totalPower += someObj[key];
        }
        return totalPower
    }



    // gladiators.sort((a,b) => calculateTotalStrength(b.skills) - calculateTotalStrength(a.skills))

    gladiators.sort((a,b) => {
        if (calculateTotalStrength(a.skills) > calculateTotalStrength(b.skills)) return -1;
        else if (calculateTotalStrength(b.skills) > calculateTotalStrength(a.skills)) return 1;
        else{
            return a.name.localeCompare(b.name)
        }
    })

    for (let glad of gladiators){
        let totalCurrPower = calculateTotalStrength(glad.skills);
        
        let temp = "";
        temp += `${glad.name}: ${totalCurrPower} skill\n`;

        let entries = Object.entries(glad.skills);

        // entries.sort((a,b) => b[1] - a[1]);

        entries.sort((a,b) => {
            if (a[1] > b[1]) return -1;
            else if (a[1] < b[1]) return 1;
            else{
                return a[0].localeCompare(b[0])
            }

        })

        for (let pair of entries){
            temp += `- ${pair[0]} <!> ${pair[1]}\n`
        }
        temp = temp.trim();
        console.log(temp)

        // console.log(`${glad.name}: ${totalCurrPower}`);
        // for (let key in glad.skills){
        //     console.log(`- ${key} <!> ${glad.skills[key]}`)
        // }
    }

}

arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Aaalex -> EyeStare -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
    ]
    )

arenaTier(
    [
        'Peter -> Duck -> 400',
        'Julius -> Shield -> 150',
        'Gladius -> Heal -> 200',
        'Gladius -> Support -> 250',
        'Gladius -> Shield -> 250',
        'Peter vs Gladius',
        'Gladius vs Julius',
        'Gladius vs Maximilian',
        'Ave Cesar'
        ]
        
)

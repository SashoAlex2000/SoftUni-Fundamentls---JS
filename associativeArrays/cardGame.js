

function cardGame(arr){
    let people = [];

    for (let line of arr){

        let parts = line.split(": ");
        let [newName, cardsString] = [parts[0], parts[1]];

        let newCards = new Set(cardsString.split(", "));

        let personExists = false;

        for (let personObj of people){
            if (personObj.name == newName){
                // console.log(`Repeating player!`)
                // console.log(`${personObj.name}`)
                // console.log(personObj.cards)
                let oldSet = personObj.cards;
                let newSet = new Set([...oldSet, ...newCards]);
                personObj.cards = newSet;
                personExists = true;
                // console.log(`${personObj.name} - ${personObj.cards}`)
                // console.log(personObj.cards)

                break;
            }
        }

        if (!personExists){
            let newPersonObject = {
                name: newName,
                cards: newCards
            }
            // console.log(newPersonObject.cards)
            people.push(newPersonObject);
        }
    }

    function calculatePoints(arr){
        let totalPoints = 0;

        for (element of arr){
            let elementArr = Array.from(element);
            let second = elementArr.pop()
            let first = elementArr.join("")
            // let first = element[0];
            // let second = element[1];
            let points = 0;
            let multiplier = 1;

            if (isNaN(first) == true){
                switch (first){
                    case "J": points = 11; break;
                    case "Q": points = 12; break;
                    case "K": points = 13; break;
                    case "A": points = 14; break;
                }
            }
            else{
                points = Number(first);
            }

            switch (second){
                case "S": multiplier = 4; break;
                case "H": multiplier = 3; break;
                case "D": multiplier = 2; break;
                case "C": multiplier = 1; break;

            }
            let currentPoints = points * multiplier;
            // console.log(`${first} ${second} ${points} ${multiplier}`)
            totalPoints += currentPoints;

        }

        return totalPoints;
    }

    for (let personOBJ of people){
        let personName = personOBJ.name;
        let currCardsArr = Array.from(personOBJ.cards);

        let currentPoints = calculatePoints(currCardsArr);
        console.log(`${personName}: ${currentPoints}`);

    }


}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]
    )

cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ]
    )
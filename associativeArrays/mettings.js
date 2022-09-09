

function meetings(arr){
    let meetingsSchedule = {

    }

    for (let element of arr){
        let splitLine = element.split(" ");

        let day = splitLine[0];
        let name = splitLine[1];

        if (meetingsSchedule[day] != undefined){
            console.log(`Conflict on ${day}!`);
        }
        else{
            meetingsSchedule[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let key in meetingsSchedule){
        console.log(`${key} -> ${meetingsSchedule[key]}`);
    }

}


meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)
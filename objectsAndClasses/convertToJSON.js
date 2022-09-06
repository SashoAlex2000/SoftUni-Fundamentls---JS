

function convertToJSON(name, lastName, hairColor){
    let currentPerson = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    };

    console.log(JSON.stringify(currentPerson));
}

convertToJSON('George', 'Jones', 'Brown')
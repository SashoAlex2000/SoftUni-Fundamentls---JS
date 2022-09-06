

function makeADictionary(arr){
    let dictionary = [];

    
    // function compare(a, b){
    //     let first = a.term.toString();
    //     let second = b.term.toString()
        
    //     return first.localCompare(second);
    // }

    for (let i = 0; i < arr.length; i++){
        let currentJSONObj = JSON.parse(arr[i]);
        let entries = Object.entries(currentJSONObj);
        // console.log(entries);
        // console.log(typeof entries)
        let flag = false;
        let checkKey;
        let checkValue
        for (let [key, value] of entries){
            checkKey = key;
            checkValue = value;
            // console.log("????")
        }


        // console.log(`${checkKey} - ${checkValue}`)

        for (let n = 0; n < dictionary.length; n++){
            if (dictionary[n].term == checkKey){
                console.log("REPEATING")

                dictionary[n].definition = checkValue;
                // console.log(dictionary[n].term)
                // console.log(dictionary[n].definition)

                flag = true;
            }
        }

        if (flag == false){
            for (let [key, value] of entries){
                // console.log(`${key} - ${value}`)
                dictionary.push({
                    term: key,
                    definition: value
                })
            }
        }

    }

    // dictionary.sort((a.term, b.term) => (a.term).localCompare((b.term)))
    dictionary.sort((a,b) => a.term.localeCompare(b.term))


    // dictionary.forEach(element => console.log(`${element.term} ${element.definition}`))
    for (c = 0; c < dictionary.length; c++){
        let currentObj = dictionary[c]

        console.log(`Term: ${currentObj.term} => Definition: ${currentObj.definition}`)
    }

}




makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
    '{"Bus":"BUUUUS"}'
    ]
    )

// makeADictionary([
//     '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
//     '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
//     '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
//     '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
//     '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} ',
//     '{"Art":"CHANGED DEFINITION"} '
//     ]
//     )
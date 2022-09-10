

function travelTime(arr){
    let countries = [];

    for (let line of arr){
        let parts = line.split(" > ");
        let [countryName, townName, currPrice] = [parts[0], parts[1], Number(parts[2])];

        let countryExists = false;

        for (let metaObj of countries){
            if (metaObj.name == countryName){
                countryExists = true;
                let townExists = false;
                for (let key in metaObj.towns){
                    if (key == townName){
                        townExists = true;
                        if (metaObj.towns[key] > currPrice){
                            metaObj.towns[key] = currPrice;
                        }
                        break;
                    }
                }

                if (!townExists){
                    metaObj.towns[townName] = currPrice
                }
                break;
            }
        }

        if (!countryExists){
            let currentOBJ ={
                name: countryName,
                towns: {
                    
                }
            }
            currentOBJ.towns[townName] = currPrice
            // console.log(currentOBJ.name)
            // console.log(currentOBJ.towns)
            countries.push(currentOBJ)
        }

    }

    countries.sort((a,b) => a.name.localeCompare(b.name))

    for(let element of countries){
        let temp = "";
        temp += `${element.name} -> `

        let entries = Object.entries(element.towns);

        entries.sort((a,b) => a[1] - b[1]);

        for (arrCouple of entries){
            temp += `${arrCouple[0]} -> ${arrCouple[1]} `;
        }

        console.log(temp)

        // console.log(`${element.name}`)
        // for (let key in element.towns){
        //     console.log(`${key} - ${element.towns[key]}`)
        // }
    }

}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200",
    "France > Nice > 1500"
    ]
    )

travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
    ]
    )
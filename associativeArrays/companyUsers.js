

function companyUsers(arr){
    let companies = [];

    for (element of arr){
        let parts = element.split(" -> ");
        let [compName, currentID] = [parts[0], parts[1]];

        let companyExists = false;

        for (company of companies){
            if (company.name == compName){
                companyExists = true;
                company.emploees.add(currentID);
            }
        }
        if (!companyExists){
            let currentOBJ = {
                name: compName,
                emploees: new Set([currentID])
            }
            companies.push(currentOBJ)
        }
    
    }
    companies.sort((a,b) => a.name.localeCompare(b.name))

    for (company of companies){
        console.log(company.name)
        let emplArr = Array.from(company.emploees);

        for (let element of emplArr){
            console.log(`-- ${element}`)
        }
    }

}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    )


function moviesFactory(arr){
    let movies = [];

    for (let i = 0; i < arr.length; i++){
        let currentSplitCommand = arr[i].split(" ");

        if (arr[i].includes("addMovie")){
            let currName = ""
            for (let c = 1; c < currentSplitCommand.length; c++){
                currName += `${currentSplitCommand[c]} `;
            }
            currName = currName.trim()
            movies.push({
                name: currName
            })
        }

        else if (arr[i].includes("directedBy")){
            let currName = "";
            let magicIndex = 0;
            let currDirector = ""
            for (let c = 0; c < currentSplitCommand.length; c++){
                if (currentSplitCommand[c] == "directedBy"){
                    magicIndex = c;
                    break;
                }
                else{
                    currName += `${currentSplitCommand[c]} `;
                }
            }
            currName = currName.trim()

            for (let n = magicIndex + 1; n < currentSplitCommand.length; n++){
                currDirector += `${currentSplitCommand[n]} `;
            }

            currDirector = currDirector.trim()

            for (let k =0; k < movies.length; k++){
                let currObj = movies[k];

                if (movies[k].name == currName){
                    movies[k].director = currDirector;
                    break;
                    // console.log(movies[k])
                }

            }

    }
    else if (arr[i].includes("onDate")){
        let currName = "";
        let currDate = currentSplitCommand.pop();

        for (let c = 0; c < currentSplitCommand.length - 1; c++){
            currName += `${currentSplitCommand[c]} `;
        }
        currName = currName.trim()


        for (let k =0; k < movies.length; k++){

            if (movies[k].name == currName){
                movies[k].date = currDate;
                break;
                // console.log(movies[k])
            }

        }

    }
    // movies.forEach((i) => console.log(`${i.name} ${i.director} ${i.date}`))
    }
    
    for (let i = 0; i < movies.length; i++){
        if (movies[i].date != undefined && movies[i].director != undefined){
            console.log(JSON.stringify(movies[i]))
        }
    }
}


moviesFactory([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )

moviesFactory([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    )



class Songs{
    constructor(typeList, name, time){
        this.typeList = typeList;
        this.name = name;
        this.time = time;        
    }


}


function songPrinter(arr){
    let n = Number(arr.shift());
    let lastElement = arr.pop();
    let songsArr = [];

    for (let i = 0; i < arr.length; i++){
        let currentSplitData = arr[i].split("_");
        let typeList, name, time;

        [typeList, name, time] = [currentSplitData[0], currentSplitData[1], currentSplitData[2]];

        let currentSong = new Songs(typeList, name, time);
        songsArr.push(currentSong);
    }

    for (let c = 0; c < songsArr.length; c++){
        if (lastElement === "all"){
            console.log(songsArr[c].name);
        }
        else{
            if (songsArr[c].typeList === lastElement){
                console.log(songsArr[c].name);
            }
        }
    }
}



songPrinter([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )

songPrinter([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    )

songPrinter([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    )


function distincArray(arr){
    let uniqueArrays = [];

    for (let i = 0; i < arr.length; i++){
        let currentEl = Number(arr[i]);

        if (uniqueArrays.includes(currentEl)){
            //pass
        }
        else{
            uniqueArrays.push(currentEl);
        }
    }
    console.log(uniqueArrays.join(" "));

}

distincArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
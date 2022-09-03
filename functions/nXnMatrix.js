

function nXnMatrix(number){
    for (let r =0; r < number; r++){
        let temp = [];
        for (let c =0; c < number; c++){
            temp.push(number);
        }
        console.log(temp.join(" "));
    }
}

nXnMatrix(3)
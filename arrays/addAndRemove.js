

function addAndRemove(arr){
    let field = [];

    for (let i = 0; i < arr.length; i++){
        let currentCommand = arr[i];
        if (currentCommand == 'add'){
            field.push(i + 1);
        }
        else{
            field.pop()
        }
    }

    let cond = field.length > 0 ? field.join(" ") : "Empty"
    // if (field.length > 0){
    //     console.log(field.join(" "));
    // }
    // else{
    //     console.log("Empty")
    // }
    console.log(cond)

}

addAndRemove(['add', 'add', 'add', 'add'])
addAndRemove(['add', 'add', 'remove', 'add', 'add'])
addAndRemove(['remove', 'remove', 'remove'])
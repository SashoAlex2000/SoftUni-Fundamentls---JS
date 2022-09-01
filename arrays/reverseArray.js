

function reverseArray(number, initialArray){
    let newArray = [];

    for (let i = 0; i < number; i++){
        newArray.push(initialArray[i]);
    }

    newArray = newArray.reverse();

    console.log(newArray.join(" "))

}

reverseArray(3, [10, 20, 30, 40, 50])
reverseArray(4, [-1, 20, 99, 5])


function reverseInPlace(arr){

    for (let i = 0; i < arr.length / 2; i++){
        swapElements(arr, i ,arr.length - 1 - i);
    }
    console.log(arr.join(" "));

    function swapElements(arr, i, j){
        let firstEl = arr[i];
        let secondEl = arr[j];

        arr[i] = secondEl;
        arr[j] = firstEl;
    }

}

reverseInPlace(['a', 'b', 'c', 'd', 'e'])
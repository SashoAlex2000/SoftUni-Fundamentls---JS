

function evenOddSubstraction(arr){
    let evenSum = 0;
    let oddSum = 0;

    for (let i =0; i < arr.length; i++){
        let currNumber = Number(arr[i]);
        if (currNumber % 2 == 0){
            evenSum += currNumber;
        }
        else{
            oddSum += currNumber;
        }
    }
    console.log(evenSum - oddSum);
}

evenOddSubstraction([1,2,3,4,5,6])
evenOddSubstraction([3,5,7,9])
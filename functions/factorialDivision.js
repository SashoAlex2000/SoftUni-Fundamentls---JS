

function factorialDivision(a, b){
    let firstFactoriel = 1;
    let secondFactoriel = 1;

    for (let i = 1; i <= a; i++){
        firstFactoriel *= i;
    }
    for (let i = 1; i <= b; i++){
        secondFactoriel *= i;
    }

    console.log((firstFactoriel / secondFactoriel).toFixed(2));

}

factorialDivision(5,2)
factorialDivision(6,2)
factorialDivision(77,7)
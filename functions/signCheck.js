

function signCheck(a,b,c){
    let numberOfNegatriveSigns = 0;

    if (a < 0){
        numberOfNegatriveSigns += 1;
    }
    if (b < 0){
        numberOfNegatriveSigns += 1;
    }
    if (c < 0){
        numberOfNegatriveSigns += 1;
    }

    let cond = numberOfNegatriveSigns % 2 == 0 ? "Positive":"Negative";

    console.log(cond)

}

signCheck( 5,
    12,
   -15
   )

signCheck(-6,
    -12,
     14
    )
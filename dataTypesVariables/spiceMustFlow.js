

function spiceMustFlow(mineYield){
    let totalSpiceMined = 0;
    let daysOperating = 0;
    while (mineYield >=100){
        totalSpiceMined += mineYield;
        totalSpiceMined -= 26;
        if (totalSpiceMined < 0){
            totalSpiceMined = 0;
        }
        mineYield -= 10;
        daysOperating += 1;
    }
    totalSpiceMined -= 26;
    if (totalSpiceMined < 0){
        totalSpiceMined = 0;
    }
    console.log(daysOperating);
    console.log(totalSpiceMined);
}

spiceMustFlow(450)
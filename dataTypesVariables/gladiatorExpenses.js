

function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let totalExpenses = 0;
    let shieldCounter = 0;
    for (let i = 1; i <= lostFights; i++){
        if (i % 2 == 0){
            totalExpenses += helmetPrice;
        }
        if (i % 3 == 0){
            totalExpenses += swordPrice;
        }
        if (i % 2 == 0 && i % 3 == 0){
            totalExpenses += shieldPrice;
            shieldCounter += 1;

            if (shieldCounter == 2){
                shieldCounter = 0;
                totalExpenses += armorPrice;
            }
        }
    }

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7,
    2,
    3,
    4,
    5
    )

gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
    )
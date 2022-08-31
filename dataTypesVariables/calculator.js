

function calculator(num1, operator, num2){
    let result;
    let zero = false;
    if (operator == "+"){
        result = num1 + num2;
    }
    else if (operator == "-"){
        result = num1 - num2;
    }
    else if (operator == "*"){
        result = num1 * num2;
    }
    else if (operator == "/"){
        if(num2 == 0){
            zero = true;
        }
        else{
            result = num1 / num2;
        }
    }
    if (zero == false){
        console.log(result.toFixed(2))
    }
}

calculator(5,
    '+',
    10
    )
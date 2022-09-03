

function passwordValidator(pass){
    let isValid = true;

    if (pass.length < 6 || pass.length > 10){
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }

    let numberOfNumbers = 0;
    let differentChars = false;

    for (let i = 0; i < pass.length; i++){
        let currentChar = pass[i];

        if (charIsLetter(currentChar) == false){
            isValid = false;
            if (differentChars == false){
                differentChars = true;
                console.log("Password must consist only of letters and digits");
            }
        }

        if(isNaN(currentChar) == false){
            numberOfNumbers += 1;
        }
    }

    if (numberOfNumbers < 2){
        isValid = false;
        console.log("Password must have at least 2 digits");
    }

    function charIsLetter(char) {
        if (typeof char !== 'string') {
          return false;
        }
      
        return /^[a-zA-Z0-9]+$/.test(char);
      }

      if (isValid == true){
        console.log("Password is valid");
      }
}

passwordValidator('logIn')
passwordValidator('MyPass123')
passwordValidator('Pa$s$ssssssssssssss')
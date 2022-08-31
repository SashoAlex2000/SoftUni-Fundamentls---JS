

function echoType(someVariable){
    if (typeof(someVariable) == "string" || typeof(someVariable) == "number"){
        console.log(typeof(someVariable));
        console.log(someVariable)
    }
    else{
        console.log(typeof(someVariable));
        console.log("Parameter is not suitable for printing");
    }
}


echoType(null)
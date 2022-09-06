

function personalInfo(firstName, lastName, age){
    let person = {}
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;

    return person;

}


let testPerson = personalInfo("Peter", 
"Pan",
"20"
)

console.log(testPerson.firstName)
console.log(testPerson.lastName)
console.log(testPerson.age)
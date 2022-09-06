

let person = {
    name: 'alex',
    age: 22,

    displayInfo: function(deter){
        if (deter == 1){
            return (person.name)
        }
        else{
            return (person.age);
        }
    }
}


console.log(person.displayInfo(1))

person.sayHello = () => console.log("hello guys");

person.sayHello()
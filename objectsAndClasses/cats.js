

class Cats{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    meow(){
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}

function catFactory(arr){
    
    for (let i =0; i < arr.length; i++){
        let splitData = arr[i].split(" ");

        let currentCat = new Cats(splitData[0], splitData[1]);
        currentCat.meow();
    }

}

catFactory(['Mellow 2', 'Tom 5'])
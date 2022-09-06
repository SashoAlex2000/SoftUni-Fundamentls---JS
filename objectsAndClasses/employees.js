


function employeePrinter(arr){

        
    class Employee{
        constructor(name){
            this.name = name;
            this.personalNum = Number(name.length);
        }

        printInfo(){
            console.log(`Name: ${this.name} -- Personal Number: ${this.personalNum}`);
        }
    }


    for (let i = 0; i < arr.length; i++){
        let currEmployee = new Employee(arr[i]);
        currEmployee.printInfo();
    }
}

employeePrinter([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )
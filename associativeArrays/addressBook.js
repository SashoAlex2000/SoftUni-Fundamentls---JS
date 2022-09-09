

function addressBook(arr){
    let book = {};

    for (let line of arr){
        let [name, address] = line.split(":");
        book[name] = address;
    }

    let entries = Object.entries(book);

    entries.sort((a,b) => a[0].localeCompare(b[0]));

    for (let arr of entries){
        console.log(`${arr[0]} -> ${arr[1]}`);
    }
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)
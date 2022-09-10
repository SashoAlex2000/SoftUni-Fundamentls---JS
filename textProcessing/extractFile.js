

function extractFile(filePath){
    let parts = filePath.split("\\");

    let last = parts.pop();

    let shredded = last.split(".");

    let extention = shredded.pop();
    let fileName;

    if (shredded.length > 1){
        fileName = shredded.join(".");
    }
    else{
        fileName = shredded[0];
    }

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extention}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx')

extractFile('C:\\Projects\\Data-Structures\\LinkedList.net.cs')
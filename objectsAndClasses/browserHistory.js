

function browserHistory(obj, arr){

    // console.log(obj);
    // let nameOfBrowser = obj["Browser Name"]
    // console.log(nameOfBrowser)
    // console.log(obj["Open Tabs"]);
    // obj["Open Tabs"].push("SoftUni.bg")
    // console.log(obj["Open Tabs"]);


    for (let i = 0; i < arr.length; i++){
        let currentCommand = arr[i];
        let splitCommand = currentCommand.split(" ");

        if (splitCommand[0]=="Clear"){
            obj["Open Tabs"] = [];
            obj["Browser Logs"] = [];
            obj["Recently Closed"] = [];

        }
        else{
            if (splitCommand[0] == "Open"){
                obj["Browser Logs"].push(currentCommand);
                obj["Open Tabs"].push(splitCommand[1])
            }
            else if (splitCommand[0] == "Close"){
                
                for (let c = 0; c < obj["Open Tabs"].length; c++){
                    if (obj["Open Tabs"][c] == splitCommand[1]){
                        obj["Open Tabs"].splice(c,1);
                        obj["Browser Logs"].push(currentCommand);
                        obj["Recently Closed"].push(splitCommand[1]);
                    }
                }

            }
        }
    }

    console.log(obj["Browser Name"]);
    console.log(`Open Tabs: ${obj["Open Tabs"].join(", ")}`);
    console.log(`Recently Closed: ${obj["Recently Closed"].join(", ")}`);
    console.log(`Browser Logs: ${obj["Browser Logs"].join(", ")}`);

}


browserHistory({"Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"],
"Recently Closed":["Yahoo","Gmail"],
"Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},
["Close Facebook", "Open StackOverFlow", "Open Google"]
)

browserHistory({"Browser Name":"Mozilla Firefox",
"Open Tabs":["YouTube"],
"Recently Closed":["Gmail", "Dropbox"],
"Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
)
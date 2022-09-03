

function loadingBar(percent){
    let bar = [];

    if (percent != 100){
        let count = percent / 10;
        for (let i = 0; i < count; i++){
            bar.push("%");
        }
        for (let n = count; n < 10; n++){
            bar.push(".");
        }
        console.log(`${percent}% [${bar.join("")}]`);
        console.log("Still loading...");
    }
    else{
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");    
    }

}

loadingBar(30)
loadingBar(100)
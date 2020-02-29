let leftIndicator, rightIndicator = false

mp.keys.bind(0x4F, true, function() {   // O Key
    if(mp.players.local.vehicle){
        if(isDriver() === true){
            toggleIndicator("left")
        }
    }
});

mp.keys.bind(0x50, true, function() {   // P Key
    if(mp.players.local.vehicle){
        if(isDriver() === true){
            toggleIndicator("right")
        }
    }
});


function toggleIndicator(side){
    if(side === "left"){
        if(rightIndicator) toggleIndicator("right");//  Stops both lights being on
        leftIndicator = !leftIndicator
        mp.players.local.vehicle.setIndicatorLights(1, leftIndicator);
    } else if (side === "right"){
        if(leftIndicator) toggleIndicator("left");   //  Stops both lights being on
        rightIndicator = !rightIndicator
        mp.players.local.vehicle.setIndicatorLights(0, rightIndicator);
    }
}
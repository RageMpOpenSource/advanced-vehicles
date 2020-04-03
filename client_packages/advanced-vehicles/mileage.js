let distTimer, miles = 0;

mp.events.add('playerEnterVehicle', () => {
    if(!mp.game.vehicle.isThisModelABicycle(mp.players.local.vehicle.model) && isDriver()){
        mileageCounter();
    }
});

mp.events.add('playerLeaveVehicle', () => {
    if(!mp.game.vehicle.isThisModelABicycle(mp.players.local.vehicle.model) && isDriver()){
        clearInterval(distTimer);
        mp.events.callRemote('saveMileage', miles);
    }
});

mp.events.add("render", () => {
    if(isDriver()){
        if(!mp.game.vehicle.isThisModelABicycle(mp.players.local.vehicle.model)){
            let text = `${miles.toFixed(2)} Mi`
            mp.game.graphics.drawText(text, [0.9, 0.78], { 
                font: 4, 
                color: [255, 255, 255, 255], 
                scale: [0.5, 0.5], 
                outline: true
            });
        }
    }
});

function mileageCounter() {
    let veh = mp.players.local.vehicle;
    let lastPos = veh.position;
    let speed = 0;
    isNaN(mp.players.local.vehicle.getVariable('miles')) ? miles = 0 : miles = mp.players.local.vehicle.getVariable('miles')
    distTimer = setInterval(() => {
        speed = (veh.getSpeed() * 2.236936).toFixed(0);
        miles += speed/3600;    
        lastPos = veh.position;
    }, 1000);
}

function isDriver() {
    if(mp.players.local.vehicle) return mp.players.local.vehicle.getPedInSeat(-1) === mp.players.local.handle;
}
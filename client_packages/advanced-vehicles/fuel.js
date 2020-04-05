let miles = 0;
let fuel = 100;

mp.events.add('render', () => {
    if(isDriver()){
        if(!mp.game.vehicle.isThisModelABicycle(mp.players.local.vehicle.model)){
            mp.game.graphics.drawText(`Fuel: ~w~${fuel.toFixed(0)}%`, [0.9, 0.81], { 
                font: 4, 
                color: [231, 76, 60, 255], 
                scale: [0.5, 0.5], 
                outline: true
            });
        }
    }
});

mp.events.add('playerEnterVehicle', () => {
    if(!mp.game.vehicle.isThisModelABicycle(mp.players.local.vehicle.model) && isDriver()){
        fuelMileageCounter();
    }
});

mp.events.add('playerLeaveVehicle', () => {
    if(!mp.game.vehicle.isThisModelABicycle(mp.players.local.vehicle.model) && isDriver()){
        clearInterval(distTimer);
        mp.events.callRemote('saveFuel', fuel);
    }
});

function isDriver() {
    if(mp.players.local.vehicle) return mp.players.local.vehicle.getPedInSeat(-1) === mp.players.local.handle;
}

function fuelMileageCounter() {
    let veh = mp.players.local.vehicle;
    let lastPos = veh.position;
    let speed = 0;
    mp.console.logInfo(`Var: ${mp.players.local.vehicle.getVariable('fuel')}`);
    isNaN(mp.players.local.vehicle.getVariable('fuel')) ? fuel = 100 : fuel = mp.players.local.vehicle.getVariable('fuel');
    distTimer = setInterval(() => {
        speed = (veh.getSpeed() * 2.236936).toFixed(0);
        fuel -= (speed/3600)*2;    
        lastPos = veh.position;
    }, 1000);
}
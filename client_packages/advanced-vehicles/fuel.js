let miles;
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
            mp.game.graphics.drawText(`${miles}`, [0.9, 0.84], { 
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
        mileageCounter();
    }
});

mp.events.add('playerLeaveVehicle', () => {
    if(!mp.game.vehicle.isThisModelABicycle(mp.players.local.vehicle.model) && isDriver()){
        clearInterval(distTimer);
    }
});

function isDriver() {
    if(mp.players.local.vehicle) return mp.players.local.vehicle.getPedInSeat(-1) === mp.players.local.handle;
}

function mileageCounter() {
    let veh = mp.players.local.vehicle;
    let lastPos = veh.position;
    let speed = 0;
    miles = 0;
    fuel = 100;
    distTimer = setInterval(() => {
        speed = (veh.getSpeed() * 2.236936).toFixed(0);
        fuel -= (speed/3600)*2;    
        lastPos = veh.position;
    }, 1000);
}
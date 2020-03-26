let distTimer;
let miles = 0;

mp.events.add('client:playerEnterVehicle', () => {
    if(isDriver()){
        mileageCounter();
    }
});

mp.events.add('client:playerExitVehicle', () => {
    clearInterval(distTimer);
});

mp.events.add("render", () => {
    if(isDriver()){
        let text = `${miles.toFixed(2)} Mi`
        mp.game.graphics.drawText(text, [0.9, 0.78], { 
            font: 4, 
            color: [255, 255, 255, 255], 
            scale: [0.5, 0.5], 
            outline: true
        });
    }
});

function mileageCounter() {
    let veh = mp.players.local.vehicle;
    let lastPos = veh.position;
    let speed = 0;
    distTimer = setInterval(() => {
        speed = (veh.getSpeed() * 2.236936).toFixed(0);
        miles += speed/3600;    
        lastPos = veh.position;
    }, 1000);
}

function isDriver() {
    if(mp.players.local.vehicle) return mp.players.local.vehicle.getPedInSeat(-1) === mp.players.local.handle;
}
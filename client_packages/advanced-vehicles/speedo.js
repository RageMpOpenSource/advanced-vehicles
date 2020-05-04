let driver = false;

mp.events.add("render", () => {
    if(driver){
        mp.game.graphics.drawText(`Speed: ~w~${(mp.players.local.vehicle.getSpeed() * 2.236936).toFixed(0)} MPH`, [0.9, 0.7], { 
            font: 4, 
            color: [231, 76, 60, 255], 
            scale: [0.9, 0.9], 
            outline: true
        });
    }
});

mp.events.add('playerEnterVehicle', (vehicle, seat) => {
    if(seat === -1) return driver = true;
});

mp.events.add('playerLeaveVehicle', (vehicle, seat) => {
    if(seat === -1) return driver = false;
});
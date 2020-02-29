mp.events.add("render", () => {
    if(isDriver()){
        mp.game.graphics.drawText(`Speed: ~w~${(mp.players.local.vehicle.getSpeed() * 2.236936).toFixed(0)} MPH`, [0.9, 0.7], { 
            font: 4, 
            color: [231, 76, 60, 255], 
            scale: [0.9, 0.9], 
            outline: true
        });
    }
});

function isDriver() {
    if(mp.players.local.vehicle) return mp.players.local.vehicle.getPedInSeat(-1) === mp.players.local.handle;
}
let cruiseSpeed;
let cruiseEnabled = false;

mp.events.add('render', () => {
    if(cruiseEnabled){
        mp.players.local.vehicle.setForwardSpeed(cruiseSpeed);
        //  Auto disable cruise control if any of the following happen
        if(mp.players.local.vehicle.hasCollidedWithAnything()) return toggleCruise();   // Collision Check
        if(mp.game.controls.isControlPressed(2, 76) || mp.game.controls.isControlPressed(2, 72) || mp.game.controls.isControlJustPressed(27, 71)) return toggleCruise();     //  Acceleration & Brake Check
        if(mp.players.local.vehicle.isInAir()) return toggleCruise();   //  Car in air check
    }
});

mp.keys.bind(0x59, true, function() {   // Y Key
    if(mp.players.local.vehicle){
        if(isDriver() && !mp.game.vehicle.isThisModelABicycle(mp.players.local.vehicle.model)){
            toggleCruise();
        }
    }
});

function isDriver() {
    if(mp.players.local.vehicle) return mp.players.local.vehicle.getPedInSeat(-1) === mp.players.local.handle;
}

function toggleCruise(){
    if(isDriver()){
        if(!cruiseEnabled){
            if(mp.players.local.vehicle.getSpeed() > 0) {
                cruiseEnabled = true;
                cruiseSpeed = mp.players.local.vehicle.getSpeed();
            } else {
                mp.gui.chat.push(`You cannot enable cruise control if you aren't moving.`);
            }
        } else {
            cruiseEnabled = false;
        }
    }
}

mp.events.add("render", () => {
    if(isDriver()){
        if(!mp.game.vehicle.isThisModelABicycle(mp.players.local.vehicle.model)){
            let text = cruiseEnabled ? `Cruise Control` : `~r~Cruise Control`
            mp.game.graphics.drawText(text, [0.9, 0.75], { 
                font: 4, 
                color: [119, 209, 113, 255], 
                scale: [0.5, 0.5], 
                outline: true
            });
        }
    }
});

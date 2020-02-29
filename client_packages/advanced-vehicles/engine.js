mp.game.vehicle.defaultEngineBehaviour = false; //  Stops players turning on the vehicle when entering it
mp.players.local.setConfigFlag(429, true);      //  Stops the player animation glitching with the above function

mp.events.add('playerLeaveVehicle', () => {
    if(mp.players.local.vehicle.getVariable('engine') == true){
        mp.players.local.vehicle.setEngineOn(true, true, true);
    }
});

mp.events.add('entityStreamIn', (entity) => {
    if(entity.type == 'vehicle'){
        let eStatus = entity.getVariable('engine');
        if(eStatus === undefined) eStatus = false;
        setTimeout(_ => {
            entity.setEngineOn(eStatus, true, true);
        }, 100);
    }
});
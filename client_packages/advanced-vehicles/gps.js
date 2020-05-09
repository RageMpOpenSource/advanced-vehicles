let player = mp.players.local, activeGps = false, street = undefined, zone = undefined;

mp.events.add("render", () => {
    if(activeGps){
        street = mp.game.pathfind.getStreetNameAtCoord(player.position.x, player.position.y, player.position.z, 0, 0);
        zone = mp.game.gxt.get(mp.game.zone.getNameOfZone(player.position.x, player.position.y, player.position.z));
        mp.game.graphics.drawText(`~w~${mp.game.ui.getStreetNameFromHashKey(street.streetName)}\n ~s~${zone}`, [0.2, 0.8], { 
            font: 4, 
            color: [231, 76, 60, 255], 
            scale: [0.5, 0.5], 
            outline: true
        });
    }
});

mp.events.add('client:toggleGPS', (toggle) => {
    activeGps = toggle;
});
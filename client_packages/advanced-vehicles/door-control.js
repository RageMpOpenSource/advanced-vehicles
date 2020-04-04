mp.events.add('client:toggleDoor', (doorid) => {
    if(mp.players.local.vehicle){
        let doors = mp.players.local.vehicle.getVariable('doors');
        doors[0][doorid] ? mp.players.local.vehicle.setDoorOpen(parseInt(doorid), false, true) :  mp.players.local.vehicle.setDoorShut(parseInt(doorid), true);  
    }
});
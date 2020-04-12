/**
 * Todo:
 *  [ ] Battery Life(?)
 *  [ ] GPS Location display
 *  [ ] Tires worn out(?)
 */

require('./extends/Vehicle.js');
require('./mileage.js');
require('./fuel.js');

mp.events.addCommand('engine', (player) => {
    player.vehicle ? player.vehicle.toggleEngine() : player.outputChatBox("You need to be in a vehicle to use this command.");
});

mp.events.addCommand('door', (player, doorid) => {
    player.vehicle.toggleDoor(doorid);
    player.call('client:toggleDoor', [doorid]);
});

//  Used to set the initial variables on a new vehicle
mp.events.add("entityCreated", (entity) => {
    if(entity.type === "vehicle"){
        entity.setVariables({
            "miles": 0,
            "doors": [{0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false}],
            "fuel": 100,
            "wheels": [{id: 0, damaged: false, miles: 0}, {id: 1, damaged: false, miles: 0}, {id: 4, damaged: false, miles: 0}, {id: 5, damaged: false, miles: 0}]
        });
    }
});

mp.events.addCommand('wheels', (player) => {
    player.outputChatBox(`${JSON.stringify(player.vehicle.getVariable('wheels'))}`)
})

//  Testing vehicles, to be removed
mp.events.addCommand('car', (player) => {
    mp.vehicles.new(mp.joaat('turismor'), player.position);
});

mp.events.addCommand('car2', (player) => {
    mp.vehicles.new(mp.joaat('elegy'), player.position);
});

mp.events.addCommand('bmx', (player) => {
    mp.vehicles.new(mp.joaat('bmx'), player.position);
});
/**
 * Todo:
 *  [ ] Fuel
 *  [ ] Battery Life(?)
 *  [ ] GPS Location display
 *  [ ] Tires worn out(?)
 */

require('./extends/Vehicle.js');
require('./mileage.js');

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
        entity.setVariable('miles', 0);
        entity.setVariable('doors', [{0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false}]);
        entity.setVariable('fuel', 100);
    }
});

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
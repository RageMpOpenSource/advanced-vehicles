/**
 * Todo:
 *  [ ] Toggle Vehicle doors (inc trunk and hood)
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
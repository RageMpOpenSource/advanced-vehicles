/**
 * Todo:
 *  [x] Engine status (off when spawned, should stay on when out)
 *  [x] Cruise control
 *  [ ] Calculate distance travelled (mileage)
 *  [ ] Toggle Vehicle doors (inc trunk and hood)
 *  [ ] Fuel
 *  [ ] Battery Life(?)
 *  [ ] Odometer
 *  [ ] GPS Location display
 *  [ ] Tires worn out(?)
 *  [x] Indicator lights
 */

require('./extends/Vehicle.js');

mp.events.addCommand('engine', (player) => {
    player.vehicle.toggleEngine();
});

//  Testing vehicles, to be removed
mp.events.addCommand('car', (player) => {
    mp.vehicles.new(mp.joaat('turismor'), player.position);
});

mp.events.addCommand('car2', (player) => {
    mp.vehicles.new(mp.joaat('elegy'), player.position);
});
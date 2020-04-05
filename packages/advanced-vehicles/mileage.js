mp.events.add('saveMileage', (player, data) => {
    let oldMiles = player.vehicle.getVariable('miles');
    oldMiles <= data ? player.vehicle.setVariable('miles', data) : console.log(`${player.name} potentially cheated miles (Old: ${oldMiles} / New: ${data})`);
});
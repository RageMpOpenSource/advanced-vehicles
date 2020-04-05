mp.events.add('saveFuel', (player, data) => {
    let oldFuel = player.vehicle.getVariable('fuel');
    oldFuel > data ? player.vehicle.setVariable('fuel', data) : console.log(`${player.name} potentially cheated fuel (Old: ${oldFuel} / New: ${data})`);
});
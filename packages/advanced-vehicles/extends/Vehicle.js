mp.Vehicle.prototype.toggleEngine = function(){
    this.engine = !this.engine;
    this.setVariable('engine', this.engine);
}

mp.Vehicle.prototype.toggleDoor = function(doorid){
    let doors = this.getVariable('doors');
    doors[0][doorid] = !doors[0][doorid];
    this.setVariable('doors', doors);
}
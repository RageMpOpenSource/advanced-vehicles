mp.Vehicle.prototype.toggleEngine = function(){
    this.engine = !this.engine;
    this.setVariable('engine', this.engine);
}
class CarBrand {
    // Начало
constructor(model,power,timeTo100) {
    this.model = model;
    this.power = power;
    this.timeTo100 = timeTo100;

}

runDrag(time){
var str = this.model + ' runs drag for ' + time + ' seconds'
    return str
}

getWhoIsFaster(car){
if(this.timeTo100>car.timeTo100){
    var razn = this.timeTo100 - car.timeTo100
    var str = car.model + ' is faster for ' + razn + ' seconds'
    return str
} else {
    var raz = car.timeTo100 - this.timeTo100
    var st = this.model + ' is faster for ' + raz + ' seconds'
    return st
}
}
    // Конец
}

export default CarBrand;
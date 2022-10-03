import lada from "./lada";

class CarBrand {
    // Начало
    constructor(model, power, acceleration_time) {
        this.model = model;
        this.power = power;
        this.acceleration_time = acceleration_time;
    }
    runDrag(time) {
        time = this.acceleration_time
        return 'Lada ' + this.model + ' runs drag for ' + time + ' seconds'
    }
    getWhoIsFaster(car) {

    }
    // Конец
}

export default CarBrand;
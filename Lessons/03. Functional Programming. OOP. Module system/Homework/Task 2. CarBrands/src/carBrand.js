class CarBrand {
    // Начало
    constructor(model, power, time_to_100) {
        this.model = model;
        this.power = power;
        this.time_to_100 = time_to_100;
    }

    runDrag(time) {
        return this.model + ' runs drag for ' + time + ' seconds'
    }

    getWhoIsFaster(car){
        var different = Math.abs(this.time_to_100 - car.time_to_100)
        if (this.time_to_100 > car.time_to_100) {
            return car.model + ' is faster for ' + different + ' seconds';
        } else {
            return this.model + ' is faster for ' + different + ' seconds';
        }

    }

    // Конец
}

export default CarBrand;
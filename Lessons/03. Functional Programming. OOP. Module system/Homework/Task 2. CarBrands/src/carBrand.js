class CarBrand {
    // Начало
    constructor(model, power, time) {
        this.model = model;
        this.power = power;
        this.time = time;
    }

    runDrag(time) {
        return this.model + " runs drag for " + time + " seconds";
    }

    getWhoIsFaster(car) {
        let timeRun = Math.abs(this.time - car.time);
        if(this.time < car.time) {
            return this.model + " is faster for " + timeRun+ " seconds";
        }
        return (car.model + " is faster for " + timeRun + " seconds");
    }
    // Конец
}

export default CarBrand;
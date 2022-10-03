class CarBrand {
    constructor(model, power, time) {
        this.model = model;
        this.power = power;
        this.time = time;
    }

    runDrag(time) {
        return (this.model + " runs drag for " + time +  " seconds");
    }

    getWhoIsFaster(car) {
        const time = Math.abs(this.time -  car.time);
        if(this.time <  car.time) {
            return (this.model + " is faster for " + time + " seconds");
        } else {
            return (car.model + " is faster for " + time + " seconds");
        }
    }
}

export default CarBrand;
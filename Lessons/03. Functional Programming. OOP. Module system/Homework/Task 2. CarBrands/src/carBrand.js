class CarBrand {
    // Начало
    constructor(model, power, time) {
        this.model = model;
        this.power = power;
        this.time = time;
    }
    runDrag(time) {
        return this.model+' runs drag for '+time+' seconds';
    }

    getWhoIsFaster(car) {
        if(this.time<car.time) {
            return this.model +' is faster for '+Math.abs(this.time-car.time)+' seconds';
        } else {
         return car.model+'is faster for '+Math.abs(this.time-car.time)+' seconds';
        }
    }
    // Конец
}

export default CarBrand;
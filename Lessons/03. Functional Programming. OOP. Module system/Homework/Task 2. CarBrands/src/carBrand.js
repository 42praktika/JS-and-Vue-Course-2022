class CarBrand {
    // Начало
    constructor(model, power, timeTo100) {
        this.model = model;
        this.power = power;
        this.timeTo100 = timeTo100;
    };
    runDrag(time) {
        return `${this.model} runs drag for ${time} seconds`
    };
    getWhoIsFaster(car) {
        let time = Math.abs(this.timeTo100 - car.timeTo100);
        if (this.power > car.power) {
            return `${this.model} is faster for ${time} seconds`
        } else {
            return `${this.model} is slower for ${time} seconds`
        }
    };
    // Конец
}

export default CarBrand;
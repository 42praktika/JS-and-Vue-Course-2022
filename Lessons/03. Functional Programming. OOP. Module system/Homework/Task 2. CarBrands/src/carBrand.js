
class CarBrand {
    // Начало
    constructor(model, power, timeFor100) {
        this.model = model;
        this.power = power;
        this.timeFor100 = timeFor100;
    }
    runDrag(time) {
        return (`${this.model} runs drag for ${time} seconds`);
    }

    getWhoIsFaster(car) {
        if (this.timeFor100 < car.timeFor100) {
            return (`${this.model} is faster for ${car.timeFor100 - this.timeFor100} seconds`);
        } else {
            return (`${car.model} is faster for ${this.timeFor100 - car.timeFor100} seconds`);
        }
    }
    // Конец
}




export default CarBrand;
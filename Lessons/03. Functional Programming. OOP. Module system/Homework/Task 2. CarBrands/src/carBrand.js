class CarBrand {
    brand;

    constructor(model, power, timeToHundred) {
        this.model = model;
        this.power = power;
        this.timeToHundred = timeToHundred;
    }

    runDrag(time) {
        return `${(this.brand)} ${this.model} runs drag for ${time} seconds`
    }

    getWhoIsFaster(car) {
        let difference = this.timeToHundred - car.timeToHundred;
        if (difference < 0)
        {
            return `${this.brand} ${this.model} is faster for ${Math.abs(difference)} seconds`
        }
        else {
            return `${car.brand} ${car.model} is faster for ${difference} seconds`
        }
    }
}

export default CarBrand;
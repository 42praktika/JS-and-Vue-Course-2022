class CarBrand {
    constructor(model, power, accelerationTimeTo100) {
        this.model = model
        this.power = power
        this.accelerationTimeTo100 = accelerationTimeTo100
    }
     runDrag(time) {
        return `${this.model} runs drag for ${time} seconds`
     }

    getWhoIsFaster(car) {
        let time = Math.abs(this.accelerationTimeTo100 - car.accelerationTimeTo100);
        if (this.power > car.power) {
            return `${this.model} is faster for ${time} seconds`
        }
        else {
            return `${this.model} is slower for ${time} seconds`
        }
    }
}

export default CarBrand;
class CarBrand {

    constructor(brand, power, acceleration) {
        this.brand = brand;
        this.power = power;
        this.acceleration = acceleration;
    }

    runDrag(time) {
        return `${this.brand} runs drag for ${time} seconds`;
    }

    getWhoIsFaster(car) {
        let winner;
        let difference;
        if (this.acceleration < car.acceleration){
            winner = this.brand;
            difference = car.acceleration - this.acceleration;
        }
        else {
            winner = car.brand;
            difference = this.acceleration - car.acceleration;
        }

        return `${winner} is faster for ${difference} seconds`
    }
}

export default CarBrand;
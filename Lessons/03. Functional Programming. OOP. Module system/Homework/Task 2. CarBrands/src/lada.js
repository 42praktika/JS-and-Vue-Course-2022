import CarBrand from './carBrand';

class LadaBrand extends CarBrand {
    constructor(brand, power, acceleration, location) {
        super(brand, power, acceleration);
        this.brand = 'Lada ' + brand;
        this.power = power;
        this.acceleration = acceleration;
        this.location = location;
    }

    getLocation() {
        return `${this.brand} is located in ${this.location}`;
    }
}

export default LadaBrand;
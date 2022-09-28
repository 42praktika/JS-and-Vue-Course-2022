import CarBrand from './carBrand';

class LadaBrand extends CarBrand {
    constructor(model, power, accelerationTimeTo100, location) {
        super(model, power, accelerationTimeTo100);
        this.model = 'Lada ' + this.model
        this.location = location
    }
    getLocation() {
        return `${this.model} is located in ${this.location}`
    }
}

export default LadaBrand;
import CarBrand from './carBrand';

class LadaBrand extends CarBrand {
    constructor(model, power, timeToHundred, location) {
        super(model, power, timeToHundred);
        this.brand = 'Lada';
        this.location = location;
    }

    getLocation() {
        return `Lada ${this.model} is located in ${this.location}`
    }
}

export default LadaBrand;
import CarBrand from './carBrand';

class LadaBrand extends CarBrand {
    constructor(model, power, time,location) {
        super(model, power,time);
        this.model = "Lada " + model;
        this.location = location;
    }
    getLocation() {
        return this.model + " is located in " + this.location;
    }
}

export default LadaBrand;
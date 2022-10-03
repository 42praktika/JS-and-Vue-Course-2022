import CarBrand from './carBrand';

class LadaBrand extends CarBrand {
    // Начало
    constructor(location) {
        super(model, power, acceleration_time);
        this.location = location
    }
    getLocation() {
        return 'Lada ' + this.model + ' is located in ' + this.location
    }

    // Конец
}

export default LadaBrand;
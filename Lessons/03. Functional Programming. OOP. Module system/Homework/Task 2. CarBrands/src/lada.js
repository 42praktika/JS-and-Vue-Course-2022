import CarBrand from './carBrand';

class LadaBrand extends CarBrand {
    // Начало
    constructor(model, power, time, location) {
        super();
        this.model = model;
        this.power = power;
        this.time = time;
        this.location = location;
    }

    getLocation() {
        return "Lada " + this.model + " is located in " + this.location;
    }

    runDrag(time) {
        return "Lada " + super.runDrag(time);
    }


    getWhoIsFaster(car) {
        return "Lada " + super.getWhoIsFaster(car);
    }

// Конец
}

export default LadaBrand;
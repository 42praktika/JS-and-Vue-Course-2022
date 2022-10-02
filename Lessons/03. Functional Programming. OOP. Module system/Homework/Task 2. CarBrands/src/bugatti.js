import CarBrand from './carBrand';

class BugattiBrand extends CarBrand {
    // Начало
    constructor(model, power, time, price) {
        super();
        this.model = model;
        this.power = power;
        this.time = time;
        this.price = price;
    }

    getIsExpensive() {
        if (this.price > 1) return true;
        else return false;
    }

    runDrag(time) {
        return "Bugatti " + super.runDrag(time);
    }

    getWhoIsFaster(car) {
        return "Bugatti " + super.getWhoIsFaster(car);
    }

// Конец
}

export default BugattiBrand;
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
        if (this.price >= 1000000) return true;
        else return false;
    }

    // Конец
}

export default BugattiBrand;
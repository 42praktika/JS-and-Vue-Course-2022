import CarBrand from './carBrand';

class BugattiBrand extends CarBrand {
    // Начало
    constructor(model, power, time, price) {
        super(model, power, time);
        this.model = "Bugatti " + model;
        this.price = price;
    }

    getIsExpensive() {
        if(this.price > 1) {
            return true;
        }
        return false;
    }
    // Конец
}

export default BugattiBrand;
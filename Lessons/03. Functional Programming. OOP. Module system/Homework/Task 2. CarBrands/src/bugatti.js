import CarBrand from './carBrand';

class BugattiBrand extends CarBrand {
    // Начало
    constructor(model, power, time, cost) {
        super(model, power, time);
        this.model = "Bugatti " + model;
        this.cost = cost;
    }

    getIsExpensive() {
        if (this.cost >= 1) {
            return true;
        } else return false;
    }

    // Конец
}

export default BugattiBrand;
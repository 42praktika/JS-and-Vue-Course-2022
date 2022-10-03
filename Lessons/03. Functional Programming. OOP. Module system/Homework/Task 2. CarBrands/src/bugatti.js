import CarBrand from './carBrand';

class BugattiBrand extends CarBrand {
    // Начало
    constructor(model, power, time_to_100, cost) {
        super(model, power, time_to_100);
        this.model = 'Bugatti ' + model;
        this.time_to_100 = time_to_100;
        this.cost = cost;
    }

    getIsExpensive() {
        return this.cost >= 1;
    }

    // Конец
}

export default BugattiBrand;
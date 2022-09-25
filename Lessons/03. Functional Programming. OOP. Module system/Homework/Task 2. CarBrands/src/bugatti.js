import CarBrand from './carBrand';

class BugattiBrand extends CarBrand {
    // Начало
    constructor(model, power, timeTo100, cost) {
        super(model, power, timeTo100);
        this.model = 'Bugatti ' + this.model;
        this.cost = cost;
    };
    getIsExpensive() {
        return this.cost > 1
    };
    // Конец
}

export default BugattiBrand;
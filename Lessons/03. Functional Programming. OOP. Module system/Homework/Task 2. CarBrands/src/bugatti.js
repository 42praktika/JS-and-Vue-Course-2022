import CarBrand from './carBrand';

class BugattiBrand extends CarBrand {
    // Начало
    constructor(model, power, timeFor100, cost) {
        super(model, power, timeFor100);
        this.cost = cost;
        this.model = `Bugatti ${model}`;
    }

    getIsExpensive() {
        return this.cost > 1;
        // Конец
    }
}



export default BugattiBrand;
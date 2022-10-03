import CarBrand from './carBrand';

class BugattiBrand extends CarBrand {
    // Начало
    constructor(cost) {
        super(model, power, acceleration_time);
        this.cost = cost

    }
    getIsExpensive() {
        if (this.cost > 1) {
            return true
        }
        else {
            return false
        }
    }
    // Конец
}

export default BugattiBrand;
import CarBrand from './carBrand';

class BugattiBrand extends CarBrand {
    constructor(brand, power, acceleration, cost) {
        super(brand, power, acceleration);
        this.brand = 'Bugatti ' + brand;
        this.power = power;
        this.acceleration = acceleration;
        this.cost = cost;
    }
    getIsExpensive() {
        return this.cost > 1;
    }

    // Конец
}

export default BugattiBrand;
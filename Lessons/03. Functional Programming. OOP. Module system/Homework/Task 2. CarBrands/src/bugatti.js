import CarBrand from './carBrand';

class BugattiBrand extends CarBrand {

    constructor(model, power, accelerationTimeTo100, price) {
        super(model, power, accelerationTimeTo100);
        this.model = "Bugatti " + model;
        this.price = price;
    }

    getIsExpensive() {
        return this.price > 1;
    }

}

export default BugattiBrand;
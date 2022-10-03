import CarBrand from './carBrand';

class BugattiBrand extends CarBrand {
    constructor(model, power, time, price) {
        super(model, power, time);
        this.model = "Bugatti " + model;
        this.price = price;
    }

    getIsExpensive() {
        return this.price>1
    }
}
export default BugattiBrand;
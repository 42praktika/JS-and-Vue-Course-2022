import CarBrand from './carBrand';

class BugattiBrand extends CarBrand {
    constructor(model, power, timeToHundred, price) {
        super(model, power, timeToHundred);
        this.brand = 'Bugatti';
        this.price = price;
    }

    getIsExpensive() {
        return this.price > 1;
    }
}

export default BugattiBrand;
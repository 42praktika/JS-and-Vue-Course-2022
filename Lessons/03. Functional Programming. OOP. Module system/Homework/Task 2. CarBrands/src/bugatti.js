import CarBrand from './carBrand';

class BugattiBrand extends CarBrand {
    // Начало
    constructor(model,power,timeTo100,price) {
        super(model,power,timeTo100);
        this.model='Bugatti ' + model;
        this.price = price

    }
    getIsExpensive(){
return this.price > 1;}
    // Конец
}

export default BugattiBrand;
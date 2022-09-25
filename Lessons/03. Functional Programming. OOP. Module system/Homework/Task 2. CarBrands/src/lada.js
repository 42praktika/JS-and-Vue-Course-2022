import CarBrand from './carBrand';

class LadaBrand extends CarBrand {
    // Начало
    constructor(model,power,timeTo100,location) {
        super(model,power,timeTo100);
        this.model = 'Lada ' + model
        this.location = location
    }
    getLocation(){
        var str = this.model + ' is located in ' + this.location
        return str
    }

    // Конец
}

export default LadaBrand;
import CarBrand from './carBrand';


class LadaBrand extends CarBrand {
    // Начало
    constructor(model, power, timeFor100, location) {
        super(model, power, timeFor100);
        this.model = `Lada ${model}`;
        this.location = location;
    }
    getLocation() {
        return(`${this.model} is located in ${this.location}`)
    }
    // Конец
}


export default LadaBrand;
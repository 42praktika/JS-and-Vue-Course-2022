import CarBrand from './carBrand';

class LadaBrand extends CarBrand {
    // Начало
   constructor(model, power, time, locationoOfTheCar) {
        super(model, power, time);
        this.model = 'Lada ' + model;
        this.locationoOfTheCar = locationoOfTheCar;
    }
    getLocation() {
        return this.model+' is located in '+ this.locationoOfTheCar;
    }
     // Конец
}

export default LadaBrand;
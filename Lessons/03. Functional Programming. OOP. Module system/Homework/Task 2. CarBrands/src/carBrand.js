class CarBrand {
    // Начало
    runDrag(time) {
        return this.model + " runs drag for " + time + " seconds";
    }
    getWhoIsFaster(car) {
        let x = Math.abs(car.time - this.time);
        if (car.time > this.time) {
            return car.model + " is faster for " + x + " seconds";
        } else {
            return this.model + " is faster for " + x + " seconds";
        }
    }
    // Конец
}

export default CarBrand;
class CarBrand {
    // Начало
    constructor(name, horsePowers, oneToHundred) {
        this.name = name;
        this.horsePowers = horsePowers;
        this.oneToHundred = oneToHundred;
    }

    runDrag(time) {
        return `${this.name} runs drag for ${time} seconds`;
    }

    getWhoIsFaster(car) {
        const carOneToHundred = car.oneToHundred;
        const isCurrentCarFaster = car.oneToHundred > this.oneToHundred;
        const theFastestCar = isCurrentCarFaster ? this.name : car.name;
        const timeDifference = isCurrentCarFaster ?
            this.oneToHundred - car.oneToHundred
            : car.oneToHundred - this.oneToHundred;
        return `${theFastestCar} is faster for ${Math.abs(timeDifference)} seconds`;
    }

    // Конец
}

export default CarBrand;
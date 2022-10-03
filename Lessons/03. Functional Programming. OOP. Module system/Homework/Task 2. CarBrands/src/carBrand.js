class CarBrand {
    constructor(model, power, accelerationTimeTo100) {
        this.model = model;
        this.power = power;
        this.accelerationTimeTo100 = accelerationTimeTo100;
    }

    runDrag(time) {
        return(this.model + " runs drag for " + time + " seconds");
    }
    getWhoIsFaster(car) {
        const timeDifference = Math.abs(car.accelerationTimeTo100 - this.accelerationTimeTo100);
        if(this.accelerationTimeTo100 < car.accelerationTimeTo100){
            return (this.model + " is faster for " + timeDifference + " seconds");
        }
        else {
            return (car.model + " is faster for " + timeDifference + " seconds");
        }
    }
}

export default CarBrand;
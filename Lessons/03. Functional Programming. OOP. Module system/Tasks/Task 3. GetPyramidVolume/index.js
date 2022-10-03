class Pyramid {
    // Начало
    constructor(high, square1, square2) {
        this.high = high
        this.square1 = square1
        this.square2 = square2

    }
    getVolume(){
        let volume = (this.high*(this.square1 + (this.square1*this.square2)**0.5 + this.square2))/3
        return volume
    }

    // Конец
}

export default Pyramid;
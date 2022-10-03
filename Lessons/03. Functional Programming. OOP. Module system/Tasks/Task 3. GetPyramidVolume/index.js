class Pyramid {
    // Начало
    constructor(height, square1, square2) {
        this.height = height;
        this.square1 = square1;
        this.square2 = square2;
    }

    getVolume() {
        return (this.height * (this.square1 + this.square2 + Math.sqrt(this.square1 * this.square2))) / 3
    }
    // Конец
}

export default Pyramid;
class Pyramid {
    constructor(height, square1, square2) {
        this.square1 = square1;
        this.square2 = square2;
        this.height = height;
    }
    getVolume() {
        return 1/3 * this.height * (this.square1 + Math.sqrt(this.square1 * this.square2) + this.square2);
    }
}

export default Pyramid;
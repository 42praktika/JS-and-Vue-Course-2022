class Pyramid {
    // Начало
    constructor(height, squareOne, squareTwo) {
        this.height = height;
        this.squareOne = squareOne;
        this.squareTwo = squareTwo;
    }

    getVolume() {
        return (1 / 3) * this.height * (this.squareOne + this.squareTwo + Math.sqrt(this.squareOne * this.squareTwo));
    }

    // Конец
}

export default Pyramid;
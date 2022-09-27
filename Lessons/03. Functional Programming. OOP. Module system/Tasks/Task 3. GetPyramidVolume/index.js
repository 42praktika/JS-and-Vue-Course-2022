class Pyramid {
    // Начало
    constructor(height, s1, s2) {
        this.height = height;
        this.s1 = s1;
        this.s2 = s2;
    }
    getVolume() {
        return (this.height * (this.s1 + this.s2 + Math.sqrt(this.s1 * this.s2))) / 3;
    }
    // Конец
}


export default Pyramid;
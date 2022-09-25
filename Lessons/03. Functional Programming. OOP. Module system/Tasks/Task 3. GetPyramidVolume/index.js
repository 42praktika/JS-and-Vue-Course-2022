class Pyramid {
    // Начало
    constructor(h, s1, s2) {
        this.h = h
        this.s1 = s1
        this.s2 = s2
    };
    getVolume() {
        return 1/3 * this.h * (this.s1 + (this.s1 * this.s2) ** 0.5 + this.s2)
    };
    // Конец
}

export default Pyramid;
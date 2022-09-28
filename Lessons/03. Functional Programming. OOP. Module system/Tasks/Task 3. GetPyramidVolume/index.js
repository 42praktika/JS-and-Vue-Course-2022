class Pyramid {
    constructor(h, s1, s2) {
        this.s1 = s1
        this.s2 = s2
        this.h  = h
    }

    getVolume() {
        return this.h * 1/3 * (this.s1 + (this.s1 * this.s2) ** 0.5 + this.s2)
    };
}
export default Pyramid;
class Pyramid {
    // Начало
    constructor(height, s1, s2){
        this.height = height;
        this.s2 = s2;
        this.s1 = s1;
    }

    getVolume() {
        return this.height/3*(this.s1 + this.s2 + Math.sqrt(this.s1*this.s2));
    }
    // Конец
}

export default Pyramid;
class Pyramid {
    // Начало
    constructor(height){
        this.height = height;
    }
    //V = 1 3 H ⋅ S 1 + S 1 ⋅ S 2 + S 2
    constructor(s1){
        this.s1 = s1;
    }

    constructor(s2){
        this.s2 = s2;
    }

    getVolume() {
        return (this.height * this.s1)/3 + this.s1 * this.s2 + this.s2;
    }
    // Конец
}

export default Pyramid;
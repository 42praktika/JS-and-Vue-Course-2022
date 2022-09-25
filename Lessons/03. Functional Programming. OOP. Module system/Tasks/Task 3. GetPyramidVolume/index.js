class Pyramid {
    // Начало
constructor(height,sqrOfTheUpperBase, sqrOfTheLowerBase) {
    this._height = height;
    this._sqrOfTheUpperBase = sqrOfTheUpperBase;
    this._sqrOfTheLowerBase = sqrOfTheLowerBase;

}


    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    get sqrOfTheUpperBase() {
        return this._sqrOfTheUpperBase;
    }

    set sqrOfTheUpperBase(value) {
        this._sqrOfTheUpperBase = value;
    }

    get sqrOfTheLowerBase() {
        return this._sqrOfTheLowerBase;
    }

    set sqrOfTheLowerBase(value) {
        this._sqrOfTheLowerBase = value;
    }

    getVolume() {
    let vol=  (this._height / 3)*(this._sqrOfTheLowerBase+this._sqrOfTheUpperBase+ (this._sqrOfTheUpperBase*this._sqrOfTheLowerBase)**0.5)
return vol
    }
// Конец
}

export default Pyramid;
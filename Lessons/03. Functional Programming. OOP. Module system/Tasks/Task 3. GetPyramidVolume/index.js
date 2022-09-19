
class Pyramid {
    constructor(height,UpSquare,LowerSquare) {
        this.height=height;
        this.UpSquare=UpSquare;
        this.LowerSquare=LowerSquare;
    }
    getVolume() {
        return (Math.trunc((1/3)*this.height*(this.UpSquare+this.LowerSquare+(Math.sqrt(this.UpSquare)*Math.sqrt(this.LowerSquare)))*100)/100)
    }
}
export default Pyramid



class CityGame {
    constructor(name1, name2) {
        this.arr = [];
        this.name1 = name1;
        this.name2 = name2;
    }

    play(city) {
        if (this.arr.length === 0) {
            this.arr.push(city);
            return this.arr;
        } else {
            if (city[0].toLowerCase() === this.arr[this.arr.length - 1][this.arr[this.arr.length - 1].length - 1]) {
                this.arr.push(city);
                return this.arr;
            } else {
                let winner = "";
                if (this.arr.length % 2 === 0) {
                    winner = this.name2;
                } else {
                    winner = this.name1;
                }
                return "Game over! The winner is " + winner;
            }
        }
    }

    restart() {
        this.arr = [];
        return "The game has been restarted!";
    }
}

export default CityGame;
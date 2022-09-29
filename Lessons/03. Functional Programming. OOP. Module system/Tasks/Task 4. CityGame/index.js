class CityGame {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.array = [];
        this.City = '';
        this.flag = false;
        this.count = 1;
    }

    play(City) {
        if (!this.flag) {
            this.array.push(City);
            this.flag = true;
            this.count++;
            return this.array;
        }

        this.count++;
        let WhoWon;
        if (this.count % 2 === 1) {
            WhoWon = this.player1
        } else {
            WhoWon = this.player2
        }
        if (City.slice(0, 1).toUpperCase() === this.array[this.array.length - 1].slice(-1).toUpperCase()) {
            this.array.push(City)
            return this.array
        } else {
            return 'Game over! The winner is ' + WhoWon
        }
    }

    restart() {
        this.array = []
        this.flag = false;
        return 'The game has been restarted!'
    }
}

export default CityGame;
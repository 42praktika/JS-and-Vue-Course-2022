import CityGame from './index';

describe('03.c.4 CityGame', () => {
    it('03.c.4.1 works correct', () => {
        const game = new CityGame('Max', 'Lewis');

        const roundOne = game.play('Kazan');
        expect(roundOne).toEqual([ 'Kazan' ]);

        const roundTwo = game.play('Novgorod');
        expect(roundTwo).toEqual([ 'Kazan', 'Novgorod' ]);

        const roundThree = game.play('Denver');
        expect(roundThree).toEqual([ 'Kazan', 'Novgorod', 'Denver' ]);

        const roundFour = game.play('Paris');
        expect(roundFour).toEqual('Game over! The winner is Max');

        const resetGame = game.restart();
        expect(resetGame).toEqual('The game has been restarted!');

        const roundFive = game.play('Prague');
        expect(roundFive).toEqual([ 'Prague' ]);

        const roundSix = game.play('Edinburgh');
        expect(roundSix).toEqual([ 'Prague', 'Edinburgh' ]);

        const roundSeven = game.play('Kioto');
        expect(roundSeven).toEqual('Game over! The winner is Lewis');
    });
});

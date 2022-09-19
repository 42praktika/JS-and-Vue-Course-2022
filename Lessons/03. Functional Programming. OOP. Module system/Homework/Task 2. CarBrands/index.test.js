import BugattiBrand from './src/bugatti';
import LadaBrand from './src/lada';

describe('03.h.2 CarBrands', () => {
    it('03.h.2.1 works correct', () => {
        const Veuron = new BugattiBrand('Veuron', 1001, 2.5, 3);
        const Chiron = new BugattiBrand('Chiron', 1500, 2.3, 5);

        const Vesta = new LadaBrand('Vesta', 75, 12.5, 'Kazan');
        const Devyatka = new LadaBrand('Devyatka', 70, 15, 'Tolyatti');


        const isVeuronExpensive = Veuron.getIsExpensive();
        expect(isVeuronExpensive).toBe(true);

        const devyatkaLocation = Devyatka.getLocation();
        expect(devyatkaLocation).toBe('Lada Devyatka is located in Tolyatti');

        const vestaIsRunningDrag = Vesta.runDrag(14.5);
        expect(vestaIsRunningDrag).toBe('Lada Vesta runs drag for 14.5 seconds');

        const chironIsRunningDrag = Chiron.runDrag(6.1);
        expect(chironIsRunningDrag).toBe('Bugatti Chiron runs drag for 6.1 seconds');

        const chironVSDevyatka = Chiron.getWhoIsFaster(Devyatka);
        expect(chironVSDevyatka).toBe('Bugatti Chiron is faster for 12.7 seconds');
    });
});

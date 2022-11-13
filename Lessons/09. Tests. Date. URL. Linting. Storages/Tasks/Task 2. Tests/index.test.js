import getIsFirstArrayCooler from './index';
import expect from "expect";

describe('09.c.2 getIsFirstArrayCooler', () => {
    // Начало
    let numsOne = [];
    let numsTwo = [9,8,7];
    let numsThree = [9,0,7];
    let numsFour = [9,7];
    let numsSix = [6,5,4]
    let numsSeven= [8,7,9]

    it('c.8.2.1. false if one of the arrays is empty', () => {
        expect(getIsFirstArrayCooler(numsOne,numsTwo)).toBe(false);
    });
    it('c.8.2.2. false if the arrays are different lengths', () => {
        expect(getIsFirstArrayCooler(numsTwo,numsFour)).toBe(false);
    });
    it('c.8.2.3. true if the arrays have same values in different order,the first greater', () => {
        expect(getIsFirstArrayCooler(numsTwo,numsSeven)).toBe(true);
    });
    it('c.8.2.4. true if the values in the first array are greater ', () => {
        expect(getIsFirstArrayCooler(numsThree,numsSix)).toBe(true);
    });
    it('c.8.2.4. false if the values in the second array are greater ', () => {
        expect(getIsFirstArrayCooler(numsSix,numsThree)).toBe(false);
    });
    it('c.8.2.4. false if the arrays are the same ', () => {
        expect(getIsFirstArrayCooler(numsSeven,numsSeven)).toBe(false);
    });
    it('c.8.2.4. true if the first values are the same', () => {
        expect(getIsFirstArrayCooler(numsTwo,numsThree)).toBe(true);
    });

    // Конец
});

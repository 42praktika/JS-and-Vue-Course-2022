import getTextFromUrl from './index';

describe('09.h.2 getTextFromUrl', () => {
    it('09.h.2.1 hey i just met you', () => {
        const text = getTextFromUrl('https://www.facebook.com/?text=Hey&coma=&text=I&text=just&text=met&text=you&text=and&text=this&text=is&text=crazy');
        expect(text).toBe(' Hey, I just met you and this is crazy');
    });

    it('09.h.2.2 yesterday', () => {
        const text = getTextFromUrl('https://www.google.com/?text=Yesterday&dot=&text=All&text=my&text=troubles&text=seemed&text=so&text=far&text=away&dot=&text=Now&text=it&text=looks&text=as&text=though&text=they&apostrophe=&text=re&text=here&text=to&text=stay&dot=&text=Oh&coma=&text=I&text=believe&text=in&text=yesterday');
        expect(text).toBe(" Yesterday. All my troubles seemed so far away. Now it looks as though they're here to stay. Oh, I believe in yesterday");
    });

    it('09.h.2.3 fix you', () => {
        const text = getTextFromUrl('https://www.itis.com/?text=Lights&text=will&text=guide&text=you&text=home&dot=&text=And&text=ignite&text=your&text=bones&dot=&text=And&text=I&text=will&text=try&text=to&text=fix&text=you');
        expect(text).toBe(" Lights will guide you home. And ignite your bones. And I will try to fix you");
    });
});

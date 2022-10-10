/**
 * @jest-environment jsdom
 */
import updateProgress from './index';

describe('06.c.1 updateProgress', () => {
    document.body.innerHTML = '<div class="main">\n' +
        '            <div class="progress">\n' +
        '                <div\n' +
        '                    class="progress-bar progress-bar-striped progress-bar-animated bg-info"\n' +
        '                    role="progressbar"\n' +
        '                    style="width: 0"\n' +
        '                ></div>\n' +
        '            </div>\n' +
        '            <button class="button-increase">\n' +
        '                Увеличить\n' +
        '            </button>\n' +
        '            <button class="button-decrease">\n' +
        '                Уменьшить\n' +
        '            </button>\n' +
        '        </div>';

    updateProgress(4, 11);

    const increaseButton = document.querySelector('.button-increase');
    const decreaseButton = document.querySelector('.button-decrease');
    const progressBar = document.querySelector('.progress-bar');

    it('06.c.1.1 default value is correct', () => {
        const progressStyle = progressBar.getAttribute('style');
        expect(progressStyle).toMatch(/width: 4%/);
    });


    it('06.c.1.2 press increase button five times', () => {
        for (let i = 0; i < 5; i += 1) {
            increaseButton.click();
        }
        const progressStyle = progressBar.getAttribute('style');
        expect(progressStyle).toMatch(/width: 59%/);
    });

    it('06.c.1.3 press increase button six more times', () => {
        for (let i = 0; i < 6; i += 1) {
            increaseButton.click();
        }
        const progressStyle = progressBar.getAttribute('style');
        expect(progressStyle).toMatch(/width: 100%/);
    });

    it('06.c.1.4 press decrease button two times', () => {
        decreaseButton.click();
        decreaseButton.click();
        const progressStyle = progressBar.getAttribute('style');
        expect(progressStyle).toMatch(/width: 78%/);
    });

    it('06.c.1.5 press decrease button twenty more times', () => {
        for (let i = 0; i < 20; i += 1) {
            decreaseButton.click();
        }
        const progressStyle = progressBar.getAttribute('style');
        expect(progressStyle).toMatch(/width: 0%/);
    });
});

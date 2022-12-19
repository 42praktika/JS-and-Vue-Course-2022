import { setGenshinData } from './apis/setData.js';

export const genshinRegions = () => {

    const content = document.querySelectorAll('.modal-content');
    const characterDiv = document.createElement('div');
    characterDiv.classList = 'character';
    const characterSelect = document.createElement('select');
    characterSelect.classList = 'character-select';
    characterSelect.ariaValueText= 'Choose character : ';

    const characterName = ['Albedo', 'Amber','Barbara', 'Beidou', 'Bennett', 'Chongyun', 'Diluc', 'Diona', 'Eula', 'Fischl', 'Ganyu',
        'Jean', 'Kaeya', 'Kazuha', 'Keqing', 'Klee', 'Lisa', 'Mona', 'Ningguang', 'Noelle', 'Qiqi', 'Razor', 'Rosaria', 'Sucrose',
        'Tartaglia', 'Tighnari', 'Venti', 'Xiangling', 'Xiao', 'Xingqiu', 'Xinyan', 'Yanfei', 'Yelan', 'Zhongli'];
    
    let i = 0;
    characterName.forEach(() => {
        const option = document.createElement('option');
        option.value = characterName[i];
        option.textContent = characterName[i];
        characterSelect.append(option);
        i++;
    });

    let info = document.createElement('div');
    info.classList = 'info-about-char';
    info.style.flexDirection = 'column';
    let thCell = document.createElement('div');
    thCell.classList = 'cell';
    characterDiv.append(characterSelect);
    content[1].append(characterDiv);
    const loader = document.createElement('div');
    loader.classList = 'loading';
    characterDiv.append(loader);
    characterDiv.append(info);
    

    characterSelect.addEventListener('change', () => {
        let index = characterSelect.selectedIndex;
        let character = characterSelect[index].value;
        displayLoading();
        setGenshinData(character);
    });
    
    function displayLoading() {
        loader.classList.add('display');
        setTimeout(() => {
            loader.classList.remove('display');
        }, 100000);
    }
};
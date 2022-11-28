export const genshinRegions = () => {
    // const content = document.querySelectorAll('.modal-content');

    // const region = document.createElement('div');
    // region.classList = 'region';
    // const regionSelect = document.createElement('select');
    // regionSelect.classList = 'region-select';
    // regionSelect.textContent = 'Select region: ';
    // const containerInfo = document.createElement('table');

    // content[1].append(regionSelect);
    
    // const API_REGION = 'https://api.genshin.dev/nations';
    
    // async function fetchData(url) {
    //     return fetch(url)
    //             .then(response =>
    //                 map(function(region) {
    //                     let option = document.createElement('option');
    //                     option.textContent = fetch(API_REGION + '$/{region}');
        
    //                 }));
    // }
    
    // fetchData(API_REGION).then(arr => console.log(arr));

    const content = document.querySelectorAll('.modal-content');
    const characterDiv = document.createElement('div');
    characterDiv.classList = 'character'
    const characterSelect = document.createElement('select');
    characterSelect.classList = 'character-select';
    characterSelect.ariaValueText= 'Choose character : ';

    const characterName = ['Albedo', 'Amber', 'Barbara', 'Beidou', 'Bennett', 'Chongyun', 'Diluc', 'Diona', 'Eula', 'Fischl', 'Ganyu',
        'Hutao', 'Jean', 'Kaeya', 'Kazuha', 'Keqing', 'Klee', 'Lisa', 'Mona', 'Ningguang', 'Noelle', 'Qiqi', 'Razor', 'Rosaria', 'Sucrose',
        'Tartaglia', 'Venti', 'Xiangling', 'Xiao', 'Xingqiu', 'Xinyan', 'Yanfei', 'Zhongli']
    
    let i = 0;
    characterName.forEach((name) => {
        const option = document.createElement('option');
        option.value = characterName[i];
        option.textContent = characterName[i];
        characterSelect.append(option);
        i++;
    })

    let info = document.createElement('div');
    info.classList = 'info-about-char';
    info.style.flexDirection = 'column';
    let thCell = document.createElement('div');
    thCell.classList = 'cell';
    let thDescription = document.createElement('div');
    thDescription.classList = 'cell';
    characterDiv.append(characterSelect);
    content[1].append(characterDiv);
    const loader = document.createElement("div");
    loader.classList = 'loading';
    characterDiv.append(loader);
    
    function displayLoading() {
        loader.classList.add("display");
        setTimeout(() => {
            loader.classList.remove("display");
        }, 100000);
    }
    
    function hideLoading() {
        loader.classList.remove("display");
    }

    characterSelect.addEventListener('change', () => {

        let index = characterSelect.selectedIndex;
        let character = characterSelect[index].value;

        characterDiv.append(info);
        displayLoading();

        fetch('https://genshin-app-api.herokuapp.com/api/characters/info/' + character + '?infoDataSize=minimal')
            .then(response => response.json())
            .then(data => {
                hideLoading();
                thCell.append("Name: " + data.payload.character.name + ", Element: " + data.payload.character.element + ", Nation: " + data.payload.character.nation);
                const urlImg = data.payload.character.cardImageURL;
                const image = document.createElement('img');
                image.src = `${urlImg}`;
                image.style.height = '270px';
                image.style.margin = 'auto';
                image.style.justifyContent = 'center';
                thDescription.append(data.payload.character.description);

                info.innerHTML = '';
                info.append(thCell);
                info.append(image);
                info.append(thDescription)
            });
        thCell.innerHTML = '';
        thDescription.innerHTML = '';
    });
    
}
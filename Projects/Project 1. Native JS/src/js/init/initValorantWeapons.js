import { MODAL_TYPES as modalTypes } from '../consts';

const weapons = [
    { uuid: '63e6c2b6-4a8e-869c-3d4c-e38355226584', displayName: 'Odin' },
    { uuid: '55d8a0f4-4274-ca67-fe2c-06ab45efdf58', displayName: 'Ares' },
    { uuid: '9c82e19d-4575-0200-1a81-3eacf00cf872', displayName: 'Vandal' },
    { uuid: 'ae3de142-4d85-2547-dd26-4e90bed35cf7', displayName: 'Bulldog' },
    { uuid: 'ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a', displayName: 'Phantom' },
    { uuid: 'ec845bf4-4f79-ddda-a3da-0db3774b2794', displayName: 'Judge' },
    { uuid: '910be174-449b-c412-ab22-d0873436b21b', displayName: 'Bucky' },
    { uuid: '44d4e95c-4157-0037-81b2-17841bf2e8e3', displayName: 'Frenzy' },
    { uuid: '29a0cfab-485b-f5d5-779a-b59f85e204a8', displayName: 'Classic' },
    { uuid: '1baa85b4-4c70-1284-64bb-6481dfc3bb4e', displayName: 'Ghost' },
    { uuid: 'e336c6b8-418d-9340-d77f-7a9e4cfe0702', displayName: 'Sheriff' },
    { uuid: '42da8ccc-40d5-affc-beec-15aa47b42eda', displayName: 'Shorty' },
    { uuid: 'a03b24d3-4319-996d-0f8c-94bbfba1dfc7', displayName: 'Operator' },
    { uuid: '4ade7faa-4cf1-8376-95ef-39884480959b', displayName: 'Guardian' },
    { uuid: 'c4883e50-4494-202c-3ec3-6b8a9284f00b', displayName: 'Marshal' },
    { uuid: '462080d1-4035-2937-7c09-27aa2a5c27a7', displayName: 'Spectre' },
    { uuid: 'f7e1b454-4ad4-1063-ec0a-159e56b58941', displayName: 'Stinger' },
];

const infoItems = [
    'Name',
    'Category',
    'Cost',
    'Head damage',
    'Body damage',
    'Leg damage',
    'Equip time',
    'Reload time',
    'Magazine size',
    'Run speed multiplier',
];

export const initValorantWeapons = () => {
    const type = modalTypes.valorantWeapons;
    const container = document.querySelector(`.modal-container[data-type="${type}"]`);
    const valorantWeaponsContainer = document.createElement('div');
    valorantWeaponsContainer.className = 'valorant-weapons__container';
    container.append(valorantWeaponsContainer);

    const leftSection = document.createElement('div');
    valorantWeaponsContainer.append(leftSection);
    const selectTitle = document.createElement('p');
    selectTitle.textContent = 'Choose weapon';
    leftSection.append(selectTitle);
    const weaponSelect = document.createElement('select');
    weaponSelect.className = 'valorant-weapons__select';
    leftSection.append(weaponSelect);
    weapons.forEach((element) => {
        const weaponOption = document.createElement('option');
        weaponOption.textContent = element.displayName;
        weaponOption.value = element.uuid;
        weaponSelect.append(weaponOption);
    });

    const rightSection = document.createElement('div');
    valorantWeaponsContainer.append(rightSection);
    const weaponInfo = document.createElement('div');
    weaponInfo.className = 'weapon-info';
    rightSection.append(weaponInfo);
    const weaponImage = document.createElement('img');
    weaponImage.className = 'weapon-image';
    weaponInfo.append(weaponImage);
    infoItems.forEach((element) => {
        const infoItem = document.createElement('p');
        infoItem.className = 'info__item';
        infoItem.textContent = `${element}: `;
        const infoItemData = document.createElement('span');
        infoItemData.className = 'item__data';
        infoItem.append(infoItemData);
        weaponInfo.append(infoItem);
    });
};

const URL = 'https://valorant-api.com/v1/weapons/';

export const getValorantWeapon = (uuid) => fetch(URL + uuid)
    .then((response) => response.json())
    .catch((e) => alert(e));

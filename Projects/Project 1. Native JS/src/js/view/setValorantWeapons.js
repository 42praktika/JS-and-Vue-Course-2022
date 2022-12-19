export const setValorantWeapons = (data) => {
    const weaponImage = document.querySelector('.weapon-image');
    weaponImage.src = data.displayIcon;
    console.log(data);
    const itemDatas = document.querySelectorAll('.item__data');
    itemDatas[0].textContent = data.displayName;
    const shopData = data.shopData;
    itemDatas[1].textContent = shopData.category;
    itemDatas[2].textContent = shopData.cost;
    const weaponStats = data.weaponStats;
    const damage = weaponStats.damageRanges[0];
    itemDatas[3].textContent = damage.headDamage;
    itemDatas[4].textContent = damage.bodyDamage;
    itemDatas[5].textContent = damage.legDamage;
    itemDatas[6].textContent = weaponStats.equipTimeSeconds;
    itemDatas[7].textContent = weaponStats.reloadTimeSeconds;
    itemDatas[8].textContent = weaponStats.magazineSize;
    itemDatas[9].textContent = weaponStats.runSpeedMultiplier;
};
const isThreePower = (num) => {
    // Начало
    let a =3 
    let p = Math.log10(num)/ Math.log10(a);
    return (p - Math.floor(p) == 0) 
    // Конец
};

export default isThreePower;
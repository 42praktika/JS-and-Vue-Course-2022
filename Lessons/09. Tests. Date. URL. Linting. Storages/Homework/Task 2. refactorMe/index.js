const getTextFromUrl = (url) => {
    // Начало
    const o = new URL(url);
    var par = o.searchParams;
    var str = par.toString();
    let rep_text = str.replaceAll('text=', ' ');
    let rep_c = rep_text.replaceAll('coma', ',');
    let rep_d = rep_c.replaceAll('dot', '.');
    let space = rep_d.replaceAll('space', ' ');
    let sc = space.replaceAll('semicolon', ';');
    var apth = sc.replaceAll('apostrophe', "'");
    var ampRepl = apth.replaceAll('&', '');
    var ravno = ampRepl.replaceAll('=', '');
    var deleteProbel = ravno.replaceAll("' ", "'");
    return deleteProbel;
    // Конец
};

export default getTextFromUrl;
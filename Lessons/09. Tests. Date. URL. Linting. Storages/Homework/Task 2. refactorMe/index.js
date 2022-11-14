const applyFunctions=(string)=>{
    return string.replaceAll('text=', ' ')
        .replaceAll('coma', ',')
        .replaceAll('dot', '.')
        .replaceAll('space', ' ')
        .replaceAll('semicolon', ';')
        .replaceAll('apostrophe', "'")
        .replaceAll('&', '')
        .replaceAll('=', '')
        .replaceAll("' ", "'");
}



const getTextFromUrl = (url) => {
    const urlString=new URL(url).searchParams.toString()
    return applyFunctions(urlString)
};



export default getTextFromUrl;
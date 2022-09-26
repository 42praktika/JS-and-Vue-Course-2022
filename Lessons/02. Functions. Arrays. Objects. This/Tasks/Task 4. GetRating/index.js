const getRating = (object) => {
    // Начало
    let {likes,dislikes} = object;
    return likes - dislikes;
    // Конец
};

export default getRating;
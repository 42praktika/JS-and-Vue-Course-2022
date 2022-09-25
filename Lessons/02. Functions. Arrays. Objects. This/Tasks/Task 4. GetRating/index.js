const getRating = (object) => {
    // Начало
    const {likes, dislikes} = object;
    return likes - dislikes
    // Конец
};

export default getRating;
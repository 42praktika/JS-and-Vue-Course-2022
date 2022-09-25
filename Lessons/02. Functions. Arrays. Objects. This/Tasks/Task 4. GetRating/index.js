const getRating = (object) => {
    // Начало
    return object.likes - object.dislikes;
    // Конец
};

export default getRating;
const getRating = (object) => {
    // Начало
    const likes = object.likes;
    const dislikes = object.dislikes;
    return (likes - dislikes);
    // Конец
};

export default getRating;
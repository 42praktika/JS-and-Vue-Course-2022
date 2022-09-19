const getRating = (object) => {
    let likes = object.likes
    let dislikes = object.dislikes
    return likes - dislikes
};

export default getRating;
const getRating = (object) => {
    let {likes, dislikes} = object;
    return likes - dislikes;
};

export default getRating;
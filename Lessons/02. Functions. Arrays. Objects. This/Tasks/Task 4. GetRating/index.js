const getRating = (object) => {
   const [likes,dislikes]=[object.likes,object.dislikes]
    return likes-dislikes
};

export default getRating;
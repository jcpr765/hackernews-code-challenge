//Get Story
export const setStory = (author, descendants, children, score, time, title, url) => {
    return {
        type: 'SET_STORY',
        author,
        descendants,
        children,
        score,
        time,
        title,
        url
    }
}

//Get Comments
export const addComment = (author, id, children, parent, text, time) => {
    return {
        type: 'ADD_COMMENT',
        author,
        id,
        children,
        parent,
        text,
        time
    };
}

// export const toggleVisibility = (id, children) => {
//     return {
//         type: 'TOGGLE_VISIBILITY',
//         id,
//         children
//     }
// }


//Set Story
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

//Add Comments
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

//Set Comments
export const setComments = (arr) => {
    return {
        type: 'SET_COMMENTS',
        arr
    };
}

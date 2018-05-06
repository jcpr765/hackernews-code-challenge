
const comments = (state=[], action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return {
                ...state,
                [action.id]: {
                    author: action.author,
                    children: action.children,
                    parent: action.parent,
                    text: action.text,
                    time: action.time
                },
            };
        default:
            return state;
    }
}

export default comments;
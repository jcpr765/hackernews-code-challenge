
const comments = (state=[], action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [
                ...state,
                {
                    id: action.id,
                    author: action.author,
                    children: action.children,
                    parent: action.parent,
                    text: action.text,
                    time: action.time
                },
            ];
        case 'SET_COMMENTS':
            return action.arr;
        default:
            return state;
    }
}
export default comments;
// const addComments = (state=[], action) => {
//     switch(action.type){
//         case 'ADD_COMMENT':
//             return 
//         default:
//             return state;
//     }
// }

// const addSubComments = (state=[], action) => {
//     switch(action.type){
//         case 'ADD_COMMENT':
//             return {

//             }
//         default:
//             return state;
//     }
// }

// const comments = (state=[], action) => {
    
//     if(action.parent === process.env('STORY_ID')){
//         return {
//             ...state,
//             comments: {
//                 ...state.comments,
//                 [action.id]: addComments(state, action)
//             }
//         };
//     }
//     else{
//         return {
//             ...state,
//             comments: {
//                 ...state.comments,

//             }
//         }
//     }
// }


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
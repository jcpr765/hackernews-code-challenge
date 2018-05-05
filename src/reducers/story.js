const story = (state=[], action) =>{
    switch(action.type){
        case 'SET_STORY':
            console.log("Set story is running");
            return {
                ...state.story,
                author: action.author,
                descendants: action.descendants,
                children: action.children,
                score: action.score,
                time: action.time,
                title: action.title,
                url: action.url,
            };
        default:
            return state;
    }
}

export default story;
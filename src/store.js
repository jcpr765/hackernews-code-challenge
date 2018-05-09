import {createStore} from 'redux';
import rootReducer from './reducers/index';


const defaultState = {
    story: {
        author: "",
        descendants: 0,
        children: [],
        score: 0,
        time: 0,
        title: "",
        url: "",
    },
    comments: []
};
const store = createStore(rootReducer, defaultState);

export default store;
import {combineReducers} from 'redux';
import story from './story';
import comments from './comments';

const rootReducer = combineReducers({story, comments});

export default rootReducer;
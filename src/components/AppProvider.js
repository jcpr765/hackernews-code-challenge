import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import App from './App';

function mapStateToProps(state) {
    return {
        story: state.story,
        comments: state.comments
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);
}

const AppProvider = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppProvider;
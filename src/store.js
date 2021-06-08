import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk'; //просто попробовать

const logMiddleware = ({getState}) => (next) => (action) => { //Абсолютно бестолковый Middleware
    console.log(action.type, getState());
    return next(action);
}

const delayedActionCreator = (timeout) => (dispatch) => { //Абсолютно бестолковый экшен
    setTimeout(() => dispatch({
        type: 'DELAYED_ACTION'
    }), timeout)
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware, logMiddleware));

store.dispatch(delayedActionCreator(3000));

export default store;
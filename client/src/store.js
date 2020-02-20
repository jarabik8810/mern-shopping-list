import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const enchancers = [applyMiddleware(...middleware)]
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    enchancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())
}
const store = createStore(rootReducer, initialState, compose(...enchancers));

export default store;
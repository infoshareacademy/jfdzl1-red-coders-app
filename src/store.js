import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import filterReducer from './reducers/filter';
import uiReducer from './UI/logic';
import attractionsReducer, {init as initAttractionListening} from './state/attractions';
import attractionReducer from './Attraction/state'

const reducer = combineReducers({
    filter: filterReducer,
    ui: uiReducer,
    routing: routerReducer,
    attractions: attractionsReducer,
    attraction: attractionReducer
});

const history = createHistory();

const store = createStore(reducer, undefined, compose(
    applyMiddleware(thunk, routerMiddleware(history)),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
));

store.dispatch(initAttractionListening())

export {history, store};

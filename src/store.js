import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import filterReducer from './reducers/filter';

const reducer = combineReducers({
  filter: filterReducer,
  routing: routerReducer,
});

const history = createHistory();

const store = createStore(reducer, undefined, compose(
  applyMiddleware(thunk, routerMiddleware(history)),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));

export { history, store };

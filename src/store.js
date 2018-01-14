import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import filterReducer from './reducers/filter';
import uiReducer from './UI/logic';

const reducer = combineReducers({
  filter: filterReducer,
  ui: uiReducer,
  routing: routerReducer,
});

const history = createHistory();

const store = createStore(reducer, undefined, compose(
  applyMiddleware(thunk, routerMiddleware(history)),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));

export { history, store };

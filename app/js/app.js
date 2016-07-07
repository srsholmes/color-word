import 'whatwg-fetch';
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import thunk from './middleware/thunk';
import reducer from './reducers';
import createLogger from 'redux-logger';


const initialState = window.__INITIAL_STATE__

const setUpStore = (initialState) => {
  const store = createStore(reducer, initialState, compose(
    applyMiddleware(createLogger(), thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  if (module.onReload) {
    module.onReload(() => {
      const nextReducer = require('./reducers');
      store.replaceReducer(nextReducer);
      return true
    });
  }

  return store;
}


const store = setUpStore(initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('[app]')
);

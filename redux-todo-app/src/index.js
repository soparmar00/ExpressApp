import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { createStore, applyMiddleware  } from 'redux';
import rootReducer from './Reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

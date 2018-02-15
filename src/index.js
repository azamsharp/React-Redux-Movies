import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from './components/Home'
import AddMovie from './components/AddMovie'
import  ListMovies  from './components/ListMovies'
import { BaseLayout } from './components/BaseLayout'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './store/reducer'

const store = createStore(
  reducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(

  <BrowserRouter>
  <Provider store = {store}>
  <BaseLayout>
    <Switch>
      <Route path = '/add-movie' component = { AddMovie } />
        <Route path = '/list-all-movies' component = { ListMovies } />
      <Route path = '/' component = {Home} />
    </Switch>
  </BaseLayout>
  </Provider>
  </BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();

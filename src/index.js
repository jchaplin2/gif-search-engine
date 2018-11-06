import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from './components/Main';
import GifList from './containers/GifList';
import GifFavorites from './containers/GifFavorites';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
  			<Switch>
			    <Route path="/favorites" component={GifFavorites} />
	    		<Route path="/" component={Main} />
    		</Switch>
    	</div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
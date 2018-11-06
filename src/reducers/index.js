import { combineReducers } from 'redux';

import ReducerGifs from './ReducerGifs';
import ReducerFavorites from './ReducerFavorites';
//combineReducers needs to be called to make use of all reducers.

const rootReducer = combineReducers({
  gifs: ReducerGifs,
  favorites: ReducerFavorites
});

export default rootReducer;
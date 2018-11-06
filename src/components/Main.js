import React, { Component } from 'react';

import SearchBar from '../containers/SearchBar';
import GifList from '../containers/GifList';

export default class Main extends Component {
  render() {
    return (
    	<div>
 	    	<SearchBar />
 	    	<GifList />
    	</div>
    );
  }
}

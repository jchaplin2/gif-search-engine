import React, {Component} from 'react';
import GifListItem from './GifListItem';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class GifFavorites extends Component {
	render() {
		if(!this.props.favorites)
			return null;

		const gifArray = this.props.favorites;

		return (
			<div>
				<Link className="btn btn-primary" to="/">
					Back to Search Page
				</Link>
				<div className="image-list">
					{gifArray.map(function(item, resultIndex) {
						return <GifListItem key={item.id} gifData={item} index={resultIndex} favorited={true} />;
					})}
				</div>
			</div>
		);
	}
}

function mapStateToProps( state ) {
	return { favorites: state.favorites };
}

export default connect(mapStateToProps)(GifFavorites);
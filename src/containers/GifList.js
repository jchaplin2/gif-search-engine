import React, {Component} from 'react';
import GifListItem from './GifListItem';
import {connect} from 'react-redux';


class GifList extends Component {
	render() {
		if(!this.props.gifs)
			return null;

		const gifArray = this.props.gifs;

		return (
				<div className="image-list">
					{gifArray.map(function(item, resultIndex) {
						return <GifListItem key={item.id} gifData={item} index={resultIndex} />;
					})}
				</div>
		);
	}
}

function mapStateToProps( state ) {
	return { gifs: state.gifs };
}

export default connect(mapStateToProps)(GifList);
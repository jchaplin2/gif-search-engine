import React, {Component} from 'react';
import { connect } from 'react-redux';
import { handleFavorite } from '../actions/index';
import { bindActionCreators } from 'redux';

class GifListItem extends Component {
    constructor(props) {
        super(props);
        let isFavorited = this.props.favorited ? this.props.favorited : false;
        this.state = { favorited: isFavorited };
        this.favoriteGif = this.favoriteGif.bind(this);
		this.unfavoriteGif = this.unfavoriteGif.bind(this);
    }

    favoriteGif() {
        this.setState({ favorited: true });
        this.props.handleFavorite(this.props.gifData);
    }

    unfavoriteGif() {
        this.setState({ favorited: false });
        this.props.handleFavorite(this.props.gifData);
    }

    renderFavoriteHeart() {
        if (this.state.favorited) {
            return (
            	<div className="favorite-icon" >
            		<i className="fa fa-star white-font" onClick={this.unfavoriteGif} />
            	</div>	
            );
        }

        return (
        	<div className="favorite-icon" >
        		<i className="fa fa-star-o white-font" onClick={this.favoriteGif} />
        	</div>
        );
    };

    render() {
        const { images } = this.props.gifData;
		const { url } = images.original_still;
		const { id } = this.props.gifData;


		return (
			<div key={id} className="image-list-item">
				{this.renderFavoriteHeart()}
				<img src={url} className="image-thumbnail" alt=""/>
			</div>
		);

    }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({handleFavorite : handleFavorite}, dispatch);
}

export default connect(null, mapDispatchToProps)(GifListItem);
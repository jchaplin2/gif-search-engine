import { FETCH_GIFS } from '../actions/index';

export default function(state = [], action) {

	switch(action.type) {
		case FETCH_GIFS :
			return action.payload.data.data;
	}

	return state;
}
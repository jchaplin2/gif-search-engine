import { SELECT_FAVORITE } from '../actions/index';

export default function(state = [], action) {
	switch(action.type) {
		case SELECT_FAVORITE:
			return [action.payload, ...state]
	}

	//if this reducer doesn't care about current state, just pass the action through.
	return state;
}
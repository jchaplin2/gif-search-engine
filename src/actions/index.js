import axios from 'axios';

const API_KEY = 'GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw';
const ROOT_URL = `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}`;
export const FETCH_GIFS = 'FETCH_GIFS';

export function fetchGifs(term) {
	const url = `${ROOT_URL}&q=${term}`;
	const request = axios.get(url);

	return {
		type: FETCH_GIFS,
		payload: request
	};
}

export const SELECT_FAVORITE = 'SELECT_FAVORITE';

export function handleFavorite(favoritePic) {

	return {
			type: SELECT_FAVORITE,
			payload: favoritePic
	};
}
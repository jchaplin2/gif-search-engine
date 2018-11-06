# Gif Search Engine

### Getting Started

1. cd gif-search-engine
2. npm install
3. npm start
4. Go to http://localhost:8080/ in your browser

### Compatible Browsers
- Firefox 63
- Chrome 69-70
- This application is not Internet Explorer or Edge Compatible.

### Next Steps
	1. Use of  window.localStorage (or a database) to save user selections between browser sessions.
	2. Usage of redux state for favorites so that previously favorited gifs appear selected in search results. I could do this by adding isFavorited boolean to the gifs state array.
	3. Usage of bem and sass because I'd expect this application to grow pretty quickly, and I'd want a way to maintain my css.
	4. Separate out action creators (from index.js) into separate files.
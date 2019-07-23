(function() {
	// css
	let css = `
        html {
            -webkit-filter: invert(90%);
            -moz-filter: invert(90%);
            -o-filter: invert(90%);
            -ms-filter: invert(90%);
        }`;
	const head = document.getElementsByTagName('head')[0],
		style = document.createElement('style');

	// style type
	style.type = 'text/css';
	style.id = 'darkenInvert';

	if (style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(document.createTextNode(css));
	}

	head.appendChild(style);
})();

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

	if (!window.counter) {
		window.counter = 1;
	} else {
		window.counter++;
		if (window.counter % 2 == 0) {
			css = `
                html {
                    -webkit-filter: invert(0%);
                    -moz-filter: invert(0%);
                    -o-filter: invert(0%);
                    -ms-filter: invert(0%); 
                }
            `;
		}
	}

	if (style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(document.createTextNode(css));
	}

	head.appendChild(style);
})();

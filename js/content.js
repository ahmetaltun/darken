(function() {
	// get value from localstorage
	const darkenState = window.localStorage.getItem('darkenState');
	if (darkenState === 'true') {
		// css
		const css = `
			html {
				-webkit-filter: invert(90%);
				-moz-filter: invert(90%);
				-o-filter: invert(90%);
				-ms-filter: invert(90%);
			}
			body {
				background: rgb(50, 50, 50) !important;
				background-color: rgb(50, 50, 50) !important;
			}`;
		// get head and create style
		const head = document.getElementsByTagName('head')[0],
			style = document.createElement('style');

		// style attr
		style.type = 'text/css';
		style.id = 'darkenInvert';

		if (style.styleSheet) {
			style.styleSheet.cssText = css;
		} else {
			style.appendChild(document.createTextNode(css));
		}

		// add style
		head.appendChild(style);
	}
})();

function changeCss() {
	// get value from localstorage and head
	const darkenState = window.localStorage.getItem('darkenState'),
		head = document.getElementsByTagName('head')[0];
	// check state
	if (darkenState === 'true') {
		// set css
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

		// create style
		const style = document.createElement('style');

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
	} else {
		// get style
		const darkenInvert = document.getElementById('darkenInvert');
		// check style
		if (darkenInvert !== null) {
			// delete
			head.removeChild(darkenInvert);
		}
	}
}

export default changeCss;

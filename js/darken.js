// get css module
import changeCss from './darkenModule.js';
// get switch
const darkenSwitch = document.querySelector('#cbDarkenSwitch');
// switch event
darkenSwitch.addEventListener('change', e => {
	// set local storage for index.html
	window.localStorage.setItem('darkenState', e.target.checked);
	// call function
	chrome.tabs.query({ active: true }, function(tabs) {
		// get tab
		var tab = tabs[0];
		// set local storage
		// set local storage
		chrome.tabs.executeScript(tab.id, {
			code:
				'window.localStorage.setItem("darkenState", ' + e.target.checked + ')'
		});
		// call function
		chrome.tabs.executeScript(tab.id, {
			code: '(' + changeCss + ')();'
		});
	});
});

// load event
window.addEventListener('load', function() {
	// get state
	var darkenState = window.localStorage.getItem('darkenState');
	// check if null
	if (darkenState !== null) {
		// check true or false
		if (darkenState === 'true') {
			darkenSwitch.checked = true;
		} else {
			darkenSwitch.checked = false;
		}
	}
});

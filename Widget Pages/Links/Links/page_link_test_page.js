function goToLink (event, url) {
	if((event.type === 'click') || (event.type === 'keydown' && event.keyCode === 13)) {
		window.location.href = url;
		event.preventDefault();
		event.stopPropagation();
	}
}
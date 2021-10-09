const anim = lottie

anim.loadAnimation({
	container: document.querySelector('.galaxy'),
	renderer: 'svg',	
	loop: true,
	autoplay: true,
	path: './galaxy_desktop.json'
});

anim.loadAnimation({
	container: document.querySelector('.galaxy-mobile'),
	renderer: 'svg',	
	loop: true,
	autoplay: true,
	path: './galaxy_mobile.json'
});

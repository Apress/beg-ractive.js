var images = [
	{ src: './img/camera1.jpg', caption: 'Proin eget pretium neque. Pellentesque malesuada vestibulum aliquam' },
	{ src: './img/camera2.jpg', caption: 'Phasellus et dolor a nunc dignissim' },
	{ src: './img/camera3.jpg', caption: 'Mauris nunc ante ultrices ut' },
	{ src: './img/camera4.jpg', caption: 'Lorem ipsum dolor sit amet consectetur' },
	{ src: './img/camera5.jpg', caption: 'Aenean congue mauris rhoncus rhoncus aliquet massa ante' },
	{ src: './img/camera6.jpg', caption: 'Nunc in sapien non ipsum ultricies egestas' }
];

var Slideshow = Ractive.extend({
	template: '#slideshow',
	goto: function ( index ) {
		var images = this.get( 'images' );
		
		// handle wrap around
		var num = ( index + images.length ) % images.length;
		
		this.set( 'current', num );
	},
	data: function () {
		return { current: 0 }
	}
});

var slideshow = new Slideshow({
	target: '#container',
	data: {
	  images: images
	}
});
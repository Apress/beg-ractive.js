var ractive = new Ractive({
	target: '#container',
	template: '#template',
	data: {
		width: 30,
		height: 30,
		length: 50
	},
	computed: {
		volume: '${width}  * ${height} * ${length} / 1000'	
	}
});

ractive.observe( 'volume', function() {
	console.log("Volume level has changed!") 
});
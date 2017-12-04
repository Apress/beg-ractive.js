var ractive = new Ractive({
	target: '#container',
	template: '#template',
	data: {
		avsizes: [
  		{ name: 'A4', value: 6.96 },
  		{ name: '8 x 6 inch', value: 5.18 },
  		{ name: '10 x 8 inch', value: 9.88 }
		],
		size: 'A4'
	}
});
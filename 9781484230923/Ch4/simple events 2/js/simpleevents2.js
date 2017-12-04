var ractive = new Ractive({
	template: '#template',
	el: '#container'
}); 

ractive.on('submit', function(event) {
	this.set('submitted', this.get('val'))
	event.original.preventDefault()
})  
var ractive = new Ractive({
  template: '#template',
  el: '#container',
  data: {
  	visible: 1
  }
});   

ractive.on( 'show', function ( ctx, which ) {
	this.set( 'visible', null ).then( function () {
		ractive.set( 'visible', which );
	});
});  
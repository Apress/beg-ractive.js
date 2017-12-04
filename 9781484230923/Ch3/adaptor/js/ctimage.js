var sw;

var img = $("img"), swatches = vibrant.swatches(), p;
    
Ractive.adapt.VibrantImg = {
  filter: function ( object, keypath, ractive ) {
    return object instanceof img;
  },
  wrap: function ( ractive, object, keypath, prefixer ) {
    // Setup

          
    for ( var swatch in swatches ) {
      if (swatches.hasOwnProperty(swatch) && swatches[swatch]) {      
        swatches[swatch].getHex();
      }
    }

    return {
      teardown: function(){
        // Code executed on teardown.
      },
      get: function(){
        // Returns POJO version of your data backend.
        sw = swatches[index].getHex;
      },
      set: function(property, value){
        // Data setter for POJO property keypaths.
      },
      reset: function(value){
        // Data setter for POJO keypath.
      }
    }
  }
};

var ractive = new Ractive({
	target: '#container',
	template: '#template',
  adapt: [ 'VibrantImg' ],
	data: {
		vibrant: "#c68683",
		muted: "#8e647a",
		darkvibrant: "#0b0a19",
		darkmuted: "#2e2948", 
		lightvibrant: "#f9e9ce"
	}
});

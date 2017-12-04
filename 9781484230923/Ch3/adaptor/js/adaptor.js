var imgColor;
Ractive.adaptors.CTImg = {
  filter: function ( object ) {
    // Detect if the data is an image element
    return object instanceof HTMLImageElement;
  },
  wrap: function ( ractive, object, keypath, prefixer ) {
    // Set up color thief for this piece of data because it's an image
    var colorThief = new ColorThief();

    return {
      teardown: function(){
        colorThief.destroy();
      },
      get: function(){
        // Return the replacement data
        return colorThief.getColor(object);
      },
      set: function(property, value){
        // We're not setting to color thief, leave empty
      },
      reset: function(value){
        // Always replace the data when the data is changed
        return false;
      }
    }
  }
};

var ractive = new Ractive({
  target: '#container',
  template: '#template',
  adapt: [ 'CTImg' ],
  data: {
    dominant: null
  },
  onrender: function(){
    // set image on data. adaptor will capture it.
    this.set('dominant', this.find('#ctimage'))
  }
}); 
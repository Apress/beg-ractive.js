var updatedData = {
  "name": "Copenhagen, Denmark",
  "months": [
    { "high": 37 },
    { "high": 36 },
    { "high": 41 },
    { "high": 49 },
    { "high": 60 },
    { "high": 66 },
    { "high": 69 },
    { "high": 69 },
    { "high": 61 },
    { "high": 53 },
    { "high": 44 },
    { "high": 39 }
  ]
}

var ractive = new Ractive({
  template: '#template',
  el: '#container',
  data: {
    monthNames: [ 'J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D' ],
    cities: {
      "name": "Copenhagen, Denmark",
      "months": [
        { "high": 0 },
        { "high": 0 },
        { "high": 0 },
        { "high": 0 },
        { "high": 0 },
        { "high": 0 },
        { "high": 0 },
        { "high": 0 },
        { "high": 0 },
        { "high": 0 },
        { "high": 0 },
        { "high": 0 }
      ]
    },
    scale: function ( val ) {
      return 3 * Math.abs( val );
    }
  }
});  

ractive.animate( 'cities', updatedData, { duration: 500 });
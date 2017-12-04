var myChroma = function ( from, to ) {
  return chroma.scale([ from, to ]);
}

Ractive.interpolators.myChroma = myChroma;

var ractive = new Ractive({
  target: 'container',
  template: '#template',
  data: {
    bg: '#e7e7e7',
    fg: '#2a2a2a'
  }
});

setTimeout( changeColor, 500 );

function changeColor () {
  ractive.animate('bg', '#9f9f9f', {duration: 1500, interpolator: 'myChroma'});
  ractive.animate('fg', '#ffffff', {duration: 1500, interpolator: 'myChroma'});
}
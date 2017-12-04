var Ractive = new Ractive({
  el: '#container',
  template: '#template',
  data: {
    left: 0
  }
});

Ractive.animate('left', 400, {
  duration: 2000,
  step: function(t, v) {
    console.log('step', t, v);
  },
  complete: function(t, v) {
    console.log('complete', t, v);
  }
});

var ractive = new Ractive({
  template: '#template',
  el: '#container',
  data: { shown: true }
});   

setTimeout(function() {
   ractive.toggle('shown');
}, 2000);
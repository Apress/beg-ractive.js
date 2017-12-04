moment.tz.add('America/New_York|EST EDT|50 40|0101|1Lz50 1zb0 Op0');

var london = moment().format("H:mm");
var newYork = moment.tz(moment(), "America/New_York").format("H:mm");

var ractive = new Ractive({
  el: '#container',
  template: '#template',
  data: {
  	uk: london,
  	ny: newYork
  }
});
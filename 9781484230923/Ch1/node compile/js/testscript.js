var templates = {
  testtemplate: {"v":4,"t":[{"t":7,"e":"p","f":["Hello, ",{"t":2,"r":"name"}," - you are now using Ractive for the first time!"]}]}
}

var ractive = new Ractive({
  el: '#container',
  template: templates.testtemplate,
  data: { name: 'reader' }
});
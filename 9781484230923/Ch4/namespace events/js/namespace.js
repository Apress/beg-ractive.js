Ractive({
  el: 'body',
  append: true,
  template: 
    '<div id = "container">' +   
      '<button on-click="abc.bar">Click Me!</button>' +
      '<button on-click="abc.baz">Click Me!</button>' +
      '<button on-click="abc.bam">Click Me!</button>' +
      '<button on-click="abc.bar">Press Me!</button>' +
      '<button on-click="event.baz">Click Me!</button>' +
      '<button on-click="event.bam">Click Me!</button>' +
    '</div>',
  oninit(){
    this.on('*.bar', event => {
      window.alert('A bar event was published')
    })
    this.on('event.*', event => {
      console.log('An event button was clicked')
    })
  }
})
Ractive({
  el: 'body',
  template: `
    <h1>Trapping for Custom Events</h1>
    <input on-space='console.log("Space bar just pressed")'>
  `
});
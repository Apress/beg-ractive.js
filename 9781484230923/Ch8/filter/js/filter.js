var ractive = new Ractive({
  target: '#container',
  template: `<svg>
  <filter id="sepia">
    <feColorMatrix type="matrix"
     values="0.57     0     0     0     0
              0     0.34     0     0     0
              0     0     0.1     0     0
              0     0     0     1     0 "/>
  </filter></svg>
  
  <div id="border"><img src="{{img}}" id="sepia" width="{{width}}%" height="{{height}}%"></div>`,
  data: {
  	width: 100,
  	height: 100,
    img: "./img/camera.jpg" 
  }
});
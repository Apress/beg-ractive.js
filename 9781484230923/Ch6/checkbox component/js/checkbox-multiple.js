var Checkbox = Ractive.extend({
  isolated: false,
  template: '<input type="checkbox" id="c1" name="cc" value="{{id}}" /><label for="c1"><span></span>{{title}}</label><br>{{>disclaimer}}',
  data: {
    checked: false
  },
  css: `
    input[type="checkbox"] {
      opacity: 0;
    }

    input[type="checkbox"]:hover {
      opacity: 0;
      cursor: pointer;
    }

    input[type="checkbox"] ~ label span {
      display: inline-block;
      width: 1.1875rem;
      height: 1.1875rem;
      margin: -0.125rem 0.625rem 0 -1rem;
      vertical-align: middle;
      background: url(./img/check_radio.png) left top no-repeat;
      cursor: pointer;
    }

    input[type="checkbox"]:checked ~ label span {
      background: url(./img/check_radio.png) -1.1875rem top no-repeat;
    }
  `
});


var checkbox = new Checkbox({
  el: '#container',
  data: {
    title: 'This is a title',
    active: true,
    id: 1
  },
  template: `
    <checkbox title="This is a test"></checkbox>
  `  
});

var checkbox2 = new Checkbox({
  el: '#container',
  data: {
    title: 'This is a title2',
    active: true,
    id: 2
  },
  template: `
    <checkbox2 title="This is a test2"></checkbox2>
  `  
});



var ractive = new Ractive({
  el: '#container',
  components: {
    checkbox: Checkbox, 
    checkbox2: Checkbox
  },  
  data: {
    title: 'This is a title',
    active: true
  },
  template: `
    <checkbox title="This is a test">
      {{#partial disclaimer}}<div class="disclaimer">This is a test disclaimer - click <a href="#">here for details</a>.</div>{{/partial}}
    </checkbox><br>
    <checkbox2 title="This is a test3">
      {{#partial disclaimer}}<div class="disclaimer">This is a test disclaimer - click <a href="#">here for details</a>.</div>{{/partial}}
    </checkbox2>    
  `   
});

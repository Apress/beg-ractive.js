var Checkbox = Ractive.extend({
  isolated: false,
  template: '<input type="checkbox" id="c1" name="cc" /><label for="c1"><span></span>{{title}}</label><br>{{>disclaimer}}',
  data: {
    checked: false
  },
  css: `
    input[type="checkbox"] {
      display: none;
    }

    input[type="checkbox"] + label span {
      display: inline-block;
      width: 1.1875rem;
      height: 1.1875rem;
      margin: -0.125rem 0.625rem 0 0;
      vertical-align: middle;
      background: url(./img/check_radio.png) left top no-repeat;
      cursor: pointer;
    }

    input[type="checkbox"]:checked + label span {
      background: url(./img/check_radio.png) -1.1875rem top no-repeat;
    }
  `
});


var checkbox = new Checkbox({
  el: '#container',
  data: {
    title: 'This is a title',
    active: true
  },
  template: `
    <checkbox title="This is a test"></checkbox>
  `  
});


var ractive = new Ractive({
  el: '#container',
  components: {
    checkbox: Checkbox
  },  
  data: {
    title: 'This is a title',
    active: true
  },
  template: `
    <checkbox title="This is a test">
      {{#partial disclaimer}}<div class="disclaimer">This is a test disclaimer - click <a on-click="@.disclaim(), false" href="#">here for details</a>.</div>{{/partial}}
    </checkbox>
  `   
});

var datepickcmp = Ractive.extend({
  el: 'container',
  template: '#template',
  data: {
    label : "Date"
  },
  onrender: function ( options ) {
    $( "#datepicker" ).datepicker();                        
  }     
});

var datepick = new datepickcmp() 
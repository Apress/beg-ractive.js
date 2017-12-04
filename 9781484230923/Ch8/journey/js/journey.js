var stations = [
  { name: 'Warren Street Stn / Tottenham Court Rd' },
  { name: 'Goodge Street Station' },
  { name: 'Tottenham Court Road Station' }
];

function fmtDateTime(dateValue) {
  return moment(dateValue).format('MMMM Do YYYY, H:mm');
}

function fmtTime(timeValue) {
  return moment(timeValue).format('H:mm');
}

function fmtTimePlus(timeValue, timePlus) {
  return moment(timeValue).add(timePlus, 'minutes').format('H:mm');
}

var ractive = new Ractive({
  target: '#container',
  template: `
    <div id="summary">
      <span id="legs">Summary:</span>

      <p class="time">{{legs.leg1.duration}} mins</p><span class="{{legs.leg1.travel}}-icon"></span><p>{{legs.leg1.summary}}</p><br>
      <p class="time">{{legs.leg2.duration}} mins</p><span class="{{legs.leg2.travel}}-icon"></span><p class="line">{{legs.leg2.description1}}</p> <p class="l2end">to {{legs.leg2.end}}</p><br>
      <p class="time">{{legs.leg3.duration}} mins</p><span class="{{legs.leg3.travel}}-icon"></span><p>{{legs.leg3.summary}}</p><br>
    </div>
    <!---------------------------------------------------------------------->
  
    <div id="request">
      <p>From: <span class="info">{{journeyStart}}</span></p>
      <p>To: <span class="info">{{journeyEnd}}</span></p>
      <p>Arriving: <span class="info">{{desiredArrival}}</span></p>
      <p>Duration: <span class="info">{{timings.duration}} minutes</span></p>
      <p>Journey Start Time: <span class="info">{{timings.startDateTime}}</span></p>
      <p>Journey End Time: <span class="info">{{timings.arrivalDateTime}}</span></p>
    </div>
    <!---------------------------------------------------------------------->
    <p class="banner"><span class="{{legs.leg1.travel}}-icon"></span>{{timings.startDateTime}}: {{journeyStart}}</p>
    <p class="time">{{legs.leg1.duration}} mins</p><p>{{legs.leg1.summary}}</p>
    <p id="viewone" class="hide" on-click="@this.fire('showOne')">View details<p>
    <div id="details1" class="extra one">
      {{#each legs.leg1.direction}}
        <p class="descr">{{description}}</p>
      {{/each}}
    </div>
    <!---------------------------------------------------------------------->
    <p class="banner"><span class="{{legs.leg2.travel}}-icon"></span>{{legs.leg2.inttime}}: {{legs.leg2.start}}</p>
    <p class="time">{{legs.leg2.duration}} mins</p><p class="line">{{legs.leg2.description1}}</p><p class="linedetail">{{legs.leg2.description2}}</p>    
    <p id="viewtwo" class="hide" on-click="@this.fire('showTwo')">View details<p>
    <div id="details2" class="extra two">
      Intermediate stations:
      {{#each legs.leg2.stops}}
        <p class="descr">- {{name}}</p>
      {{/each}}
    </div>
    <!---------------------------------------------------------------------->
    <p class="banner"><span class="{{legs.leg3.travel}}-icon"></span>{{legs.leg3.inttime}}: {{legs.leg3.start}}</p>
    <p class="time">{{legs.leg3.duration}} mins</p><p>{{legs.leg3.summary}}</p> 
    <p id="viewthree" class="hide" on-click="@this.fire('showThree')">View details<p>
    <div id="details3" class="extra three">
      {{#each legs.leg3.direction}}
        <p class="descr">{{description}}</p>
      {{/each}}
    </div>
    <p class="banner">{{journeyEnd}}</p>
  `,
  data : {
    journeyStart: "London NW1 2DU, United Kingdom",
    journeyEnd: "Leicester Square, London WC2H 7JY, United Kingdom",
    desiredArrival: fmtTime("2017-08-17T19:00"),
    timings : {
      startDateTime: fmtTime("2017-08-17T18:34"),
      arrivalDateTime: fmtTime("2017-08-17T18:56"),
      duration: "22",
    },
    legs: {
      leg1: {
        summary: "Walk to Euston Station",
        duration: 9,
        start: "40 Eversholt Street",
        end: "Euston Station",
        inttime: 0,        
        travel: "walk",        
        direction: [{
          description: "Continue along Eversholt Street for 140 metres",
          latitude: 51.528967648270005,
          longitude: -0.1325920386,      
        },{
          description: "Turn right on to Euston Square, continue for 62 metres",
          latitude: 51.527932885860004,
          longitude: -0.13142337617,     
        }]     
      },
      leg2: {    
        duration: 5,
        description1: "Northern line", 
        description2: " towards Morden via Charing Cross, or Kennington Station via Charing Cross",
        stops: stations, 
        start: "Euston Station",
        end: "Leicester Square Station",
        inttime: fmtTimePlus("2017-08-17T18:34", 9),
        travel: "tube",      
      },
      leg3: {
        summary: "Walk to 14 Leicester Square",
        duration: 8,
        travel: "walk",
        start: "Leicester Square Station",
        end: "14 Leicester Square",
        inttime: fmtTimePlus("2017-08-17T18:34", 14),
        travel: "walk",
        direction: [{
          description: "Continue along Cranbourn Street for 102m",
          latitude: 51.51130433573,
          longitude: -0.12851541646   
        }, {
          description: "Turn left onto Leicester Square, continue for 56m",
          latitude: 51.51091162518,
          longitude: -0.12982852908     
        }]     
      },
    }
  }
});


/* Click handler for opening and closing extra info */
ractive.on( 'showOne', function(context) {
  if (document.getElementById('details1').style.display == "none") {
    document.getElementById('details1').style.display = "block"
  } else {
    document.getElementById('details1').style.display = "none"
  }
});

ractive.on( 'showTwo', function(context) {
  if (document.getElementById('details2').style.display == "none") {
    document.getElementById('details2').style.display = "block"
  } else {
    document.getElementById('details2').style.display = "none"
  }    
});

ractive.on( 'showThree', function(context) {
  if (document.getElementById('details3').style.display == "none") {
    document.getElementById('details3').style.display = "block"
  } else {
    document.getElementById('details3').style.display = "none"
  }
});



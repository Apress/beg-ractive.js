var player, playing = true, videoContainer = $('#js-video-container');

function onYouTubeIframeAPIReady() { 
  player = new YT.Player('player', { 
    height: '390',
    width: '640',
    videoId: 'aqz-KE-bpKQ', 
    events: { 'onReady': onPlayerReady }
  });
}

function onPlayerReady(event) { 
  event.target.playVideo(); 
}

function pauseVideo() {
  player.pauseVideo();
}

function playVideo() {
  player.playVideo();
}

$(function() {
  $(videoContainer).on('click', function() {
    if(playing == true) {
      pauseVideo();
      playing = false;
    } else {
      playVideo();
      playing = true;
    }
  });  
});

var ractive = new Ractive({
  target: 'body',
  template: `<div id="js-video-container" class="slice">
      <div class="video-container">
        <div id="player"></div>
          
          <svg class="so">
            <text class="sotext sooutline" x="50%" y="75%">{{text2}}</text>
            <defs>
              <clipPath id="mask">
                <text class="sotext" x="50%" y="75%">{{text2}}</text>
              </clipPath>
              <filter id="blurFilter" x="0" y="0" width="100%" height="100%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3 10" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>`,
  data: {
    text2: "Ractive"
  }
});
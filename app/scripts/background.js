
let isClicked = false;


function playStream() {
  isClicked = !isClicked;

  soundManager.createSound({
    id: 'otvoreni',
    url: 'http://192.240.102.133:12055/stream.aac'
  });

  if (isClicked) {
    chrome.browserAction.setIcon({path:"images/icon-pause.png"});
    soundManager.play('otvoreni');
  } else {
    soundManager.stop('otvoreni');
    chrome.browserAction.setIcon({path:"images/icon-play.png"});    
  }
}

chrome.browserAction.onClicked.addListener(playStream);

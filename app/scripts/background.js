'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

let isClicked = false;

function playStream() {
  isClicked = !isClicked;

  soundManager.createSound({
    id: 'otvoreni',
    url: 'http://87.98.250.149:8002'
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

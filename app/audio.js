const contextClass = (
  window.AudioContext ||
  window.webkitAudioContext ||
  window.mozAudioContext ||
  window.oAudioContext ||
  window.msAudioContext
);

if (contextClass) {
  // Web Audio API is available
  const context = new contextClass();
  alert('We got you, homie');
} else {
  alert('Use another browser, please');
}

const source = context.createBufferSource();
const gain = context.createGain();
source.connect(gain);
gain.connect(context.destination);

// source.disconnect(0);
// gain.disconnect(0);
// source.connect(context.destination);

const request = new XMLHTTPRequest();
request.open('GET', url, true);
request.responseType = 'arrayBuffer';

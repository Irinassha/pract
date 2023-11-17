import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import localSt from './storage.js';

const iframeV = document.querySelector('iframe');

const player = new Player(iframeV);

function onTimeUpdate(data) {
  localSt.save('videoplayer-current-time', data.seconds);
}

player.on('timeupdate', throttle(onTimeUpdate, 1000));

const time = localSt.load('videoplayer-current-time');

player
  .setCurrentTime(time)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });

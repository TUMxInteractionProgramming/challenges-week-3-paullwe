console.log('the app is alive!!!');

function switchChannel(channelName) {
  console.log('Tuning into channel ' + channelName + '!!!');
  document.getElementById('chatName').innerHTML = channelName;
}

function favoritesSelection() {
  console.log('Star clicked');
  $('li').toggleClass('selected');
}

const child_process = require('child_process');
const fs = require('fs');

const runpy = (seriesName, season, episode) => {
  var subp = child_process.spawn('python', ['server/torrent downloader/main.py', '-e', seriesName, season, episode]);

  subp.stdout.on('data', (data) => {
    console.log(`received data: ${data}`)
  }).on('close', () => {
    console.log('subprocess closed');
  });

  // subp.stdin.write("hello world");
  // subp.stdin.end();
}

module.exports = runpy;
const child_process = require('child_process');

var subp = child_process.spawn('python', ['TorrentDownloader/main.py', '-e', 'the walking Dead', 1, 1]);
var data = [1, 2, 3, 4];

subp.stdout
  .on('data', (data) => {
    console.log(`received data: ${data}`)
  }).on('close', () => {
    console.log('subprocess closed');
  });

subp.stdin.write(JSON.stringify(data));
subp.stdin.end();
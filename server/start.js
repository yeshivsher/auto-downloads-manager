const child_process = require('child_process');

var subp = child_process.spawn('python', ['torrent downloader/main.py', '-e', 'the walking Dead', 1, 1]);

subp.stdout
  .on('data', (data) => {
    console.log(`received data: ${data}`)
  }).on('close', () => {
    console.log('subprocess closed');
  });

// subp.stdin.write(JSON.stringify(data));
subp.stdin.end();

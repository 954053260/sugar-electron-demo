const { ipc } = require('sugar-electron');

ipc.response('/name', (json, cb) => {
    console.log(json);
    cb('服务进程');
});


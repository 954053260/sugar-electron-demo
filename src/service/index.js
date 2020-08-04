const { Service } = require('sugar-electron');
const path = require('path');
module.exports = {
    start(isDebug) {
        const service = new Service('service', path.join(__dirname, 'app.js'), isDebug);
        service.on('success', function () {
            console.log('service进程启动成功');
        });
      
        service.on('fail', function () {
            console.log('service进程启动异常');
        });

        service.on('closed', function () {
            console.log('service进程关闭');
        });

        service.on('crashed', function () {
            console.log('service进程崩溃');
        });
        
        return service;
    }
}
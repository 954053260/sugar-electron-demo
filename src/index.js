const { app } = require('electron');
const appName = 'sugar-electron';
global.APP_PATH = __dirname;
const defaultState = {
   webPreferences: {
      nodeIntegration: true
   }
};
app.on('ready', function () {
  const { start, config, BaseWindow, windowCenter } = require('sugar-electron');
  // 启动sugar-electron
  start({ appName, basePath: __dirname });

  // 设置窗口默认设置
  BaseWindow.setDefaultOption(defaultState);

  // 启动服务进程
  const service = require('./service');
  service.start(false);
  windowCenter.demoA.open();
  console.log('config', config);
});
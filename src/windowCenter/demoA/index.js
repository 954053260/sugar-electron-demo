const { BaseWindow, config } = require('sugar-electron');
const name = 'demoA';
const option = {
  url: config.debug ? `http:localhost:9000/${name}.html` : `file://${global.APP_PATH}/sugar/build/${name}.html`,
  width: 800,
  height: 600,
  show: true
};

const baseWindow = new BaseWindow(name, option);
baseWindow.on('ready-to-show', () => {
  baseWindow.getInstance().webContents.openDevTools();
});

module.exports = baseWindow;


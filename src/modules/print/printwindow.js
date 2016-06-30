// Or in the renderer process.
const {BrowserWindow} = window.require('electron').remote;

const openWindow = () => {
  let win = new BrowserWindow({width: 800, height: 600});
  win.on('closed', () => {
    win = null
  });
  win.loadURL('https://github.com');
};
export default openWindow;
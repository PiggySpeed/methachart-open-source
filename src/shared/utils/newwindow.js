const { BrowserWindow } = window.require('electron').remote;

const openWindow = (url) => {
  /**
   * url (str): must be a complete path
   * **/
  let win = new BrowserWindow({width: 800, height: 600});
  win.loadURL(url);
  win.openDevTools();
  win.on('closed', () => {
    win = null
  });
};
export default openWindow;
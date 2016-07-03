const { BrowserWindow } = window.require('electron').remote;

const openWindow = (url, data) => {
  /**
   * url (str): must be a complete path
   * **/
  let win = new BrowserWindow({width: 800, height: 600});
  win.loadURL(url);
  win.openDevTools();
  win.on('closed', () => {
    win = null
  });

  win.webContents.on('did-finish-load', () => {
    win.webContents.send('asynchronous-reply', data);
      win.webContents.print({}, (error) => {
        if (error) throw error;
      });
  });

  //win.webContents.on('did-finish-load', () => {
  //  // Use default printing options
  //  win.webContents.print({}, (error) => {
  //    if (error) throw error;
  //  });
  //});

  //ipcMain.on('print', function(){
  //  console.log('i am printing');
  //});

  //const printWindow = () => {
  //  win.webContents.print()
  //};
  //
  //return {
  //  printWindow: printWindow
  //}

};
export default openWindow;
var app = require('electron').app;
var BrowserWindow = require('electron').BrowserWindow;
//var ipcMain = require('electron').ipcMain;
//var Menu = require('electron').Menu;

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 475,
    icon: 'src/resources/methachart-favicon.ico',
    frame: false
  });
  mainWindow.loadURL('file://' + __dirname + '/src/index.html');
  //mainWindow.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });

  // Menubar
  //const template = [
  //  { role: 'window',
  //    submenu: [
  //      { role: 'minimize' },
  //      { role: 'close' } ]
  //  },
  //  { role: 'help',
  //    submenu: [
  //      { label: 'Learn More',
  //        click() { require('electron').shell.openExternal('http://electron.atom.io'); } }
  //    ]
  //  }
  //];
  //
  //Menu.setApplicationMenu(Menu.buildFromTemplate(template));

});

//Use this to turn off menubar
//mainWindow.setMenu(null);
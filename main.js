var app = require('electron').app;
var BrowserWindow = require('electron').BrowserWindow;
var ipcMain = require('electron').ipcMain;
var Menu = require('electron').Menu;

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({ width: 575, height: 400, icon: 'src/resources/methachart-favicon.ico' });
  mainWindow.loadURL('file://' + __dirname + '/src/index.html');
  mainWindow.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });

  // Create the application's menu
  const template = [
    //{ label: 'View',
    //  submenu: [
    //    { label: 'Reload',
    //      click(item, focusedWindow) {
    //        if (focusedWindow) focusedWindow.reload() } },
    //    { role: 'togglefullscreen' },
    //    { label: 'Toggle Developer Tools', accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
    //      click(item, focusedWindow) {
    //        if (focusedWindow)
    //          focusedWindow.webContents.toggleDevTools() } } ]
    //},
    { role: 'window',
      submenu: [
        { role: 'minimize' },
        { role: 'close' } ]
    },
    { role: 'help',
      submenu: [
        { label: 'Learn More',
          click() { require('electron').shell.openExternal('http://electron.atom.io'); } }
      ]
    }
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));

});

//Use this to turn off menubar
//mainWindow.setMenu(null);
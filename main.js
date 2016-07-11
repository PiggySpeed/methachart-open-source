var app = require('electron').app;
var BrowserWindow = require('electron').BrowserWindow;
var ipcMain = require('electron').ipcMain;
var Menu = require('electron').Menu;

//var fs = require('fs');

//ipcMain.on('asynchronous-message', function(event, args){
//  event.sender.send('asynchronous-reply', args);
//  console.log('sent message');
//});
//ipcMain.send('asynchronous-reply', "pigggggg");

//console.log("ipcmain is ", ipcMain);
//
//var str = '%LOCALAPPDATA%/Google/Chrome/User Data/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.1.0_0';
//var replaced = str.replace(/%([^%]+)%/g, function(_,n) {
//  return process.env[n];
//});
//
//var DEVTOOLS_PATH = {
//  redux: replaced
//};

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

//BrowserWindow.getDevToolsExtension()

app.on('ready', function() {
  mainWindow = new BrowserWindow({ width: 575, height: 400 });
  mainWindow.loadURL('file://' + __dirname + '/src/index.html');

  //var names = Object.keys(BrowserWindow.getDevToolsExtensions());
  //if ( !names.indexOf('Redux DevTools') ) {
  //  BrowserWindow.addDevToolsExtension(DEVTOOLS_PATH.redux);
  //}
  mainWindow.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });

  // Create the application's menu
  const template = [
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'pasteandmatchstyle' },
        { role: 'delete' },
        { role: 'selectall' } ]
    },
    { label: 'View',
      submenu: [
        { label: 'Reload', accelerator: 'CmdOrCtrl+R',
          click(item, focusedWindow) {
            if (focusedWindow) focusedWindow.reload() } },
        { role: 'togglefullscreen' },
        { label: 'Toggle Developer Tools', accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
          click(item, focusedWindow) {
            if (focusedWindow)
              focusedWindow.webContents.toggleDevTools() } } ]
    },
    {
      label: "Print",
      submenu: [
        { label: "Print",
          accelerator: "F10",
          click(item, focusedWindow) {
            if (focusedWindow){ipcMain.send('print');}
          } } ]
    },
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
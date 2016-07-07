var app = require('electron').app;
var BrowserWindow = require('electron').BrowserWindow;
var ipcMain = require('electron').ipcMain;

//var fs = require('fs');

//console.log("fs is ", fs);

//ipcMain.on('asynchronous-message', function(event, args){
//  event.sender.send('asynchronous-reply', args);
//  console.log('sent message');
//});
//ipcMain.send('asynchronous-reply', "pigggggg");

//console.log("ipcmain is ", ipcMain);

var str = '%LOCALAPPDATA%/Google/Chrome/User Data/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.1.0_0';
var replaced = str.replace(/%([^%]+)%/g, function(_,n) {
  return process.env[n];
});

var DEVTOOLS_PATH = {
  redux: replaced
};

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

//BrowserWindow.getDevToolsExtension()

app.on('ready', function() {
  mainWindow = new BrowserWindow({ width: 900, height: 625 });
  mainWindow.loadURL('file://' + __dirname + '/src/index.html');

  var names = Object.keys(BrowserWindow.getDevToolsExtensions());
  if ( !names.indexOf('Redux DevTools') ) {
    BrowserWindow.addDevToolsExtension(DEVTOOLS_PATH.redux);
  }
  mainWindow.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });

});

//Use this to turn off menubar
//mainWindow.setMenu(null);
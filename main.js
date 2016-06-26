var app = require('electron').app;
var BrowserWindow = require('electron').BrowserWindow;

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
  mainWindow = new BrowserWindow({ width: 1200, height: 800 });
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


//import installExtension, { REACT_DEVELOPER_TOOLS, JQUERY_DEBUGGER, REDUX_DEVTOOLS } from 'electron-devtools-installer';
//
//installExtension(REACT_DEVELOPER_TOOLS, JQUERY_DEBUGGER, REDUX_DEVTOOLS)
//  .then((name) => console.log(`Added Extension:  ${name}`))
//  .catch((err) => console.log('An error occurred: ', err));

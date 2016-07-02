var ipcRenderer = require('electron').ipcRenderer;

function Test() {
  console.log("it works!")
}
function Test2(x) {
  console.log("test", x);
  //document.getElementById("preview").create
}

ipcRenderer.on('asynchronous-reply', function(event, arg) {
  console.log("ipc is", arg);
});
ipcRenderer.send('asynchronous-message', 'piggggyy');
//console.log("ipc renderer is ", ipcRenderer);
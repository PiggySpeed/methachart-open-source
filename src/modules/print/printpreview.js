var ipcRenderer = require('electron').ipcRenderer;
var moment = require('moment');

var data = [1,2,3,4,5,6,7,8,9];

ipcRenderer.on('asynchronous-reply', function(event, data) {
  buildTable(data);
});

function Test2(x) {
  console.log("test", x);
  //document.getElementById("preview").create
  //webContents.print()
}

function buildHeader() {
  // Build Header
  var header = document.getElementById("header");


  // Build Title
  var headertitle = document.getElementById("header-title")

}

function buildTable(data) {
  var table = document.getElementById("table");

  // Build table header
  var tableheaders = ["Date", "Rx#", "Witness", "Take Home", "Total", "RPh", "Patient Initials", "Notes"];
  var tableheaderrow = table.insertRow(0);
  tableheaderrow.setAttribute('class', 'table-header');
  for(var n = 0; n<tableheaders.length; ++n ) {
    var headercell = tableheaderrow.insertCell(n);
    headercell.innerHTML = tableheaders[n];
    headercell.setAttribute('class', 'table-header-cell');
  }

  // Build table body
  for(var i = 0; i<data.length; ++i){
    var row = table.insertRow(i+1);
    row.setAttribute('class', 'table-row');
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);
    var cell6 = row.insertCell(6);
    var cell7 = row.insertCell(7);

    cell0.setAttribute('class', 'table-cell');
    cell1.setAttribute('class', 'table-cell');
    cell2.setAttribute('class', 'table-cell');
    cell3.setAttribute('class', 'table-cell');
    cell4.setAttribute('class', 'table-cell');
    cell5.setAttribute('class', 'table-cell');
    cell6.setAttribute('class', 'table-cell');
    cell7.setAttribute('class', 'table-cell');

    cell0.innerHTML = data[i].date;
    cell1.innerHTML = data[i].rx;
    cell2.innerHTML = data[i].witness;
    cell3.innerHTML = data[i].takehome;
    cell4.innerHTML = data[i].total;
    cell5.innerHTML = ""; // RPh
    cell6.innerHTML = ""; // Patient
    cell7.innerHTML = ""; // Notes
  }

  // Insert End Rx Message
  var endrow = table.insertRow(data.length + 1);
  endrow.setAttribute('class', 'table-endrow');

  var endrowcell0 = endrow.insertCell(0);
  var endrowcell1 = endrow.insertCell(1);

  endrowcell0.setAttribute('class', 'table-endrow-cell0');
  endrowcell1.setAttribute('class', 'table-endrow-cell1');
  endrowcell1.setAttribute('colspan', '7');

  var enddate = moment(data[data.length-1].date, 'MMM DD, YYYY');
  console.log(moment(enddate).add(1, 'days'));
  endrowcell0.innerHTML = enddate.format('MMM DD, YYYY').add(1, 'days');
  endrowcell1.innerHTML = "END OF METHADONE PRESCRIPTION - PLEASE SEE DOCTOR FOR REFILLS";
}


//ipcRenderer.send('print');
//console.log("ipc renderer is ", ipcRenderer);

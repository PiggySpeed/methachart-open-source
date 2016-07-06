var ipcRenderer = require('electron').ipcRenderer;

ipcRenderer.on('asynchronous-reply', function(event, data) {
  buildHeader(data.headerdata);
  buildTable(data.logdata);
});


//var pig = [1,4,3,6,3,7,9,5,3,2,6,8,3,3,1,3];

function splitData(data, chunksize) {
  /**
   * Returns a new array of data split into smaller chunks with a max size of chunksize.
   *
   * data (arr): an array of data to be split up
   * chunksize (int): the maximum size of chunks
   * **/
  var feed = data.slice(); // copy the original array
  var wholechunks = Math.floor(feed.length/chunksize);
  var arr = new Array(wholechunks + (feed.length % chunksize) -1);
  for(var i = 0; i<wholechunks; ++i){
    arr[i] = feed.splice(0, chunksize)
  }
  arr[arr.length-1] = feed.slice(); // add the remainder of the feed
  return arr;
}

function buildHeader(data) {
  // Add Title
  var headertitle = document.getElementById("header-title");
  headertitle.innerHTML = "Methadone Accountability Log";

  // Add Name
  var namelabel = document.getElementById("name-label");
  namelabel.innerHTML = data.name;

  // Add Details
  var detailslabel = document.getElementById("details-label");
  detailslabel.innerHTML = "Start: " + data.startdate + " End: " + data.enddate;
}

function buildTableBody(data, table){
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

  // Add Page Number
}

function insertTableMessage(table, location, message) {
  /**
   * Inserts a message at the specified location(s)
   *
   * table (obj): reference to the table
   * location (arr): an array of locations to insert the message
   * message (str): the message
   *
   * **/
  for(var i=0; i<location.length; ++i){
    table.deleteRow(location[i]);
    var row = table.insertRow(location[i]);
    var rowcell = row.insertCell(0);
    rowcell.setAttribute('class', 'table-endrow-cell0');
    rowcell.setAttribute('colspan', '8');
    rowcell.innerHTML = message;
  }
  //var endrow = table.insertRow(data.length + 1);
  //endrow.setAttribute('class', 'table-endrow');
  //var endrowcell0 = endrow.insertCell(0);
  //endrowcell0.setAttribute('class', 'table-endrow-cell0');
  //endrowcell0.setAttribute('colspan', '8');
  //endrowcell0.innerHTML = "END OF METHADONE PRESCRIPTION - PLEASE SEE DOCTOR FOR REFILLS";

}

function buildTable(data) {
  var tables = document.getElementById("tables");
  //var table = document.getElementById("table");
  var batches = splitData(data, 28);
  //console.log("batches are ", batches);
  //TODO: figure out how to get length of multidimensional array
  // there is something wrong with splitdata func

  for(var i=batches.length-1; i>=0; --i){
    console.log("batches are ", batches[5]);
    var table = document.createElement("table");
    table.setAttribute('class', 'table-style');
    buildTableBody(batches[i], table);
    tables.appendChild(table);
  }
  //insertTableMessage(table, [data.length], "testing");

}


//ipcRenderer.send('print');
//console.log("ipc renderer is ", ipcRenderer);

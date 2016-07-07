var ipcRenderer = require('electron').ipcRenderer;

ipcRenderer.on('asynchronous-reply', function(event, data) {
  buildHeader(data.headerdata);
  buildTables(data.logdata);
});


function splitData(data, chunksize) {
  /**
   * Returns a new array of data split into smaller chunks with a max size of chunksize.
   *
   * data (arr): an array of data to be split up
   * chunksize (int): the maximum size of chunks
   * **/
  var feed = data.slice(); // copy the original array
  var arrLength = Math.ceil(feed.length/chunksize);
  var arr = new Array(arrLength);

  for(var i = 0; i<arrLength-1; ++i){
    arr[i] = feed.splice(0, chunksize)
  }
  arr[arr.length-1] = feed.slice(); // add the remainder
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
    cell2.innerHTML = data[i].witness + " mL";
    cell3.innerHTML = data[i].takehome;
    cell4.innerHTML = data[i].total + " mL";
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
}

function buildTable(data, tablenode) {
  /**
   * Adds a table to the tablenode.
   * Returns a reference to the table that was just created.
   *
   * data (arr): an array of data objects
   * tablenode (obj): the DOM element to append this table to
   *
   * **/
  var table = document.createElement("table");
  table.setAttribute('class', 'table-style');
  buildTableBody(data, table);
  tablenode.appendChild(table);
  return table;
}

function addPageNumber(number, max, node){
  var pageNumber = document.createElement('p');
  pageNumber.innerHTML = "p. " + number + "/" + max;
  pageNumber.setAttribute('id', 'page-order-label');
  node.appendChild(pageNumber);
}

function addPageBreak(node){
  /**
   * Adds an empty div that create a page break after it.
   *
   * node (obj): node in which to add the page break to.
   * **/
  var pageBreak = document.createElement('div');
  pageBreak.innerHTML = " "; // the page-break-after property won't work on empty divs
  pageBreak.setAttribute('class', 'page-break');
  node.appendChild(pageBreak);
}

function buildTables(data) {
  var tables = document.getElementById("tables");

  var batches = splitData(data, 15);

  for(var i=0; i<batches.length; ++i){
    buildTable(batches[i], tables);
    addPageNumber(i+1, batches.length, tables);
    addPageBreak(tables);
  }
}


//ipcRenderer.send('print');
//console.log("ipc renderer is ", ipcRenderer);

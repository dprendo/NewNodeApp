// add event handlers

// calback function and load html table and pass a empty array
document.addEventListener('DOMContentLoaded', function() {
  fetch('http://localhost:5000/getAll')
  .then(response => responce.json())
  .then(data => console.log(data));
  loadHTMLTable([]);
});

// load the table and take in data

// if (data.length === 0) {
//  table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
// the above means if there is no data in data base create a table row with
// table data that spans 5 colums outputing No data!!

function loadHTMLTable(data) {
  const table = document.querySelector('table tbody');// get the table and tbody
  //let tableHtml = "";// create a variable with an empty string.
  if (data.length === 0) {
    table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
  }
}
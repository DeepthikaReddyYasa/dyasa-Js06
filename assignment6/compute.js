function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Get the value of the 'inputValue' parameter from the URL
var num1 = getParameterByName('num1');
var num2 = getParameterByName('num2');

// Get the table body
const tableBody = document.getElementById('table-body');

// Create a new row
const newRow = tableBody.insertRow();
const newRow1 = tableBody.insertRow();
const newRow2 = tableBody.insertRow();
const newRow3 = tableBody.insertRow();

// Insert cells into the row
const firstRowCell1 = newRow.insertCell(0);
firstRowCell1.appendChild(document.createTextNode(num1 + " + " + num2));

const firstRowCell2 = newRow.insertCell(1);
firstRowCell2.appendChild(document.createTextNode(num1 + num2));

const secondRowCell1 = newRow1.insertCell(0);
secondRowCell1.appendChild(document.createTextNode(num1 + " - " + num2));

const secondRowCell2 = newRow1.insertCell(1);
secondRowCell2.appendChild(document.createTextNode(num1 - num2));

const thirdRowCell1 = newRow2.insertCell(0);
thirdRowCell1.appendChild(document.createTextNode(num1 + " * " + num2));

const thirdRowCell2 = newRow2.insertCell(1);
thirdRowCell2.appendChild(document.createTextNode(num1 * num2));

const fourthRowCell1 = newRow3.insertCell(0);
fourthRowCell1.appendChild(document.createTextNode(num1 + " / " + num2));

const fourthRowCell2 = newRow3.insertCell(1);
fourthRowCell2.appendChild(document.createTextNode(num1 / num2));


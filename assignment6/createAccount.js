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
var email = getParameterByName('email');
var password = getParameterByName('password');
var address = getParameterByName('address');
var city = getParameterByName('city');
var state = getParameterByName('state');
var membership = getParameterByName('membership');

// Get the table body
const tableBody = document.getElementById('table-body');

// Create a new row
const newRow = tableBody.insertRow();
const newRow1 = tableBody.insertRow();
const newRow2 = tableBody.insertRow();
const newRow3 = tableBody.insertRow();
const newRow4 = tableBody.insertRow();
const newRow5 = tableBody.insertRow();

// Insert cells into the row
const firstRowCell1 = newRow.insertCell(0);
firstRowCell1.appendChild(document.createTextNode("Email"));

const firstRowCell2 = newRow.insertCell(1);
firstRowCell2.appendChild(document.createTextNode(email));

const secondRowCell1 = newRow1.insertCell(0);
secondRowCell1.appendChild(document.createTextNode("Password"));

const secondRowCell2 = newRow1.insertCell(1);
secondRowCell2.appendChild(document.createTextNode(password));

const thirdRowCell1 = newRow2.insertCell(0);
thirdRowCell1.appendChild(document.createTextNode("Address"));

const thirdRowCell2 = newRow2.insertCell(1);
thirdRowCell2.appendChild(document.createTextNode(address));

const fourthRowCell1 = newRow3.insertCell(0);
fourthRowCell1.appendChild(document.createTextNode("City"));

const fourthRowCell2 = newRow3.insertCell(1);
fourthRowCell2.appendChild(document.createTextNode(city));

const fifthRowCell1 = newRow4.insertCell(0);
fifthRowCell1.appendChild(document.createTextNode("State"));

const fifthRowCell2 = newRow4.insertCell(1);
fifthRowCell2.appendChild(document.createTextNode(state));

const sixthRowCell1 = newRow5.insertCell(0);
sixthRowCell1.appendChild(document.createTextNode("Membership"));

const sisxRowCell2 = newRow5.insertCell(1);
sisxRowCell2.appendChild(document.createTextNode(membership));


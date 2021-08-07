// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

console.log(data);

data.forEach((alienSighting) => {
    var row = tbody.append("tr");
    Object.entries(alienSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

//Select the Button
var button = d3.select("filter-btn");

//Select the form
var form = d3.select("#form");

//Create Event Handlers
button.on("click", runEnter);
form.on("submit", runEnter);

//Complete the event handler function for the form
function runEnter() {

    //Prevent the page from refreshing
    d3.event.preventDefault();

    //Select the input element and get the raw HTML node
    var inputElement = d3.select("#form-control");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(people);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);
};


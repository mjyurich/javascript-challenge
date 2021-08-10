// from data.js
var tableData = data;

// YOUR CODE HERE!
//UFO sightings will be put into the table body
var tbody = d3.select("tbody");

console.log(tableData);

//UFO sighting values for each column
tableData.forEach((alienSighting) => {

    //append one table row for each UFO sighting object
    var row = tbody.append("tr");

    //Using object log each sighting value
    Object.entries(alienSighting).forEach(([key, value]) => {
        
        //append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});

//Select the Button
var button = d3.select("#filter-btn");

//Select the form
var form = d3.select(".form");

//Create Event Handlers
button.on("click", runEnter);
form.on("submit", runEnter);

//Complete the event handler function for the form
function runEnter() {

    //Prevent the page from refreshing
    d3.event.preventDefault();

    //Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);

    filteredData.forEach((selections) => {
        var row = tbody.append("tr");
        Object.entries(selections).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
};


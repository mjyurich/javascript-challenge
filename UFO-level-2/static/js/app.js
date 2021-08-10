// from data.js
var tableData = data;


//UFO sightings will be put into the table body
var tbody = d3.select("tbody");

console.log(data);

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
    console.log(tableData);

     // Filter Data with datetime equal to input value
     var filteredData = tableData.filter(sighting => sighting.datetime === inputValue ||
        sighting.city === inputValue ||
        sighting.state === inputValue ||
        sighting.country === inputValue ||
        sighting.shape === inputValue);

// console.log filter values
console.log(filteredData);

filteredData.forEach(function(selections) {

    console.log(selections);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");
    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
};

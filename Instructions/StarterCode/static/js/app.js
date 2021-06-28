


// Use d3.json() to fetch data from JSON file
// Incoming data is internally referred to as incomingData
function biodiversity(otu){
d3.json("samples.json").then((incomingData) => {
  var sampleSet=incomingData.samples;
  function filterbellyButtons(sample) {
    return sample.id== otu;
  };
  // Use filter() to pass the function as its argument
  var filteredButtons = incomingData.filter(filterbellyButtons);
    //console.log(incomingData);
    // console.log(filteredButtons)
     // Create the data array for our plot
   var data = [trace];

//   // Define the plot layout
   var layout = {
     title: "The highest critically acclaimed movies.",
     xaxis: { title: "Title" },
     yaxis: { title: "Metascore (Critic) Rating"}
   };

//   // Plot the chart to a div tag with id "bar-plot"
   Plotly.newPlot("bar-plot", data, layout);
});
};
 
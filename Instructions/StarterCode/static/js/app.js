// Use d3.json() to fetch data from JSON file
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
   
   var sampleInfo = filteredButtons[0]

   // Grabbing data
   var Coronado=sampleInfo.otu_ids;
   var Beach=sampleInfo.sample_values;
   var Sand=sampleInfo.otu_labels;
   var Sun=Coronado.slice(0,10).reverse()
  
   // Define the plot layout
   var layout = {
     xaxis: { title: "Title" },
     yaxis: { title: "Metascore (Critic) Rating"}
   };
  // Create your trace.
  var trace = {
    x: Beach.slice(0,10).reverse(),
    y: Sun,
    text: Sand.slice(0,10).reverse(),
    type: "bar", 
    orientation:"h"
  };
   // Plot the chart 
   Plotly.newPlot("bar", trace);
});
};
// Use d3.json() to fetch data from JSON file
function bellies(otu){
    var umbrella=d3.select("#selDataset");
    d3.json("samples.json").then((incomingData.names) => {
      var shovel=incomingData.names;
      function filterbellyButtons(sample) {
        return sample.id== otu;
      };
    })
}
//Append data

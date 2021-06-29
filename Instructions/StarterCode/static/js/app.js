// Metadata
function metadata(otu){
d3.json("samples.json").then((incomingData) => {
  var sampleSet=incomingData.metadata;
  function Demo(metadata) {
    return metadata.id== otu;
  };
  // Use filter() to pass the function as its argument
  var filteredDemo = sampleSet.filter(Demo);
  var demoGraphics=filteredDemo[0]
  var salt=d3.select("#sample-metadata");
  salt.html("");

// Prints 
Object.entries(demoGraphics).forEach(entry => {
  const [key, value] = entry;
  salt.append('p').text(`${key}:${value}`);
});
  });
}
// Use d3.json() to fetch data from JSON file
function biodiversity(otu){
d3.json("samples.json").then((incomingData) => {
  var sampleSet=incomingData.samples;
  function filterbellyButtons(sample) {
    return sample.id== otu;
  };
  // Use filter() to pass the function as its argument
  var filteredButtons = sampleSet.filter(filterbellyButtons);

  //console.log(incomingData);
    console.log(filteredButtons);
   
   var sampleInfo = filteredButtons[0];
   console.log(sampleInfo);

   // Grab data
   var Coronado=sampleInfo.otu_ids;
   var Beach=sampleInfo.sample_values;
   var Sand=sampleInfo.otu_labels;
   var Sun=Coronado.slice(0,10).map(otu_id=>otu_id).reverse()
  
   // Define the plot layout
   var layout = {
     title: "bacteria"
   };

  // Create your trace.
  var trace = [{
    x: Beach.slice(0,10).reverse(),
    y: Sun,
    text: Sand.slice(0,10).reverse(),
    type: "bar", 
    orientation:"h"
  }];
   // Plot the bar chart 
   Plotly.newPlot("bar", trace, layout);
   console.log(Beach.slice(0,10).reverse());

   // Plot bubble chart
      // Grab data
      var Red=sampleInfo.otu_ids;
      var White=sampleInfo.sample_values;
      var Blue=sampleInfo.otu_labels;
      var Green=Red.slice(0,10).reverse()
     
      // Define the plot layout
      var layout = {
        title: "x"
       };
   
     // Create your trace.
     var trace = [{
       x: Red,
       y: White,
       text: Red,
       mode: "markers",
       marker: {
         size: White, color: Red
       }
     }];
      // Plot the bubble chart 
      Plotly.newPlot("bubble", trace, layout);
      console.log(White.slice(0,10).reverse());
});
};
// Use d3.json() to fetch data from JSON file
function bellies(){
    var purple=d3.select("#selDataset");
    d3.json("samples.json").then((incomingData) => {
      var orange=incomingData.names;

//Append data
orange.forEach(element => {
    purple.append('option').text(element).property("value");
});
biodiversity(orange[0])
metadata(orange[0])
});
};

// New function
function optionChanged(fish){
  biodiversity(fish)
  metadata(fish)
}
bellies();


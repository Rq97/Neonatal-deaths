const lineColors = {
    green: "#44bb66",
    red:"#bb4466",
    blue:"#4466bb"
}
const config = {
     displayModeBar: flase,
     responsive: true
}
const plot1Div = documen.getElementById("vis1");
const plot2Div = documen.getElementById("vis2");
const plot3Div = documen.getElementById("vis3");


function make_plot(csv_data){
   
   
    //Add our main data trace
    let data = [{
        x: entity_data.map(d => d.year),
        y: entity_data.map(d => d.deaths),
        mode: 'lines'
    }]

    //Draw the plot at our div
    Plotly.newPlot('myDiv', data);
}

//Load the csv data and when loaded: run the make_plot function with that data
Plotly.d3.csv("mortality.csv", make_plot);



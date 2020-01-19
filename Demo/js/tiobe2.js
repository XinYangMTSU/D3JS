/*
*    main.js
*    Mastering Data Visualization with D3.js
*    Basic Barplot
*    Loading external data
*    Author: Xin Yang
*    Augustana College
*/

// set the dimensions and margins of the graph
var margin = {top: 100, right: 400, bottom: 150, left: 100},
    width = 1000 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)

// add background color to svg
/*
svg.append("rect")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("fill", "gray")
        .attr("opacity", 0.5);
*/

var g = svg.append("g")
    .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")")

// add background color to group
/*
g.append("rect")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("fill", "blue")
        .attr("opacity", 0.5);
*/


// Title
svg.append("text")
    .attr("class","title")
    .attr("x", (width + margin.left + margin.right)/2)
    .attr("y", 50)
    .attr("text-anchor", "middle")
    .style("font-size", "30px")
    .text("The Top 10 Popular Programming Languages");

// X lable
g.append("text")
    .attr("class","x axis-label")
    .attr("x", width/2)
    .attr("y", height + 110)
    .style("font-size", "30px")
    .attr("text-anchor", "middle")
    .text("Programming Languages");

// Y lable
g.append("text")
    .attr("class","y axis-label")
    .attr("x", -(height/2))
    .attr("y", -50)
    .style("font-size", "30px")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .text("TIOBE Index");

//colors
const DIVERGENT_COLORS_10 = [
      "#665191",
      "#a05195",
      "#d45087",
      "#f95d6a",
      "#ff7c43",
      "#ffa600",
      "#ef5675",
      "#ff00ff",
      "#ff99ff",
      "#f9057c"
];

var ProgLangs = ["Java", "C", "Python", "C++", "C#", "VB .NET", "JavaScript", "PHP", "Swift", "SQL"];

//X axis
var x = d3.scaleBand()
  .range([0,width])
  .domain(ProgLangs)
  .padding(0.2);

var xAxisCall = d3.axisBottom(x);
g.append("g")
  .attr("class","x axis")
  .attr("transform", "translate(0, " + height + ")")
  .call(xAxisCall)
  .selectAll("text")
      .attr("y","10")
      .attr("x","-5")
      .attr("text-anchor","end")
      .style("font-size", "12px")
      .attr("transform","rotate(-40)");

// Add Y axisB
var y = d3.scaleLinear()
  //.domain([0, d3.max(data, function(d){
  //    return parseInt(d);
  //})])
  .domain([0,180])
  .range([height,0]);

var yAxisCall = d3.axisLeft(y)

var yAxisUpdate = g.append("g")
.attr("class","y axis")
.style("font-size", "12px")
.call(yAxisCall);

//parse the data
//d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv",function(data){
d3.csv("data/tiobe2.csv",function(data){

  // Legends
  var legend = svg.append("g")
      .attr("transform", "translate(" + (width+220) + "," + (height - 150) + ")");

  data.forEach(function(d,i){
      var legendRow = legend.append("g")
          .attr("transform","translate(0, " + (i*21) + ")")

      legendRow.append("rect")
          .attr("width",40)
          .attr("height",20)
          .attr("fill",DIVERGENT_COLORS_10[i])

      legendRow.append("text")
          .attr("x",-10)
          .attr("y",10)
          .attr("text-anchor", "end")
          .style("text-transform","capitalize")
          .text(ProgLangs[i])
  })

  plotBars(data);

});

var plotBars = function(data){

// Bars
var updateBars = function(data){
  // First update the y-axis domain to match data
  //y.domain(d3.extent(data));
  yAxisUpdate.remove();

  var y = d3.scaleLinear()
    .domain([0, d3.max(data, function(d){
        return parseInt(d);
    })])
    .range([height,0]);

  var yAxisCall = d3.axisLeft(y)

  yAxisUpdate = g.append("g")
  .attr("class","y axis")
  .style("font-size", "12px")
  .call(yAxisCall);

  // Tooltip
  var tip = d3.tip().attr('class','d3-tip')
      .html(function(d,i){
          var text = "<strong>Lang:</strong> <span style='color:red'>" + ProgLangs[i] + "</span><br>";
          text += "<strong>Index:</strong> <span style='color:red'>" + d3.format(".2f")(d) + "</span><br>";
          return text;
      });
  g.call(tip);

  //y.domain(d3.extent(data));
  //console.log(data);
  var rects =  g.selectAll("rect")
      .remove()
			.exit()
      .data(data)
      .enter()
      .append("rect")
      .attr("x", function(d, i) {
          return x(ProgLangs[i]); })
      .attr("y", function(d){
          console.log(y(d));
          return y(d);
      })
      .attr("width", x.bandwidth())
      .attr("height", function(d) {
        //console.log("height: "+ height, height - y(d));
        return height - y(d); })
      .attr("class", "bar")
      .attr("fill", function(d,i){
          return DIVERGENT_COLORS_10[i];
      })
      .on("mouseover",tip.show)
      .on("mouseout",tip.hide);

  // Update old ones, already have x / width from before
  rects.transition().duration(250)
      .attr("y", function(d,i) { return y(d); })
      .attr("height", function(d,i) { return height - y(d); });

  // Remove old ones
  rects.exit().remove();

};

// Get names of cereals, for dropdown
var years = ["2001","2002","2003",'2004','2005','2006','2007','2008','2009','2010',
        '2011','2012','2013','2014','2015','2016','2017','2018','2019'];

// Handler for dropdown value change
var dropdownChange = function() {

    var newYear = d3.select(this).property('value');
    var newData = data.map(function(d) { return d[newYear.toString()]; });
    updateBars(newData);
};

var dropdown = d3.select("#vis-container")
    .insert("select", "svg")
    .on("change", dropdownChange);

dropdown.selectAll("option")
    .data(years)
    .enter()
    .append("option")
    .attr("value", function (d) { return d; })
    .text(function (d) {
          return d; // capitalize 1st letter
    });

    var initialData = data.map(function(d) { return d["2001"]; });
    updateBars(initialData);
};

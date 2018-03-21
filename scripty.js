var svg = document.getElementById("box");
var US = document.getElementById("US");
var china = document.getElementById("china");
var NS = "http://www.w3.org/2000/svg"

var USData = [9, 8, 6]
var chinaData = [1, 6, 2]

var changeUS = function (e) {
    var p = d3.select("svg")
    .selectAll("circle")
    .data(USData)
    .attr("r", function(d){return 5*d});
}

var changeC = function (e) {
    var p = d3.select("svg")
    .selectAll("circle")
    .data(chinaData)
    .attr("r", function(d){return 5*d});
}

var circle1 = document.createElementNS(NS, "circle");
circle1.setAttribute("cx", 100);
circle1.setAttribute("cy", svg.getAttribute("height")/2);
circle1.setAttribute("r", 0);
circle1.setAttribute("fill","yellow");

var circle2 = document.createElementNS(NS, "circle");
circle2.setAttribute("cx", 200);
circle2.setAttribute("cy", svg.getAttribute("height")/2);
circle2.setAttribute("r", 0);
circle2.setAttribute("fill","gray");

var circle3 = document.createElementNS(NS, "circle");
circle3.setAttribute("cx", 300);
circle3.setAttribute("cy", svg.getAttribute("height")/2);
circle3.setAttribute("r", 0);
circle3.setAttribute("fill","brown");

svg.appendChild(circle1);
svg.appendChild(circle2);
svg.appendChild(circle3);

US.addEventListener('click', changeUS);
china.addEventListener('click', changeC);
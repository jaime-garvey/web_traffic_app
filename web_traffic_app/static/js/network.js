var links = [
  {source: "Home", target: "P2", type: "licensing"},
  {source: "Home", target: "P12", type: "licensing"},
  {source: "P2", target: "P3", type: "suit"},
  {source: "P4", target: "P3", type: "suit"},
  {source: "P5", target: "P3", type: "resolved"},
  {source: "P13", target: "P3", type: "suit"},
  {source: "P7", target: "P3", type: "suit"},
  {source: "Home", target: "P8", type: "suit"},
  {source: "Home", target: "P9", type: "suit"},
  {source: "P6", target: "P7", type: "suit"},
  {source: "P3", target: "P12", type: "suit"},
  {source: "Home", target: "P4", type: "suit"},
  {source: "P11", target: "P7", type: "resolved"},
  {source: "P7", target: "P7", type: "resolved"},
  {source: "P13", target: "P7", type: "suit"},
  {source: "P11", target: "P6", type: "suit"},
  {source: "P7", target: "P6", type: "resolved"},
  {source: "P3", target: "P5", type: "resolved"},
  {source: "P9", target: "P5", type: "resolved"},
  {source: "P3", target: "P4", type: "suit"},
  {source: "P10", target: "P4", type: "suit"},
  {source: "P17", target: "Home", type: "suit"},
  {source: "P13", target: "P10", type: "suit"},
  {source: "P14", target: "P10", type: "suit"},
  {source: "P7", target: "P11", type: "resolved"},
  {source: "P3", target: "P11", type: "suit"},
  {source: "P7", target: "P13", type: "suit"},
  {source: "P5", target: "P14", type: "suit"}

];

var nodes = {};

// Compute the distinct nodes from the links.
links.forEach(function(link) {
  link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
  link.target = nodes[link.target] || (nodes[link.target] = {name: link.target});
});

// 960, 500

var width = 300,
    height = 200;

var force = d3.layout.force()
    .nodes(d3.values(nodes))
    .links(links)
    .size([width, height])
    .linkDistance(60)
    .charge(-300)
    .on("tick", tick)
    .start();

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var link = svg.selectAll(".link")
    .data(force.links())
  .enter().append("line")
    .attr("class", "link");

var node = svg.selectAll(".node")
    .data(force.nodes())
  .enter().append("g")
    .attr("class", "node")
    .on("mouseover", mouseover)
    .on("mouseout", mouseout)
    .call(force.drag);

node.append("circle")
    .attr("r", 8);

node.append("text")
    .attr("x", 12)
    .attr("dy", ".35em")
    .text(function(d) { return d.name; });

function tick() {
  link
      .attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

  node
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
}

function mouseover() {
  d3.select(this).select("circle").transition()
      .duration(750)
      .attr("r", 16);
}

function mouseout() {
  d3.select(this).select("circle").transition()
      .duration(750)
      .attr("r", 8);
}

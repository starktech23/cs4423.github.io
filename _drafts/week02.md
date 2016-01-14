---
layout: post
title: "Graphs and Social Networks"
author: cs423
categories: notes
---

**Graphs.**

A _graph_ consists of a collection of objects, called _nodes_ or _vertices_,
with certain pairs of nodes connected by links called _edges_.

Example: ...

In this simple setting, two nodes are either connected or not (that
is, there are no multiple links) and if node $x$ is connected to node
$y$, then it is also true that $y$ is connected to $x$: the edges set
up a _symmetric_ relationship between nodes.  If we want to express
more complex relationships (asymmetric, multiple edges) we need to use
the more complex structure of _directed_ graphs, possibly with
multiple edges.

<div class="note">
    A graph can serve as a mathematical model of a network.
</div>

Example: The internet in December 1970.

![the internet in december 1970][arpa]

This diagram contains the same information, without the distracting details of
the US geography.

<div id="arpa"></div>

<script>
var width = 500,
    height = 300;

var color = d3.scale.category10();

var force = d3.layout.force()
    .charge(-200)
    .gravity(0.05)
    .linkDistance(80)
    .size([width, height]);

var svg = d3.select("#arpa").append("svg")
    .attr("width", width)
    .attr("height", height);

d3.json("/data/arpa.json", function(error, graph) {
  force
      .nodes(graph.nodes)
      .links(graph.links)
      .start();

  var link = svg.selectAll(".link")
      .data(graph.links)
    .enter().append("line")
      .attr("class", "link")
      .style("stroke", function(d) { return color(d.value); })
      .style("stroke-width", function(d) { return 4; });

  // Create the groups under svg
  var groups = svg.selectAll('g.group')
    .data(graph.nodes)
    .enter()
    .append('g')
    .classed('group', true);

  var node = groups
      .append("circle")
      .attr("class", "node")
      .attr("r", 5)
      .style("fill", function(d) { return color(d.group); })
      .call(force.drag);

  node.append("title")
      .text(function(d) { return d.name; });

  var label = groups
      .append("text")
      .attr("dx", 6)
      .text(function(d) { return d.name; });

  // Merge images and text for update.
  node = svg.selectAll("circle, text");

  force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

  // Translate the groups
  groups.attr("transform", function(d) { 
    return 'translate(' + [d.x, d.y] + ')'; 
  });    

//    node.attr("cx", function(d) { return d.x; })
//        .attr("cy", function(d) { return d.y; });
  });
});

</script>

[arpa]: http://som.csudh.edu/cis/lpress/history/arpamaps/f7dec1970.jpg "The Internet in December 1970"
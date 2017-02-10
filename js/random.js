var width = 400;
var height = 400;

var nrNodes = 100;
var colors = d3.scale.category20()

var svg = d3.select("#random").insert("svg", "div#count")
    .attr("width", width)
    .attr("height", height);

var nodes = [];
for (var j = 0; j < nrNodes; j++) {
    nodes[j] = {
        radius: 3,
        color: Math.floor(Math.random() * 20)
    };
}

var allLinks = [];
for (var j = 0; j < nrNodes; j++) {
    for (var k = 0; k < j; k++) {
	allLinks.push([k, j])
    }
}

function shuffle(list) {
    for (j = list.length; j > 1; j--) {
	var k = Math.floor(Math.random() * j);
	if (k < (j-1)) {
	    var h = list[j-1];
	    list[j-1] = list[k];
	    list[k] = h;
	}
    }
}

shuffle(allLinks);

var links = [];

var force = d3.layout.force()
    .size([width,height])
    .friction(0.2)
    .charge(function(d) { return -200 -20 * (d.radius - 3); })
    .gravity(0.1)
    .linkDistance(10)
    .links(links)
    .nodes(nodes);

var node = svg.selectAll(".node")
    .data(nodes)
    .enter()
    .append("circle")
    .attr("r", function(d) { return d.radius; })
    .classed("node", true)
    .call(force.drag);

var count = d3.select("#count");

var update = function() {
    var newLink = allLinks.shift();
    var tar = newLink[0];
    var src = newLink[1];

    nodes[src].radius += 1;
    nodes[tar].radius += 1;

    // colors: BFS
    var queue = [src];
    while (queue.length > 0) {
        var x = queue.pop();
        nodes[x].color = nodes[tar].color;
        for (var j = 0; j < links.length; j++) {
            if (links[j].source.index === x) {
                var y = links[j].target.index;
		if (nodes[y].color != nodes[x].color) {
		    if (queue.indexOf(y) === -1) {
			queue.push(y)
		    }
		}
	    }
	    if (links[j].target.index === x) {
		var y = links[j].source.index;
		if (nodes[y].color != nodes[x].color) {
		    if (queue.indexOf(y) === -1) {
			queue.push(y)
		    }
		}
	    }
	}
    }

    links.push({ source: src, target: tar });

    var link = svg.selectAll(".link").data(links);
    link.enter()
	.insert("line", "circle")
	.classed("link", true);

    force.on("tick", function(e) {
	node.attr("cx", function(d) { return d.x; })
	    .attr("cy", function(d) { return d.y; })
	    .style("fill", function(d) { return colors(d.color); })
	    .attr("r", function(d) { return d.radius; });
	link.attr("x1", function(d) { return d.source.x; })
	    .attr("y1", function(d) { return d.source.y; })
	    .attr("x2", function(d) { return d.target.x; })
	    .attr("y2", function(d) { return d.target.y; });
    });

    force.start()

    count.text(nrNodes + " nodes, " + links.length + " links.");
    if (links.length > 2.5 * nrNodes) { clearInterval(loop); }
}

var loop = setInterval(update, 1000);

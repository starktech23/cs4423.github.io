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
        color: Math.floor(Math.random() * 20),
        friends: []
    };
}

// list all possible links ...
var allLinks = [];
for (var j = 0; j < nrNodes; j++) {
    for (var k = 0; k < j; k++) {
        allLinks.push([k, j])
    }
}

// ... and shuffle with Knuth shuffle
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
    .charge(function(d) { return -200 + d.friends.length; })
    .gravity(0.1)
    .linkDistance(10)
    .links(links)
    .nodes(nodes);

var node = svg.selectAll(".node")
    .data(nodes)
    .enter()
    .append("circle")
    .attr("r", function(d) { return d.friends.length + 3; })
    .classed("node", true)
    .call(force.drag);

var count = d3.select("#count");

// connected component of node: BFS
function component(node) {
    var queue = [node];
    var list = [node];
    while (queue.length > 0) {
        var x = queue.pop();
        for (var j = 0; j < nodes[x].friends.length; j++) {
            var y = nodes[x].friends[j];
            if (list.indexOf(y) == -1) {
                queue.push(y);
                list.push(y);
            }
        }
    }
    return list;
}

// all components
function components() {
    var list = [];
    for (var j = 0; j < nrNodes; j++) {
        list.push(j);
    }
    var comps = [];
    while (list.length > 0) {
        var comp = component(list[0]);
        comps.push(comp);
        for (var j = 0; j < comp.length; j++) {
            list.splice(list.indexOf(comp[j]), 1);
        }
    }
    return comps;
}

var update = function() {
    var newLink = allLinks.shift();
    var tar = newLink[0];
    var src = newLink[1];

    // colors: repaint the smaller component
    var srcComponent = component(src);
    var tarComponent = component(tar);

    if (srcComponent.length < tarComponent.length) {
        var queue = srcComponent;
        var color = nodes[tar].color;
    }
    else {
        var queue = tarComponent;
        var color = nodes[src].color;
    }
    for (var j = 0; j < queue.length; j++) {
        nodes[queue[j]].color = color;
    }

    nodes[src].friends.push(tar);
    nodes[tar].friends.push(src);
    links.push({ source: src, target: tar });

    var link = svg.selectAll(".link").data(links);
    link.enter()
        .insert("line", "circle")
        .classed("link", true);

    force.on("tick", function(e) {
        node.attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; })
            .style("fill", function(d) { return colors(d.color); })
            .attr("r", function(d) { return d.friends.length + 3; });
        link.attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });
    });

    force.start()

    var nrComponents = components().length
    if (nrComponents == 1) {
        count.text(nrNodes + " nodes, " + nrComponents + " component, " + links.length + " links.");
        clearInterval(loop);
    }
    else {
        count.text(nrNodes + " nodes, " + nrComponents + " components, " + links.length + " links.");
    }
}

var loop = setInterval(update, 1000);

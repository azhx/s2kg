var nodes, edges, network;

function draw() {
    // create an array with nodes
    nodes = new vis.DataSet();
    nodes.add([
        {id: '1', label: 'Node 1', title: 'Yooooooooo<br>yeeeee'},
        {id: '2', label: 'Node 2', title: 'Yooooooooo<br>yeeeee'},
        {id: '3', label: 'Node 3', title: 'Yooooooooo<br>yeeeee'},
        {id: '4', label: 'Node 4', title: 'Yooooooooo<br>yeeeee'},
        {id: '5', label: 'Node 5', title: 'Yooooooooo<br>yeeeee'}
    ]);

    // create an array with edges
    edges = new vis.DataSet();
    edges.add([
        {id: '1', from: '1', to: '2'},
        {id: '2', from: '1', to: '3'},
        {id: '3', from: '2', to: '4'},
        {id: '4', from: '2', to: '5'}
    ]);

    // create a network
    var container = document.querySelector('#network');
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {
        layout: {
          hierarchical: false
        },
        edges: {
          color: "#000000",
          arrows: {
            to: {
              enabled: true
            }
          },
          smooth: {
            enabled: true,
            type: "dynamic",
            roundness: 0.5
          }
        },
        interaction: {
          tooltipDelay: 0
        },
        nodes: {
          shape: 'dot'
        },
        physics: {
          barnesHut: {
            avoidOverlap: 0.5,
            centralGravity:0.6
          }
        }
      }
    network = new vis.Network(container, data, options);
}


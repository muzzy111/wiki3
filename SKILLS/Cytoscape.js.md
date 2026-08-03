---
type: dashboard
cssclasses: [cards]
tags:
  - tools
  - sector
  - abstract
  - overview
---

# Cytoscape.js

## Overview
[Cytoscape.js](https://js.cytoscape.org/) is a feature-rich, high-performance graph theory and network visualization library written in pure JavaScript. It supports directed, undirected, mixed, and compound graphs.

## When to Use
- **Use when:**
  - Visualizing relational data (networks, social graphs, dependency trees, mind maps, biological pathways).
  - Implementing interactive graph features like panning, zooming, box selection, and node dragging.
  - Performing headless graph analysis in Node.js (e.g., shortest paths, PageRank, centrality).
- **Do NOT use when:**
  - Drawing standard charts (bar, line, scatter, pie) — use Chart.js, D3.js, or Recharts.
  - Displaying simple trees or file explorer directories — use simple HTML/CSS tree components.

## Quick Reference

### 1. Basic Initialization
Ensure the container element has a defined `width` and `height` in CSS before initializing Cytoscape.js.

```html
<div id="cy" style="width: 600px; height: 400px; display: block;"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.29.2/cytoscape.min.js"></script>
<script>
  const cy = cytoscape({
    container: document.getElementById('cy'),
    elements: [
      { data: { id: 'n1', label: 'Node 1' } },
      { data: { id: 'n2', label: 'Node 2' } },
      { data: { id: 'e1', source: 'n1', target: 'n2' } }
    ],
    style: [
      {
        selector: 'node',
        style: {
          'background-color': '#4ea5d9',
          'label': 'data(label)',
          'color': '#333'
        }
      },
      {
        selector: 'edge',
        style: {
          'width': 3,
          'line-color': '#ccc',
          'target-arrow-shape': 'triangle',
          'curve-style': 'bezier'
        }
      }
    ],
    layout: { name: 'grid', rows: 1 }
  });
</script>
```

### 2. Core Concepts
- **Core (`cy`)**: The main graph instance. Used to run layouts, manipulate viewport, and query elements.
- **Collection (`eles`)**: A read-only array of graph elements (nodes and/or edges).
- **Selectors**: Terse string selectors (like CSS) to query elements (e.g. `cy.$('node[weight > 50]')` or `cy.$('#n1')`).

## Common Operations

### Manipulating Elements
```javascript
// Adding elements
cy.add([
  { group: 'nodes', data: { id: 'n3' } },
  { group: 'edges', data: { id: 'e2', source: 'n2', target: 'n3' } }
]);

// Removing elements
cy.remove('#n1');

// Updating element data (always use .data() to trigger visual updates)
cy.$('#n3').data('label', 'Updated Name');
```

### Layouts
Position nodes automatically using built-in or external layout engines:
```javascript
// Run a new layout on the graph
cy.layout({
  name: 'cose', // Compound Spring Embedder
  animate: true,
  animationDuration: 1000
}).run();
```
*Built-in layouts:* `preset`, `grid`, `random`, `circle`, `concentric`, `breadthfirst`, `cose`.

### Graph Theory Algorithms
```javascript
// Dijkstra shortest path
const dijkstra = cy.elements().dijkstra('#n1');
const path = dijkstra.pathTo(cy.$('#n3')); // returns path collection
const distance = dijkstra.distanceTo(cy.$('#n3'));
```

## Common Mistakes
- **No container dimensions:** If the container div has 0 width or height, Cytoscape cannot calculate positions. Always define dimensions in CSS before initialization.
- **Direct object mutation:** Mutating node position objects or data objects directly does not trigger rendering. Always use `.position()` or `.data()` to [[update]] elements.
- **Invalid ES Module import:** Do not use `import * as cytoscape` — always use default import `import cytoscape from 'cytoscape'`.

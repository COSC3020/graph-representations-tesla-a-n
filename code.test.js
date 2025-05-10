const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const test =
    jsc.forall("array (pair nat nat)", function(edges) {
        var max = edges.reduce(function(a, b) { return Math.max(a, Math.max(b[0], b[1])); }, 0);
        var mat = [];
        for(var i = 0; i <= max; i++) {
            mat[i] = [];
            for(var j = 0; j <= max; j++) {
                mat[i][j] = 0;
            }
            for(var j = 0; j < edges.length; j++) {
                if(edges[j][0] == i) mat[i][edges[j][1]] = 1;
            }
        }
        var list = [];
        for(var i = 0; i <= max; i++) {
            list[i] = [];
            for(var j = 0; j < edges.length; j++) {
                if(edges[j][0] == i) list[i].push(edges[j][1]);
            }
            list[i].sort(function(a, b) { return a - b; });
            list[i] = [...new Set(list[i])];
        }
        return JSON.stringify(list) == JSON.stringify(convertToAdjList(mat));
    });

const testToAdjMatrix =
    jsc.forall("array (pair nat nat)", function(edges) {
        var max = edges.reduce(function(a, b) { return Math.max(a, Math.max(b[0], b[1])); }, 0);
    
        //create a reference adjacency matrix
        var refMatrix = Array(max + 1).fill().map(() => Array(max + 1).fill(0));
        for (var i = 0; i < edges.length; i++) {
            refMatrix[edges[i][0]][edges[i][1]] = 1;
        }
        
        //create an adjacency list
        var adjList = Array(max + 1).fill().map(() => []);
        for (var i = 0; i < edges.length; i++) {
            adjList[edges[i][0]].push(edges[i][1]);
        }
        
        //remove duplicates and sort
        for (var i = 0; i <= max; i++) {
            adjList[i] = [...new Set(adjList[i])].sort((a, b) => a - b);
        }
        
        //convert to Matrix and compare
        var convertedMatrix = convertToAdjMatrix(adjList, max + 1);
        
        // Compare the reference matrix with the converted matrix
        return JSON.stringify(refMatrix) === JSON.stringify(convertedMatrix);
    });

const testBidirectionalConversions =
    jsc.forall("array (pair nat nat)", function(edges) {
        var max = edges.reduce(function(a, b) { return Math.max(a, Math.max(b[0], b[1])); }, 0);

        //create original adjmatrix
        var originalMatrix = Array(max + 1).fill().map(() => Array(max + 1).fill(0));
        for (var i = 0; i < edges.length; i++) {
            originalMatrix[edges[i][0]][edges[i][1]] = 1;
        }
        
        //convert mat to list
        var adjList = convertToAdjList(originalMatrix);
        
        //convert list to mat
        var reconvertedMatrix = convertToAdjMatrix(adjList, max + 1);
        
        //check if og mat and reconverted mat match
        return JSON.stringify(originalMatrix) === JSON.stringify(reconvertedMatrix);
    });



//testing convertToAdjList
jsc.assert(test, { tests: 1000 });

//testing convertToAdjMatrix
jsc.assert(testToAdjMatrix, { tests: 1000 });

//testing bidirectional conversion
jsc.assert(testBidirectionalConversions, { tests: 500});


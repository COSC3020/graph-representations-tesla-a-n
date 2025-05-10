function convertToAdjList(adjMatrix) {
    var adjList = [];
    for (var i = 0; i < adjMatrix.length; i++) {
        adjList[i] = [];
        for (var j = 0; j < adjMatrix[i].length; j++) {
            if (adjMatrix[i][j] == 1) {
                adjList[i].push(j);
            }
        }
    }
    return adjList;
}

function convertToAdjMatrix(adjList) {
    var adjMatrix = [];
    for (var i = 0; i < adjList.length; i++) {
        adjMatrix[i] = [];
        for (var j = 0; j < adjList.length; j++) {
            adjMatrix[i][j] = 0;
        }
    }

    for(var i = 0; i < adjList.length; i++) {
        for(var j = 0; j < adjList[i].length; j++) {
            adjMatrix[i][adjMatrix[i][j]] = 1;
        }
    }
    return adjMatrix;
}

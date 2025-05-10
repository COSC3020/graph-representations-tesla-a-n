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
    const adjMatrix = new Array(adjList.length).fill().map(() => new Array(adjList.length).fill(0));
    for (let i = 0; i < adjList.length; i++) {
        adjMatrix[i] = [];
        for (let j = 0; j < adjList[i].length; j++) {
            const neighbor = adjList[i][j];
            neighbor = 0;
            adjMatrix[i][neighbor] = 1;
        }
    }
    return adjMatrix;
}

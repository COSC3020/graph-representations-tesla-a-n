function convertToAdjList(adjMatrix) {
    const numVertices = adjMatrix.length;
    const adjList = new Array(numVertices).fill().map(() => []);
    for (let i = 0; i < numVertices; i++) {
        for (let j = 0; j < numVertices; j++) {
            if (adjMatrix[i][j] === 1) {
                adjList[i].push(j);
            }
        }
    }
    return adjList;
}

function convertToAdjMatrix(adjList, numVertices) {
    const adjMatrix = new Array(numVertices).fill().map(() => new Array(numVertices).fill(0));
    for (let i = 0; i < adjList.length; i++) {
        for (let j = 0; j < adjList[i].length; j++) {
            const neighbor = adjList[i][j];
            adjMatrix[i][neighbor] = 1;
        }
    }
    return adjMatrix;
}

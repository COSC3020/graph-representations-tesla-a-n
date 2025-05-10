function convertToAdjList(adjMatrix) {
    adjList of 0
    outterloop for each vertex
        innerloop for each vertex
            push 1
    return adjList;
}

function convertToAdjMatrix(adjList) {
    adjMatrix of 0
    outerloop for each vertex
        innerloop for each vertex
            neighbor = adjMatrix[i][j]
            push 0 at neighbor
            push 1 at adjMatrix[i]neighbor
    return adjMatrix
}

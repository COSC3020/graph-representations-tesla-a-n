# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

### To understand

The algorithm would need to go through each cell of the matrix for each vertex
and then also check it's relation to other verteces. THis would need an outerloop
per vertex and an inner loop per vertex to consider every possible pair of 
verteces. 

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

The runtime complexity:

  - $O(V)$ time is required for the outerloop that goes through each vertex
  - $O(V)$ time is required again for the innerloop to find all possible pairs
  - Inside the loops is where conditions would be checked and pushed which would
    require just O(1) or constant time
  - $(O(V)*O(V))+O(1)$ or $O(V^2)$

__AND__

With n = # of vertices and e = # of edges,

Looking at the iterations of the inner loop accross all iterations of the outer
loop, it'll run e times in total because each edge is one neighbor entry in the 
adjacency list.

Therefore, the total time complexity is $O(V^(2) + e)$ but since e is at most $V^2$
(at least in a complete graph), this can simplify further to $O(V^2)$

Basically meaning that we only process existing edges when "populating the matrix" 
and we still need to initialize the entire V x V matrix, no matter how many edges 
exist. So even if e is way smaller than $V^2$, most of the work is done in the 
initialization. If it's a dense graph and e approaches $V^2$ the edge processing
becomes equally as significant.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.

converting an adjacency matrix to a adjacency list would have the same complexity
of $O(V^2)$ since it would also have to initialize a V x V matrix

In both cases, from matrix to list or list to matrix; the best case (a graph with 
no edges) would be: $O(V^2)$ and the worst case (with e = $V^2$), the time
complexity would still be $O(V^2)$

## Sources

[Converting adjMatrix to adjList](https://www.geeksforgeeks.org/convert-adjacency-matrix-to-adjacency-list-representation-of-graph/)

[Significance of edges and vertices](https://en.wikipedia.org/wiki/Dense_graph)

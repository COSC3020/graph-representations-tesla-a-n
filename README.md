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

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.

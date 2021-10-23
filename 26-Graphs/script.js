// Vertex = node
// Edge = connection between nodes
class Graph
{
    constructor()
    {
        this.adjacencyList= {};
    }
    addVertex(vertex)
    {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2)
    {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2)
    {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(el => el !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(el => el !== vertex1);
    }
    removeVertex(vertex)
    {
        // let length = this.adjacencyList[vertex].length;
        // for(let i = 0; i < length;i++)
        // {
        //     console.log(this.adjacencyList[vertex][0])
        //     this.removeEdge(vertex, this.adjacencyList[vertex][0]);
        // }
        while(this.adjacencyList[vertex].length)
        {
            let anotherVertex = this.adjacencyList[vertex].pop();
            // console.log(anotherVertex);
            this.removeEdge(vertex, anotherVertex);
        }
        delete this.adjacencyList[vertex];
    }
}

let g =new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong")
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");